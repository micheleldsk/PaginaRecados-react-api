import { Message } from "../../models";
import { messageRepository } from "../../repositories";

export class CreateMessageService {
    execute(title: string, description: string, userId: string) {
        const newMessage = new Message(title, description, userId);

        messageRepository.addMessage(newMessage);

        return newMessage;
    }
}