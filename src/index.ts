import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello, world!');
});

// Return a random number between 0 and 1
app.get('/random', (_req: Request, res: Response) => {
    res.json({ number: Math.random() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
