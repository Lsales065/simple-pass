import { createContext, useContext, useEffect, useState } from 'react';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8080';

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authLoading, setAuthLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // verifica se já está logado
        const checkAuth = async () => {
            try {
                const response = await fetch(`${API_URL}/user/me`, {
                    method: 'GET',
                    credentials: 'include',
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user);
                }
            } catch (err) {
                console.log('Erro ao verificar sessão:', err);
            } finally {
                setAuthLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async ({ email, password }) => {
        try {
            setLoading(true);

            const response = await fetch(`${API_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error);

            setUser(data.user);
            setError(null);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const register = async ({ cpf, name, email, password, confirmationPassword }) => {
        try {
            setLoading(true);

            const response = await fetch(`${API_URL}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cpf, name, email, password, confirmationPassword }),
                credentials: 'include',
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error);

            setUser(data.user);
            setError(null);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await fetch(`${API_URL}/user/logout`, {
                method: 'POST',
                credentials: 'include',
            });
        } finally {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, authLoading, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('Envolve em um AuthContextProvider');
    return context;
};
