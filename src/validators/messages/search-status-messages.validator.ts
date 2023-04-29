import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../../shared/interfaces";

export const searchStatusMessageValidator = (req: Request, res: Response, next: NextFunction) => {
  const { active } = req.query;

  if (!active) {
    return res.status(400).json({
      success: false,
      message: "Um filtro é obrigatório!",
    } as IDefaultResponse)
  }

  if (active !== 'true' && active !== 'false') {
    return res.status(400).json({
      success: false,
      message: "O filtro precisa ser um valor booleano!",
    } as IDefaultResponse)
  }
  
  next()
}