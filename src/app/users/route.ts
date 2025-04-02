export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function POST(request: Request) {
    console.log("🚀 ~ POST ~ request:", request)

    return new Response(null, {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}