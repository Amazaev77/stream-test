import { makeAutoObservable } from "mobx";
import { IPost } from "../interfaces";
import { fetchData } from "./api";
import UsersStore from "./UsersStore";

class PostsStore {
  posts: IPost[] = [];
  loading: boolean = true;
  postSelected: IPost | null = null;

  constructor() {
    makeAutoObservable(this)
  }

  loadPosts = (): void => {
    fetchData('posts')
      .then(posts => {
        this.posts = posts;
        this.loading = false;
      });
  }

  loadPost = (id: number): void => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(post => {
        UsersStore.loadUser(post.userId);
        this.postSelected = post
      });
  }
}

export default new PostsStore();
