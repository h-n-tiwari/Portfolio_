import type { Request, Response, NextFunction } from 'express';
import { saveContactMessage } from '../services/contact.service.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactInput(body: Record<string, unknown>): string | null {
  const { name, email, subject, message } = body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return 'Name must be at least 2 characters.';
  }
  if (name.trim().length > 100) {
    return 'Name must be 100 characters or fewer.';
  }
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    return 'A valid email address is required.';
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
    return 'Subject must be at least 3 characters.';
  }
  if (subject.trim().length > 200) {
    return 'Subject must be 200 characters or fewer.';
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return 'Message must be at least 10 characters.';
  }
  if (message.trim().length > 5000) {
    return 'Message must be 5000 characters or fewer.';
  }
  return null;
}

export async function submitContact(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const validationError = validateContactInput(req.body as Record<string, unknown>);
    if (validationError) {
      res.status(400).json({ error: validationError });
      return;
    }

    const { name, email, subject, message } = req.body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    await saveContactMessage({ name, email, subject, message });

    res.status(201).json({ message: 'Message received. Thank you for reaching out!' });
  } catch (err) {
    next(err);
  }
}
