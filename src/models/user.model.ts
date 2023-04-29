import { v4 } from "uuid";

export class User {
    id: string;

    constructor(public name: string, public email: string, public password: string) {
        this.id = v4();
        this.name = name;
        this.email = email;
        this.password = password;
      }
}