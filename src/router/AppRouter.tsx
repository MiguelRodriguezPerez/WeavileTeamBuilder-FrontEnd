import { Routes } from "react-router";
import { Route } from "react-router";
import { MainPage,  TeamInfoPage } from "../sections/main/pages";
import { TeamsListPage } from "../sections/teamsList/pages/TeamsListPage";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <MainPage />} />
      <Route path="/teamsList" element={ <TeamsListPage />} />
      <Route path="/currentTeamInfo" element= {<TeamInfoPage/>} />
    </Routes>
  );
};

