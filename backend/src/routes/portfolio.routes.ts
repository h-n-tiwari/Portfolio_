import { Router, type IRouter } from 'express';
import { getPortfolio, getProjects, getSkills } from '../controllers/portfolio.controller.js';

export const portfolioRouter: IRouter = Router();

portfolioRouter.get('/', getPortfolio);
portfolioRouter.get('/projects', getProjects);
portfolioRouter.get('/skills', getSkills);
