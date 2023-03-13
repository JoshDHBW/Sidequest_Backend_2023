import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import TokenService from './tokenService';

@Injectable()
export class TokenIntercepor implements NestMiddleware {
constructor(private readonly tokenService: TokenService) {}
  async use(req: Request, res: Response, next: NextFunction) {
      try {
          if (req.headers.authorization) {
              let token: string = <string> req.headers.authorization;
              if (token.includes("Bearer")) {
                  token = token.split(" ")[1];
              }
              let result = await this.tokenService.validateToken(token);
              if (result.active) {
                  res.locals.userinfo = result;
                  next();
              } else {
                  res.sendStatus(HttpStatus.UNAUTHORIZED);
              }
          } else {
              res.sendStatus(HttpStatus.UNAUTHORIZED);
          }
        } catch (e) {
            res.sendStatus(HttpStatus.UNAUTHORIZED);
        }
    }
}
