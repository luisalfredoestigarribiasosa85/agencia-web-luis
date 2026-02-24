const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    // Solo aceptar POST
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Método no permitido' });
        return;
    }

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
        res.status(400).json({ message: 'Faltan nombre, email o mensaje' });
        return;
    }

    if (!process.env.RESEND_API_KEY) {
        console.error('❌ ERROR: RESEND_API_KEY no configurada');
        res.status(200).json({ message: 'Recibido (Modo log)' });
        return;
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Agency Contact <onboarding@resend.dev>',
            to: 'luisalfredoestigarribiasosa85@gmail.com',
            reply_to: email,
            subject: `Nuevo mensaje de ${name} - Luis Dev`,
            text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        });

        if (error) {
            console.error('❌ Error de Resend:', error);
            res.status(200).json({ message: 'Mensaje recibido', log: true });
            return;
        }

        console.log('✅ Email enviado vía Resend:', data.id);
        res.status(200).json({ message: 'Tu mensaje ha sido enviado con éxito' });
    } catch (err) {
        console.error('❌ Error crítico:', err.message);
        res.status(200).json({ message: 'Mensaje recibido' });
    }
};
