export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>List of products</h1>
            {children}
        </div>
    );
}