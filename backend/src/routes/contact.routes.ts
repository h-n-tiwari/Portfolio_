import { Router, type IRouter } from 'express';
import { submitContact } from '../controllers/contact.controller';

export const contactRouter: IRouter = Router();

contactRouter.post('/', submitContact);
