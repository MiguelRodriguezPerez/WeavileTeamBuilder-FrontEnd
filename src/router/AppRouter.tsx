import { Routes } from "react-router";
import { Route } from "react-router";
import { MainPage } from "../sections/main/pages/MainPage";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={< MainPage />} />
    </Routes>
  );
};

