import { Router } from "express";
import { UserController } from "../controllers";
import { createUserValidator } from "../validators/users";

export const userRouter = Router()

userRouter.post('/user', createUserValidator,new UserController().addUser)