import { messageRepository } from "../../repositories";

export class ToggleActiveStatusService {
    execute(messageId: string) {
        const updatedMessage = messageRepository.toggleActiveStatus(messageId);

        return updatedMessage;
    }
}