import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import config from '../config';

export const verifyToken: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const token: any = req.headers['x-access-token'];

    if (!token) return res.status(403).json({ message: 'No token provided' });

    const decoded = jwt.verify(token, config.SECRET);

    console.log(decoded);

    next();
  }
);
