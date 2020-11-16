import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import config from '../config';

interface IPayload {
  _id: string;
  iat: number;
  exp: number;
}

export const verifyToken: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const token = req.header('x-access-token');

    if (!token) return res.status(403).json({ message: 'No token provided' });

    const payload = jwt.verify(token, config.SECRET) as IPayload;

    // console.log(payload);

    req.userId = payload._id;

    next();
  }
);
