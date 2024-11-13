import { TopBar, SideBar } from "./components";

export const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <SideBar />
      {children}
    </>
  );
};
