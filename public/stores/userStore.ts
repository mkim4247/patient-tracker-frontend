import { action } from "mobx"

export default class UserStore {
    @observable
    user: User = DEFAULT_USER

    @action
  updateUser(newUser: Partial<User>) {
    set(this.user, newUser)
  }

  @action
  resetUser() {
    this.updateUser(DEFAULT_USER)
  }
  }
}