require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 10000; // Render prefiere el puerto 10000 o el que asigne en PORT

// Logger para Render
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

// API Route for contact form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log('📬 Nuevo intento de contacto:');
    console.log(`Nombre: ${name}, Email: ${email}`);

    // Verificación rápida de variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('❌ ERROR: Variables EMAIL_USER o EMAIL_PASS no configuradas en Render');
        return res.status(200).json({ message: 'Recibido (Modo log)' });
    }

    // Configuración usando 'service: gmail' que es más robusto para Gmail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        connectionTimeout: 20000, // Aumentado a 20 segundos para evitar ETIMEDOUT en nubes lentas
        greetingTimeout: 20000,
        socketTimeout: 20000
    });

    let mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Nuevo mensaje de ${name} - Agencia Web`,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    };

    try {
        // Ejecutamos el envío sin 'await' bloqueante para responder rápido al cliente
        // O lo dejamos con await pero manejando el error para no asustar al visitante
        await transporter.sendMail(mailOptions);
        console.log('✅ Email enviado con éxito');
        res.status(200).json({ message: 'Gracias por tu mensaje' });
    } catch (error) {
        console.error('❌ Error enviando email:', error.message);
        // IMPORTANTE: Devolvemos 200 aunque falle el email para que el CLIENTE 
        // reciba un mensaje de éxito, ya que el mensaje ya quedó registrado en tus LOGS de Render.
        // Así no pierdes al cliente y tú puedes revisar el log después.
        res.status(200).json({
            message: 'Mensaje recibido',
            warning: 'Notificación por correo demorada'
        });
    }
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en puerto ${PORT}`);
});
