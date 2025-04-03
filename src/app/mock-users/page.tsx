import { revalidatePath } from "next/cache";
// import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserCard from "../components/userCar";

type User = {
    id: string;
    name: string;
}

export default async function MockUsers() {

    // const authObject = await auth();
    // const user = await currentUser();

    const res = await fetch('https://67ee9dbcc11d5ff4bf7a54b5.mockapi.io/users', {
        cache: 'no-store',
    });
    const users: User[] = await res.json();

    async function addUser(formData: FormData) {
        'use server';
        const name = formData.get('name');
        const res = await fetch('https://67ee9dbcc11d5ff4bf7a54b5.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (!res.ok) {
            throw new Error('Failed to add user');
        }
        revalidatePath('/mock-users');
    }

    return (
        <div>
            <div>
                <form action={addUser} className="flex items-center mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Add users..."
                        className="border border-gray-300 rounded p-2 bg-white text-gray-700"
                    />
                    <button type="submit" className="ml-2 bg-blue-500 text-white rounded p-2">
                        Add User
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-4 gap-4 rounded">
                {users.map((user: User) => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
}