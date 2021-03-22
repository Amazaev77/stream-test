import { makeAutoObservable } from "mobx";
import { IUser } from "../interfaces";
import { fetchData } from "./api";

class UsersStore {
  users: IUser[] = [];
  loading: boolean = true;
  userSelected: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadUsers = (): void => {
   fetchData('users')
     .then(users => {
       this.users = users
       this.loading = false;
     })
  }
  loadUser = (id: number): void => {
    this.loading = true;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(user => {
        this.userSelected = user
        this.loading = false;
      });
  }
}

export default new UsersStore();