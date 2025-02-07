import App from "@/App";
import SuccessStrategies from "@/pages/SuccessStrategies";
import Web3Odyssey from "@/pages/Web3Odyssey";
import MainLayout from "@layouts/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<App />} />
          <Route path="success-strategies" element={<SuccessStrategies />} />
          <Route path="web3-odyssey" element={<Web3Odyssey />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
