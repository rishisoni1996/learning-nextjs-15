'use client';
import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
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