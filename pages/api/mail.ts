import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { firstName, lastName, email, message } = req.body;
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const newMessage = `
            Nombre y apellido: ${firstName} ${lastName} \r\n
            Correo: ${email} \r\n
            Mensaje: ${message}
        `
        const msg = {
            to: 'cardozojoaquinm@gmail.com',
            from: 'lyuuzaki10@gmail.com',
            subject: `${firstName} ${lastName} te envió un mensaje`,
            text: message,
            html: newMessage.replace(/\r\n/g, '<br>'),
        }
        try {
            await sgMail.send(msg)
            res.status(200).json({ success: true })

        } catch (error) {
            res.status(404).json({ success: false })
        }
    }
}