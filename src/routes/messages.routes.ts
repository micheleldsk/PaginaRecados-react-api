import { Router } from "express";
import { MessagesController } from "../controllers";
import { userIdValidator,messageIdValidator } from "../shared/validators";
import { createMessageValidator } from "../validators/messages";

export const messageRouter = Router()

messageRouter.post('/message', userIdValidator,createMessageValidator, new MessagesController().addMessage)

// Adicionar um userIdValidator para req.params
messageRouter.get('/messages/:userId', new MessagesController().getUserMessages)

messageRouter.delete('/message/:messageId', messageIdValidator, new MessagesController().deleteMessage)