import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p>Dashboard Page</p>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default DashboardPage;
