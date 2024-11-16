import express from 'express';

const app = express();
const port = 5000;

app.use(express.json());

app.post('/api/feedback', async (req, res) => {
    const { prompt } = req.body;
    try {
        // Placeholder hint logic
        const hint = `Here's a hint for: ${prompt}`;
        res.json({ feedback: hint });
    } catch (error) {
        res.status(500).json({ feedback: 'Failed to get hint. Please try again.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
