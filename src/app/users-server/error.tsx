'use client';
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
    console.error(error);

    useEffect(() => {
        console.error("Error occurred:", error);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-red-500">Error: Failed to fetch users</h1>
        </div>
    );
}