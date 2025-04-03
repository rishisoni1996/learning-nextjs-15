export default async function User({
    params,
}: {
    params: { id: string };
}) {
    const res = await fetch(`https://67ee9dbcc11d5ff4bf7a54b5.mockapi.io/users/${params.id}`, {
        cache: 'no-store',
    });
    const user = await res.json();
    console.log("🚀 ~ user:", user)
    if (!user) {
        return <div>User not found</div>;
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded-lg p-4 text-gray-700">
                <h1 className="text-2xl font-bold">User Details</h1>
                <p className="text-gray-700">ID: {user.id}</p>
                <p className="text-gray-700">Name: {user.name}</p>
            </div>
        </div>
    );
}