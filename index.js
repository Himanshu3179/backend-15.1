const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Return a random number between 0 and 1
app.get('/random', (req, res) => {
    res.json({ number: Math.random() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
