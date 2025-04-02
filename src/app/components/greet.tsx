export const Greet = () => {
    console.log("Greet component loaded");
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Hello, world!</h1>
            <p className="text-white-700">Greet component.</p>
        </div>
    );
}