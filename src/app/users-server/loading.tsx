export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <svg
                className="animate-spin h-10 w-10 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1.5 15h-3v-2h3v2zm0-4h-3V7h3v6z"
                />
            </svg>
        </div>
    );
}