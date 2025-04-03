type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
}

export default async function UsersServer() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 60 }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    const users: User[] = await res.json();

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