require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Resend } = require('resend'); // Cambiamos a Resend

const app = express();
const PORT = process.env.PORT || 10000;
// Inicializamos Resend solo si hay API Key (evita crash al arrancar sin clave)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Diagnóstico Luis Dev
console.log('--- Diagnóstico Luis Dev ---');
console.log(`RESEND_API_KEY configurada: ${process.env.RESEND_API_KEY ? 'SÍ' : 'NO'}`);
console.log('---------------------------');

// Logger para Render
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log('📬 Nuevo intento de contacto (via Resend):');
    console.log(`Nombre: ${name}, Email: ${email}`);

    if (!resend) {
        console.error('❌ ERROR: RESEND_API_KEY no configurada');
        return res.status(200).json({ message: 'Recibido (Modo log)' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Agency Contact <onboarding@resend.dev>',
            to: 'luisalfredoestigarribiasosa85@gmail.com', // Cambiado según el error de Resend
            reply_to: email,
            subject: `Nuevo mensaje de ${name} - Luis Dev`,
            text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        });

        if (error) {
            console.error('❌ Error de Resend:', error);
            return res.status(200).json({ message: 'Mensaje recibido', log: true });
        }

        console.log('✅ Email enviado vía Resend:', data.id);
        res.status(200).json({ message: 'Tu mensaje ha sido enviado con éxito' });
    } catch (err) {
        console.error('❌ Error crítico:', err.message);
        res.status(200).json({ message: 'Mensaje recibido' });
    }
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en puerto ${PORT}`);
});
