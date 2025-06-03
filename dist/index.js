"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (_req, res) => {
    res.send('Hello, world!');
});
// Return a random number between 0 and 1
app.get('/random', (_req, res) => {
    res.json({ number: Math.random() });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
