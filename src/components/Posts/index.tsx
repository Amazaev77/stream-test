import React, { useEffect } from 'react';
import Post from "./Post";
import SkeletonComponent from "./SkeletonComponent";
import PostsStore from '../../store/PostsStore';
import UsersStore from "../../store/UsersStore";
import { observer } from "mobx-react-lite";
import { Helmet } from "react-helmet";

const Posts : React.FC = observer(() => {

  useEffect(() => {
    PostsStore.loadPosts();
    UsersStore.loadUsers();
  }, []);

  const skeleton = new Array(5)
    .fill('')
    .map((_, index) => <SkeletonComponent key={index} />)

  if (UsersStore.loading) {
    return (
      <>
        {skeleton}
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Stream Test - Posts</title>
      </Helmet>
      {PostsStore.posts.map(post => {
        const findUser = UsersStore.users.find(
          user => user.id === post.userId
        );

        return (
          <Post
            key={post.id}
            post={post}
            user={findUser}
          />
        )
      })}
    </>
  )
});

export default Posts;
