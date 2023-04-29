import { Message } from "../../models";
import { messageRepository } from "../../repositories";

export class GetUserMessagesService {
    execute(userId: string) {
        const userMessages = messageRepository.getUserMessages(userId);

        return userMessages;
    }
}