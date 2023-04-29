import { User } from "../../models";
import { userRepository } from "../../repositories";

export class CreateUserService {
    execute(name: string, email: string, password: string) {
        const newUser = new User(name, email, password);

        userRepository.addUser(newUser);

        return newUser;
    }

    checkValidEmail(email: string) {
      return userRepository.checkValidEmail(email)
    }
}