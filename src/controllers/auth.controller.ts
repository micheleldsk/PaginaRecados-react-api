import { Request, Response} from 'express'
import { LoginService } from '../services/auth/login.service';
import { IDefaultResponse } from '../shared/interfaces';

export class AuthController {
  login(req: Request, res:Response) {
    const { email, password } = req.body;

    const loginService = new LoginService()

    const user = loginService.execute(email, password)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "E-mail ou senha incorretos!"
      } as IDefaultResponse)
    }

    return res.status(200).json({
      success: true,
      message: "Login realizado com sucesso!",
      data: user
    } as IDefaultResponse)
  }
}