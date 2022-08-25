import { Request, Response } from 'express-serve-static-core';
import { Prisma as P } from '@prisma/client';
import { client as prisma } from '../prisma';

export const getAll = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany();
  res.status(200).json(todos);
};

export const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = await prisma.todo.findUnique({
    where: { id: +id }
  });

  if (!todo) {
    res.status(400).json({ error: 'todo not found' });
  } else  {
    res.status(200).json(todo);
  }
};

export const create = async (req: Request, res: Response) => {
  const { title } = req.body;
  const newTodo = await prisma.todo.create({
    data: { title }
  });
  res.status(201).json(newTodo);
};
