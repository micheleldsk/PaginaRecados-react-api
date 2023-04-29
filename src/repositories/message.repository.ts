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

    updateMessage(id: string, title?: string, description?: string) {
        const message = this.messages.find((msg) => msg.id === id);

            if(title) {
                message!.title = title
            }

            if(description) {
                message!.description = description
            }
        

        return message
    }

    toggleActiveStatus(id: string) {
        const message = this.messages.find((msg) => msg.id === id);

        message!.active = !message!.active

        return message
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