import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../../shared/interfaces";
import { CreateUserService } from "../../services/users";

export const createUserValidator = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "O nome é obrigatório!",
    } as IDefaultResponse)
  }

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

  const createUserService = new CreateUserService()

  const emailIsRegistered = createUserService.checkValidEmail(email)

  if (emailIsRegistered) {
    return res.status(400).json({
      success: false,
      message: "Este e-mail já está sendo utilizado!",
    } as IDefaultResponse)
  }
  
  next()
}