import { v4 } from "uuid";

export class Message {
    id: string;
    active: boolean = true;

    constructor(public title: string, public description: string, public userId: string) {
        this.id = v4();
        this.title = title;
        this.description = description;
        this.userId = userId;
      }
}