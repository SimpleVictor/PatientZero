import { Router, Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../config";

const protectedRouter: Router = Router();

protectedRouter.use((request: Request & { headers: { authorization: string } }, response: Response, next: NextFunction) => {

});

protectedRouter.get("/", (request: Request, response: Response) => {

});

export { protectedRouter }





