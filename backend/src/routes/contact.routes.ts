import { Router, type IRouter } from 'express';
import { submitContact } from '../controllers/contact.controller.js';

export const contactRouter: IRouter = Router();

contactRouter.post('/', submitContact);
