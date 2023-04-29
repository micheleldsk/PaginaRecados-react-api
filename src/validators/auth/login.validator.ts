import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../../shared/interfaces";
import { CreateUserService } from "../../services/users";

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "O e-mail é obrigatório!",
    } as IDefaultResponse)
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      message: "A senha é obrigatória!",
    } as IDefaultResponse)
  }
  
  next()
}