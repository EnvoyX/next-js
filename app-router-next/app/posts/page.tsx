// 'use client';
// With this typed, this component will considered as  "Client Components"
// Wihtout "use client" this component will considered as "Server Components"
// Thus, unable to use such useState or event handling
// or any components not using browser API, useState, event handling can be view as  "Server Components"

// Styles specific for this page (postPage.module.css)
import styles from './postPage.module.css';
import CardList from '../components/Posts/CardList';
import ViewUserButton from '../components/Posts/ViewUserButton';

const base_url = 'https://jsonplaceholder.typicode.com/posts';
interface TypePosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url);
  const posts: TypePosts[] = await response.json();
  return (
    <>
      {/* <div className={styles.bgRed}>POSTINGAN PAGE</div> */}
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id + post.userId}>
            <p>{post.id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId}></ViewUserButton>
          </CardList>
        );
      })}
      {/* Combined Server & Client components by offload the Client Components to components folder*/}
      {/* This ViewUserButton components is Client components within Server components */}
    </>
  );
};

export default Posts;
