import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get('/ping', (req: Request, res: Response) => {
  res.status(200).send('pong');
});

// Invocations endpoint
app.post('/invocations', (req: Request, res: Response) => {
  // TODO: Implement your invocation logic here
  res.status(200).json({ message: 'Invocation received' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 