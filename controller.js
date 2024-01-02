import { successResponse } from './helpers.js';

export const getController = (req, res, payload) => {
  const responseData = { message: `Hello ${req.socket.remoteAddress}`, payload };
  successResponse(res, responseData);
};

export const postController = (req, res, payload) => {
  const responseData = { user: payload };
  successResponse(res, responseData);
};

export const optionsController = (req, res) => {
  res.setHeader('Allow', 'OPTIONS, GET, POST');
  res.setHeader('Content-Type', 'text/plain');
  res.end('OK');
};
