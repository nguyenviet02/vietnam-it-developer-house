import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center">
      <Header />
      <main className="flex size-full flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
