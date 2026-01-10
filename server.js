require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 10000; // Render prefiere el puerto 10000 o el que asigne en PORT

// Logger simple para ver las peticiones en los logs de Render
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

    console.log('📬 Nuevo mensaje de contacto recibido:');
    console.log(`Nombre: ${name}, Email: ${email}`);

    // CONFIGURACIÓN DE CORREO (Optimizada para evitar bloqueos en la nube)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true para puerto 465 (SSL)
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            connectionTimeout: 10000 // 10 segundos
        });

        let mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Nuevo mensaje de ${name} - Agencia Web`,
            text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('✅ Email enviado con éxito');
            return res.status(200).json({ message: 'Mensaje recibido correctamente' });
        } catch (error) {
            console.error('❌ Error enviando email:', error);
            return res.status(500).json({ error: 'Error al enviar el email: ' + error.message });
        }
    } else {
        console.warn('⚠️ Advertencia: EMAIL_USER o EMAIL_PASS no están configurados en Render');
        return res.status(500).json({ error: 'Configuración de servidor incompleta' });
    }
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
