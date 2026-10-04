import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response(
            JSON.stringify({ error: 'Method not allowed' }),
            {
                status: 405,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }

    try {
        const {
            name,
            virksomhed,
            email,
            phone,
            besked,
        } = await req.json();

        if (!name || !email || !besked) {
            return new Response(
                JSON.stringify({
                    error: 'Name, email and message are required',
                }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Greydot <support@greydot.dk>',
            to: ['isurdu3@gmail.com'],
            replyTo: email,
            subject: `Ny henvendelse fra ${name}`,
            text: `
Ny henvendelse fra hjemmesiden

Navn: ${name}
Virksomhed: ${virksomhed || '-'}
E-mail: ${email}
Telefon: ${phone || '-'}

Besked:
${besked}
            `,
        });

        if (error) {
            return new Response(
                JSON.stringify({ error: error.message }),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                data,
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch {
        return new Response(
            JSON.stringify({
                error: 'Something went wrong',
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}