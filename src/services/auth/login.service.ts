import { userRepository } from "../../repositories"

export class LoginService {
  execute(email: string, password: string) {
    const user = userRepository.login(email, password);

    return user
  }
}