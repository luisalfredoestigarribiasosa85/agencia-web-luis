require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

// API Route for contact form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log('Nuevo mensaje de contacto recibido:');
    console.log(`Nombre: ${name}, Email: ${email}`);

    // CONFIGURACIÓN DE CORREO (Solo se activa si el .env está configurado)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de ${name} - Agencia Web`,
            text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('✅ Email enviado con éxito');
        } catch (error) {
            console.error('❌ Error enviando email:', error);
            return res.status(500).json({ error: 'Error al enviar el correo' });
        }
    } else {
        console.warn('⚠️ Advertencia: Variables EMAIL_USER o EMAIL_PASS no encontradas en el .env');
    }

    res.status(200).json({ message: 'Mensaje recibido correctamente' });
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor de Luis Dev corriendo en http://localhost:${PORT}`);
});
