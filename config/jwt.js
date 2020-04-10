import expressJwt from 'express-jwt';
import config from './config';

const jwt = () => {
  return expressJwt({ secret: config.jwtSecret }).unless({
    path: [
      // public routes that don't require authentication
      '/api/auth/login',
      '/api/auth/signup',
      {url: '/api/users', methods: ['POST']},
      '/api/test',
      '/api/users/verify',
    ]
  });
};

export default jwt;
