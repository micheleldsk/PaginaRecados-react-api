import { Router } from "express";
import { MessagesController } from "../controllers";
import { userIdValidator,messageIdValidator } from "../shared/validators";
import { createMessageValidator, updateMessageValidator } from "../validators/messages";

export const messageRouter = Router()

messageRouter.post('/message', userIdValidator,createMessageValidator, new MessagesController().addMessage)

messageRouter.get('/messages/:userId', userIdValidator, new MessagesController().getUserMessages)

messageRouter.put('/message/:messageId', messageIdValidator, updateMessageValidator, new MessagesController().updateMessage)

messageRouter.put('/message/active/:messageId', messageIdValidator, new MessagesController().toggleActiveStatus)

messageRouter.delete('/message/:messageId', messageIdValidator, new MessagesController().deleteMessage)
