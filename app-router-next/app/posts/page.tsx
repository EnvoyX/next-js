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
  const response = await fetch(base_url, {
    cache: 'no-store', // If there is a request, the change is done immideately at runtime (Server-side render)
    // defaults at no-chace, which is run request only once after first load page (Static)
    next: { revalidate: 3600 }, // Every time that is defined, if there changes of data, it will update or display the changes immideately
  });
  const posts: TypePosts[] = await response.json();
  return (
    <>
      {/* <div className={styles.bgRed}>POSTINGAN PAGE</div> */}
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
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
