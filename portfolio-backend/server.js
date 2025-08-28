// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route pour le formulaire de contact
app.post('/contact', async (req, res) => {
  const { nom, email, message } = req.body;

  if (!nom || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  // Ici, vous traiterez le message (sauvegarde dans la base de données, etc.)
  console.log(`Nouveau message de: ${nom} (${email})`);
  console.log(`Message: ${message}`);

  // Envoi d'une réponse de succès
  res.status(200).json({ message: 'Votre message a été envoyé avec succès!' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// server.js
// ...
const Message = require('../models/Message'); // Importez le modèle

app.post('/contact', async (req, res) => {
  const { nom, email, message } = req.body;

  if (!nom || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    const newMessage = new Message({ nom, email, message });
    await newMessage.save(); // Sauvegarde le message dans la base de données
    res.status(200).json({ message: 'Votre message a été envoyé avec succès!' });
  } catch (err) {
    console.error('Erreur lors de l\'enregistrement du message:', err);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});
// ...