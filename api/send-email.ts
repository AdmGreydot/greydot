import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const {
            name,
            virksomhed,
            email,
            phone,
            besked,
        } = await request.json();

        if (!name || !email || !besked) {
            return Response.json(
                {
                    error: 'Name, email and message are required',
                },
                { status: 400 }
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
            console.error('Resend error:', error);

            return Response.json(
                { error: error.message },
                { status: 400 }
            );
        }

        return Response.json({
            success: true,
            data,
        });

    } catch (error) {
        console.error('Send email error:', error);

        return Response.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}