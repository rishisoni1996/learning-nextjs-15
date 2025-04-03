'use client';
import { useRouter } from 'next/navigation';

type User = {
    id: string;
    name: string;
};

export default function UserCard({
    user
}: {
    user: User
}) {
    const redirect = useRouter();
    return (
        <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700 cursor-pointer"
            onClick={() => redirect.push(`/mock-users/${user.id}`)}
        >
            {user.name}
        </div>
    );
}