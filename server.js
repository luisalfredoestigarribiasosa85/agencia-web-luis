require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 10000;

// Diagnóstico inicial para Render
console.log('--- Diagnóstico de Inicio ---');
console.log(`PORT: ${PORT}`);
console.log(`EMAIL_USER configurado: ${process.env.EMAIL_USER ? 'SÍ' : 'NO'}`);
console.log(`EMAIL_PASS configurado: ${process.env.EMAIL_PASS ? 'SÍ (longitud: ' + process.env.EMAIL_PASS.length + ')' : 'NO'}`);
console.log('---------------------------');

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

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('❌ ERROR: Faltan EMAIL_USER o EMAIL_PASS en las variables de entorno de Render.');
        return res.status(200).json({ message: 'Error de servidor, pero el mensaje fue logueado.', log: true });
    }

    // Configuración súper explícita para evitar problemas en Render
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // SSL directo
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        connectionTimeout: 30000,
        greetingTimeout: 30000,
        socketTimeout: 30000,
        debug: true, // Activa logs de nodemailer en la consola
        logger: true
    });

    let mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Nuevo mensaje de ${name} - Luis Dev`,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Email enviado satisfactoriamente');
        res.status(200).json({ message: 'Tu mensaje ha sido enviado' });
    } catch (error) {
        console.error('❌ Error SMTP detallado:', error);
        // Devolvemos 200 igual para no asustar al cliente
        res.status(200).json({
            message: 'Mensaje recibido',
            warning: 'Notificación demorada'
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
