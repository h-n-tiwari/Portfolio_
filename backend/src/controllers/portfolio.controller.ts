import type { Request, Response } from 'express';
import { portfolioInfo, projects, skills } from '../data/portfolio.data.js';

export function getPortfolio(_req: Request, res: Response): void {
  res.json({ data: portfolioInfo });
}

export function getProjects(_req: Request, res: Response): void {
  res.json({ data: projects });
}

export function getSkills(_req: Request, res: Response): void {
  res.json({ data: skills });
}
