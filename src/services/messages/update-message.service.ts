import { messageRepository } from "../../repositories";

export class UpdateMessagesService {
    execute(messageId: string, title?: string, description?: string) {
        const updatedMessage = messageRepository.updateMessage(messageId, title, description);

        return updatedMessage;
    }
}