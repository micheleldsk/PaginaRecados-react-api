import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../../shared/interfaces";

export const searchTitleMessageValidator = (req: Request, res: Response, next: NextFunction) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Um filtro é obrigatório!",
    } as IDefaultResponse)
  }
  
  next()
}