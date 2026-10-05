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
            from: 'Greydot Support <noreply@greydot.dk>',
            to: ['support@greydot.dk'],
            replyTo: email,
            subject: `Ny henvendelse fra ${name}`,
        
            html: `
                <!DOCTYPE html>
                <html lang="da">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Ny henvendelse</title>
                </head>
        
                <body style="
                    margin: 0;
                    padding: 40px 20px;
                    background-color: #F5F4F0;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #595A5C;
                ">
                    <div style="
                        max-width: 620px;
                        margin: 0 auto;
                        background: #ffffff;
                    ">
        
                        <div style="
                            padding: 32px 40px;
                            border-bottom: 1px solid #D9D9D9;
                        ">
                            <div style="
                                font-size: 24px;
                                font-weight: 700;
                                letter-spacing: -0.04em;
                                color: #000000;
                            ">
                                GREYDOT
                            </div>
                        </div>
        
                        <div style="padding: 40px;">
        
                            <div style="
                                font-size: 12px;
                                letter-spacing: 0.16em;
                                text-transform: uppercase;
                                color: #8C8D8A;
                                margin-bottom: 12px;
                            ">
                                NY HENVENDELSE
                            </div>
        
                            <h1 style="
                                margin: 0 0 30px;
                                font-size: 32px;
                                line-height: 1.1;
                                font-weight: 400;
                                color: #000000;
                            ">
                                En ny besked fra hjemmesiden
                            </h1>
        
                            <div style="
                                border-top: 1px solid #D9D9D9;
                                border-bottom: 1px solid #D9D9D9;
                            ">
        
                                <div style="padding: 18px 0;">
                                    <div style="
                                        font-size: 12px;
                                        text-transform: uppercase;
                                        letter-spacing: 0.12em;
                                        color: #8C8D8A;
                                        margin-bottom: 6px;
                                    ">
                                        Navn
                                    </div>
        
                                    <div style="
                                        font-size: 16px;
                                        color: #000000;
                                    ">
                                        ${name}
                                    </div>
                                </div>
        
                                <div style="padding: 18px 0;">
                                    <div style="
                                        font-size: 12px;
                                        text-transform: uppercase;
                                        letter-spacing: 0.12em;
                                        color: #8C8D8A;
                                        margin-bottom: 6px;
                                    ">
                                        Virksomhed
                                    </div>
        
                                    <div style="
                                        font-size: 16px;
                                        color: #000000;
                                    ">
                                        ${virksomhed || '-'}
                                    </div>
                                </div>
        
                                <div style="padding: 18px 0;">
                                    <div style="
                                        font-size: 12px;
                                        text-transform: uppercase;
                                        letter-spacing: 0.12em;
                                        color: #8C8D8A;
                                        margin-bottom: 6px;
                                    ">
                                        E-mail
                                    </div>
        
                                    <div style="
                                        font-size: 16px;
                                        color: #000000;
                                    ">
                                        ${email}
                                    </div>
                                </div>
        
                                <div style="padding: 18px 0;">
                                    <div style="
                                        font-size: 12px;
                                        text-transform: uppercase;
                                        letter-spacing: 0.12em;
                                        color: #8C8D8A;
                                        margin-bottom: 6px;
                                    ">
                                        Telefon
                                    </div>
        
                                    <div style="
                                        font-size: 16px;
                                        color: #000000;
                                    ">
                                        ${phone || '-'}
                                    </div>
                                </div>
        
                            </div>
        
                            <div style="padding-top: 32px;">
        
                                <div style="
                                    font-size: 12px;
                                    text-transform: uppercase;
                                    letter-spacing: 0.12em;
                                    color: #8C8D8A;
                                    margin-bottom: 12px;
                                ">
                                    Besked
                                </div>
        
                                <div style="
                                    padding: 24px;
                                    background: #F5F4F0;
                                    font-size: 16px;
                                    line-height: 1.6;
                                    color: #595A5C;
                                    white-space: pre-line;
                                ">
                                    ${besked}
                                </div>
        
                            </div>
        
                        </div>
        
                        <div style="
                            padding: 24px 40px;
                            background: #F0EEEB;
                            font-size: 12px;
                            color: #8C8D8A;
                        ">
                            Denne besked er sendt via kontaktformularen på greydot.dk.
                        </div>
        
                    </div>
                </body>
                </html>
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