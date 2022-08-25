import { Router } from 'express';
import todoRouter from './todo.route';

const baseRouter = Router();

baseRouter.use('/todos', todoRouter);

export default baseRouter;
