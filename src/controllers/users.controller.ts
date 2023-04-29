import {Request, Response} from 'express'
import { CreateUserService } from '../services/users';
import { IDefaultResponse } from '../shared/interfaces';

export class UserController {
    addUser(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        const newUser = createUserService.execute(name, email, password);

        return res.status(201).json({
          success: true,
          message: 'Usuário cadastrado com sucesso!',
          data: newUser
        } as IDefaultResponse)
    }
}