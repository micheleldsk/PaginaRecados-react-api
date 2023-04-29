import { messageRepository } from "../../repositories";

export class SearchTitleMessagesService {
    execute(userId:string, title: string) {
        const filteredMessages = messageRepository.searchByTitle(userId, title);

        return filteredMessages;
    }
}