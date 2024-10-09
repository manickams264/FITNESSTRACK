const API_URL = 'https://fitness-backend-nzk6.onrender.com/api';

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Registration failed');
        }

        return await response.json(); 
    } catch (error) {
        console.error('Error during registration:', error);
        throw error; 
    }
};

export const login = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Invalid credentials');
        }

        return data; 
    } catch (error) {
        console.error('Error during login:', error); 
        throw error; 
    }
};
