import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../../shared/interfaces";
import { userRepository } from "../../repositories";

export const userIdValidator = (req: Request, res: Response, next: NextFunction) => {
  let userId: string;

  if (req.body.userId) {
    userId = req.body.userId
  } else {
    userId = req.params.userId
  }

  const userIdIsRegistered = userRepository.checkUserId(userId)

  if (!userIdIsRegistered) {
    return res.status(404).json({
      success: false,
      message: "Este usuário não existe!",
    } as IDefaultResponse)
  }
  
  next()
}