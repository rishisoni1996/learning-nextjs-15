'use client';
import { useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';

export const Counter = () => {

    // const { userId, isLoaded, sessionId, getToken } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();
    console.log("🚀 ~ Counter ~ isLoaded, isSignedIn, user:", isLoaded, isSignedIn, user)
    const [count, setCount] = useState(0);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <div>Please sign in to see the counter.</div>;
    }
    console.log('Counter component loaded');
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Counter</h1>
            <p className="text-white-700">Count: {count}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}