import { Routes } from "react-router";
import { Route } from "react-router";
import { MainPage } from "../sections/main/pages/MainPage";
import { TeamsListPage } from "../sections/teamsList/pages/TeamsListPage";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={< MainPage />} />
      <Route path="/teamsList" element={<TeamsListPage />} />
    </Routes>
  );
};

