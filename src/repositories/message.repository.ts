import { Message } from "../models";

class MessageRepository {
    messages: Array<Message> = [];

    addMessage(message: Message) {
        this.messages.push(message);

        return 
    }

    getUserMessages(userId: string) {
        const userMessages = this.messages.filter((msg) => msg.userId === userId);

        return userMessages
    }

    deleteMessage(id: string) {
        const messageIndex = this.messages.findIndex((msg) => msg.id === id);

        this.messages.splice(messageIndex, 1)

        return
    }

    checkMessageId(messageId: string) {
        return this.messages.some((message) => message.id === messageId)
    }
}

export const messageRepository = new MessageRepository();