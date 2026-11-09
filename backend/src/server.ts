import app from './app.js';

const port = Number(process.env.PORT ?? 7000);
const nodeEnv = process.env.NODE_ENV ?? 'development';

if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is required');
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server running on port ${port} (${nodeEnv})`);
});
