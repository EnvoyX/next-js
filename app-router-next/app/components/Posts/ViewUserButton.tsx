'use client';
// With this typed, this component will considered as  "Client Components"
// Allowed us to use useState or react hooks, browser API such as event handling

// Wihtout "use client" this component will considered as "Server Components"
// Thus, unable to use such useState or event handling
// or any components not using useState or react hooks, browser API such as event handling (onClick, etc) can be viewed as  "Server Components"

interface ViewUserButtonPropsType {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonPropsType> = ({ userId }) => {
  const handleClick = () => {
    alert(`userId : ${userId}`);
  };
  return (
    <>
      <button onClick={handleClick}>Lihat User</button>
    </>
  );
};

export default ViewUserButton;
