import {Request, Response} from 'express'
import { CreateMessageService, DeleteMessageService, ToggleActiveStatusService } from '../services/messages';
import { IDefaultResponse } from '../shared/interfaces';
import { GetUserMessagesService } from '../services/messages/get-user-messages.service';
import { UpdateMessagesService } from '../services/messages/update-message.service';

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

      
      getUserMessages(req: Request, res: Response) {
        const { userId } = req.params;
        
        const getUserMessagesService = new GetUserMessagesService();
        
        const userMessages = getUserMessagesService.execute(userId)
        
        return res.status(200).json({
          success: true,
          data: userMessages
        } as IDefaultResponse)
      }

      updateMessage(req: Request, res: Response) {
        const { messageId } = req.params;
        const { title, description } = req.body

        const updateMessagesService = new UpdateMessagesService();

        const updatedMessage = updateMessagesService.execute(messageId, title, description);

        return res.status(200).json({
          success: true,
          message: 'Mensagem atualizada com sucesso!',
          data: updatedMessage
        } as IDefaultResponse)
      }

      toggleActiveStatus(req: Request, res: Response) {
          const { messageId } = req.params;

          const toggleActiveStatusService = new ToggleActiveStatusService();

          const updatedMessage = toggleActiveStatusService.execute(messageId);

          return res.status(200).json({
            success: true,
            message: 'Status atualizado!',
            data: updatedMessage
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
    }
    

    