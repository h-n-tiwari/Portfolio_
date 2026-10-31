import type { Request, Response, NextFunction } from 'express';

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const isDev = process.env.NODE_ENV === 'development';
  console.error(err.stack);
  res.status(500).json({
    error: 'An unexpected error occurred.',
    ...(isDev && { detail: err.message }),
  });
}
