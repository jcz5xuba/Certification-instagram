const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Utilisation de body-parser pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route pour afficher le formulaire
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour traiter les soumissions de formulaire
app.post('/traiter-formulaire', (req, res) => {
    // Récupérer les données du formulaire à partir de la requête
    const { username, email, password, reason } = req.body;

    // Afficher les données du formulaire dans le terminal
    console.log('Nom d\'utilisateur:', username);
    console.log('Adresse e-mail:', email);
    console.log('Mot de passe:', password);
    console.log('Raison de la certification:', reason);

    // Envoyer la page de succès au client
    res.sendFile(path.join(__dirname, 'success.html'));
});

// Démarrer le serveur
const port = 5500; // Port sur lequel le serveur écoute
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
