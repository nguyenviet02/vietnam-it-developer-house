import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-gray-400">
      <Header />
      <main className="flex size-full flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
