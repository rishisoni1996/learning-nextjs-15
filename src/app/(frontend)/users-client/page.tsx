'use client';
import { useState, useEffect } from 'react';

type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    setError('Failed to fetch users');
                    setLoading(false);
                    return;
                }
                const data = await response.json();
                setUsers(data);
            }
            catch (error) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li
                        key={user.id}
                        className='border p-2 my-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300'
                    >
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}