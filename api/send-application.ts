import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILE_SIZE = 3 * 1024 * 1024;

const ALLOWED_FILES: Record<string, string[]> = {
    pdf: ['application/pdf'],
    doc: ['application/msword'],
    docx: [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
};

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (char) => {
        const entities: Record<string, string> = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        };

        return entities[char];
    });
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const name = String(formData.get('name') ?? '').trim();
        const email = String(formData.get('email') ?? '').trim();
        const phone = String(formData.get('phone') ?? '').trim();
        const interesser = String(
            formData.get('interesser') ?? '',
        ).trim();
        const besked = String(formData.get('besked') ?? '').trim();
        const link = String(formData.get('link') ?? '').trim();

        const attachment = formData.get('attachment');

        if (!name || !email || !interesser || !besked) {
            return Response.json(
                { error: 'Name, email, interests and message are required.' },
                { status: 400 },
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json(
                { error: 'Invalid email address.' },
                { status: 400 },
            );
        }

        const attachments: {
            filename: string;
            content: Buffer;
        }[] = [];

        if (attachment !== null) {
            if (!(attachment instanceof File)) {
                return Response.json(
                    { error: 'Invalid attachment.' },
                    { status: 400 },
                );
            }

            if (attachment.size > MAX_FILE_SIZE) {
                return Response.json(
                    { error: 'Filen må maksimalt være 3 MB.' },
                    { status: 400 },
                );
            }

            if (attachment.size === 0) {
                return Response.json(
                    { error: 'Den valgte fil er tom.' },
                    { status: 400 },
                );
            }

            const extension = attachment.name
                .split('.')
                .pop()
                ?.toLowerCase();

            const allowedMimeTypes = extension
                ? ALLOWED_FILES[extension]
                : undefined;

            if (
                !allowedMimeTypes ||
                (attachment.type !== '' &&
                    !allowedMimeTypes.includes(attachment.type))
            ) {
                return Response.json(
                    {
                        error: 'Kun PDF-, DOC- og DOCX-filer er tilladt.',
                    },
                    { status: 400 },
                );
            }

            attachments.push({
                filename: attachment.name.replace(/[/\\]/g, '_'),
                content: Buffer.from(await attachment.arrayBuffer()),
            });
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone || '-');
        const safeInteresser = escapeHtml(interesser);
        const safeBesked = escapeHtml(besked);
        const safeLink = escapeHtml(link || '-');

        const { data, error } = await resend.emails.send({
            from: 'Greydot Jobansøgning <noreply@greydot.dk>',
            to: ['kontakt@greydot.dk'],
            replyTo: email,
            subject: `Jobansøgning fra ${name}`,

            attachments,

            html: `
                <!DOCTYPE html>
                <html lang="da">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Ny jobansøgning</title>
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
                            font-size: 24px;
                            font-weight: 700;
                            letter-spacing: -0.04em;
                            color: #000000;
                        ">
                            GREYDOT
                        </div>

                        <div style="padding: 40px;">
                            <div style="
                                font-size: 12px;
                                letter-spacing: 0.16em;
                                text-transform: uppercase;
                                color: #8C8D8A;
                                margin-bottom: 12px;
                            ">
                                KARRIERE
                            </div>

                            <h1 style="
                                margin: 0 0 30px;
                                font-size: 32px;
                                line-height: 1.1;
                                font-weight: 400;
                                color: #000000;
                            ">
                                Ny jobansøgning
                            </h1>

                            <div style="
                                border-top: 1px solid #D9D9D9;
                                border-bottom: 1px solid #D9D9D9;
                            ">
                                ${[
                                    ['Navn', safeName],
                                    ['E-mail', safeEmail],
                                    ['Telefon', safePhone],
                                    ['Interesser', safeInteresser],
                                    ['LinkedIn / portfolio', safeLink],
                                ].map(([label, value]) => `
                                    <div style="padding: 18px 0;">
                                        <div style="
                                            font-size: 12px;
                                            text-transform: uppercase;
                                            letter-spacing: 0.12em;
                                            color: #8C8D8A;
                                            margin-bottom: 6px;
                                        ">
                                            ${label}
                                        </div>
                                        <div style="
                                            font-size: 16px;
                                            color: #000000;
                                            overflow-wrap: anywhere;
                                        ">
                                            ${value}
                                        </div>
                                    </div>
                                `).join('')}
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
                                    overflow-wrap: anywhere;
                                ">
                                    ${safeBesked}
                                </div>
                            </div>

                            <p style="font-size: 13px; color: #8C8D8A;">
                                ${
                                    attachments.length
                                        ? 'Kandidatens fil er vedhæftet denne e-mail.'
                                        : 'Der blev ikke vedhæftet nogen fil.'
                                }
                            </p>
                        </div>

                        <div style="
                            padding: 24px 40px;
                            background: #F0EEEB;
                            font-size: 12px;
                            color: #8C8D8A;
                        ">
                            Sendt via karriereformularen på greydot.dk.
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        if (error) {
            console.error('Resend error:', error);

            return Response.json(
                { error: 'Kunne ikke sende ansøgningen.' },
                { status: 500 },
            );
        }

        return Response.json({
            success: true,
            data,
        });
    } catch (error) {
        console.error('Send application error:', error);

        return Response.json(
            { error: 'Something went wrong.' },
            { status: 500 },
        );
    }
}