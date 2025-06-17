import { createContext, useContext, useEffect, useState } from 'react';
import { env } from '../config/env';
import { useCardContext } from './card-context';

export const PaymentContext = createContext({});

export const PaymentContextProvider = ({ children }) => {
    const { getCard } = useCardContext();

    const [payments, setPayments] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPayments();
    }, []);

    const getPayments = async () => {
        try {
            setLoading(true);

            const response = await fetch(`${env.apiUrl}/payments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message);

            setPayments(data.payments);
            setError(null);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const registerPayment = async ({ paymentMethod, value }) => {
        try {
            setLoading(true);

            const response = await fetch(`${env.apiUrl}/payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ paymentMethod, value }),
                credentials: 'include',
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error);

            getPayments();
            getCard();

            setError(null);

            return true;
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return <PaymentContext.Provider value={{ payments, loading, error, registerPayment }}>{children}</PaymentContext.Provider>;
};

export const usePaymentContext = () => {
    const context = useContext(PaymentContext);
    if (!context) throw new Error('Envolve em um PaymentContextProvider');
    return context;
};
