import express, { type Express } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { contactRouter } from './routes/contact.routes';
import { portfolioRouter } from './routes/portfolio.routes';
import { errorMiddleware } from './middleware/error.middleware';

const app: Express = express();

const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:3000';

app.use(cors({
  origin: frontendUrl,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/portfolio', portfolioRouter);
app.use('/api/contact', contactLimiter, contactRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use(errorMiddleware);

export default app;
