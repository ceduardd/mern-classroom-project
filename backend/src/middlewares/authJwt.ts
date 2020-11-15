import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';

export const verifyToken: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const token: any = req.headers['x-access-token'];

    if (!token) return res.status(403).json({ message: 'No token provided' });

    const decoded = jwt.verify(token, 'MERN_APP_SECRET');

    console.log(decoded);

    next();
  }
);
