import { createContext, useContext, useEffect, useState } from 'react';

import { env } from '../config/env';

export const CardContext = createContext({});

export const CardContextProvider = ({ children }) => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCard();
    }, []);

    const getCard = async () => {
        try {
            setLoading(true);

            const response = await fetch(`${env.apiUrl}/card`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message);

            setCard(data.card);
            setError(null);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return <CardContext.Provider value={{ card, loading, error, getCard }}>{children}</CardContext.Provider>;
};

export const useCardContext = () => {
    const context = useContext(CardContext);
    if (!context) throw new Error('Envolve em um CardContextProvider');
    return context;
};
