import { User } from "../models";

class UserRepository {
    users: Array<User> = [];

    addUser(user: User) {
        this.users.push(user);

        return 
    }

    checkValidEmail(email: string) {
        return this.users.some((user) => user.email === email)
    }

    login(email: string, password: string) {
        return this.users.find((user) => user.email === email && user.password === password);
    }

    checkUserId(userId: string) {
        return this.users.some((user) => user.id === userId)
    }
}

export const userRepository = new UserRepository();