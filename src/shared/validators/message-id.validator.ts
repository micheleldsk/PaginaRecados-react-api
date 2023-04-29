import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../../shared/interfaces";
import { messageRepository } from "../../repositories";

export const messageIdValidator = (req: Request, res: Response, next: NextFunction) => {
  const { messageId } = req.params

  const messageIdIsRegistered = messageRepository.checkMessageId(messageId)

  if (!messageIdIsRegistered) {
    return res.status(404).json({
      success: false,
      message: "Esta mensagem não existe!",
    } as IDefaultResponse)
  }
  
  next()
}