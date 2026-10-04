export default async function handler(req: Request) {
    console.log('API FUNCTION STARTED');
    console.log('METHOD:', req.method);

    return new Response(
        JSON.stringify({
            success: true,
            message: 'API works',
            method: req.method,
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
}