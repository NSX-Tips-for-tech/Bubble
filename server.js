const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Simple password stored on the server side
const correctPassword = 'Dev';

// Route to validate the password
app.post('/validate-password', (req, res) => {
    const { password } = req.body;
    if (password === correctPassword) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.use(express.static('public')); // Serve your HTML file from the 'public' directory

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
