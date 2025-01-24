// 'use client';
// With this typed, this component will considered as  "Client Components"
// Wihtout "use client" this component will considered as "Server Components"
// Thus, unable to use such useState or event handling
// or any components not using browser API, useState, event handling can be view as  "Server Components"

// Styles specific for this page (postPage.module.css)
import styles from './postPage.module.css';
import CardList from '../components/Posts/CardList';
import ViewUserButton from '../components/Posts/ViewUserButton';

const Posts = () => {
  return (
    <>
      {/* <div className={styles.bgRed}>POSTINGAN PAGE</div> */}
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {/* Combined Server & Client components by offload the Client Components to components folder*/}
      {/* This ViewUserButton components is Client components within Server components */}
      <CardList>
        <p>Hello!</p>
        <i>H1!</i>
        <ViewUserButton></ViewUserButton>
      </CardList>
    </>
  );
};

export default Posts;
