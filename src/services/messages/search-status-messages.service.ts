import { messageRepository } from "../../repositories";

export class SearchStatusMessagesService {
    execute(userId:string, active: boolean) {
        const filteredMessages = messageRepository.searchByStatus(userId, active);

        return filteredMessages;
    }
}