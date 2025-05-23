import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/signup', (req, res) => {
    res.send('Signup page');
});

app.get('/login', (req, res) => {
    res.send('Login page');
});

app.get('/chat', (req, res) => {
    res.send('Chat page');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});