import {Request, Response} from 'express'
import { CreateMessageService, DeleteMessageService } from '../services/messages';
import { IDefaultResponse } from '../shared/interfaces';
import { GetUserMessagesService } from '../services/messages/get-user-messages.service';

export class MessagesController {
    addMessage(req: Request, res: Response) {
        const { title, description, userId } = req.body;

        const createMessageService = new CreateMessageService();

        const newMessage = createMessageService.execute(title, description, userId);

        return res.status(201).json({
          success: true,
          message: 'Mensagem cadastrada com sucesso!',
          data: newMessage
        } as IDefaultResponse)
      }

      deleteMessage(req: Request, res: Response) {
        const { messageId } = req.params;
  
        const deleteMessageService = new DeleteMessageService();
        
        deleteMessageService.execute(messageId);

        return res.status(200).json({
          success: true,
          message: 'Mensagem deletada com sucesso!',
        } as IDefaultResponse)
    }

      getUserMessages(req: Request, res: Response) {
          const { userId } = req.params;

          const getUserMessagesService = new GetUserMessagesService();

          const userMessages = getUserMessagesService.execute(userId)

          return res.status(200).json({
            success: true,
            data: userMessages
          } as IDefaultResponse)
      }
}
    

    