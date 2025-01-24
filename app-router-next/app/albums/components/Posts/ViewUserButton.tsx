'use client';
// With this typed, this component will considered as  "Client Components"
// Wihtout "use client" this component will considered as "Server Components"
// Thus, unable to use such useState or event handling
// or any components not using browser API, useState, event handling can be view as  "Server Components"

const ViewUserButton = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  return (
    <>
      <button onClick={handleClick}>Lihat User</button>
    </>
  );
};

export default ViewUserButton;