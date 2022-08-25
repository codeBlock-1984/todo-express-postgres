import { Router } from 'express';
import { todoController } from '../controllers';

const todoRouter = Router();

todoRouter.get('/', todoController.getAll);

todoRouter.get('/:id', todoController.getOne);

todoRouter.post('/', todoController.create);


export default todoRouter;
