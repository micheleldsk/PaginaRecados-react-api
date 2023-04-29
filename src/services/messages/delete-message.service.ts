import { Message } from "../../models";
import { messageRepository } from "../../repositories";

export class DeleteMessageService {
    execute(messageId: string) {
        messageRepository.deleteMessage(messageId);

        return
    }
}