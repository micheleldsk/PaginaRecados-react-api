import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { loginValidator } from "../validators/auth";

export const authRouter = Router()

authRouter.post('/login', loginValidator, new AuthController().login)