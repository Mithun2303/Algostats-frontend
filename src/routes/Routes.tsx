import { Loader } from "@/components/common/Loader";
import { Navbar } from "@/components/common/Navbar";
import { UserLeaderBoard } from "@/components/common/UserLeaderBoard";
import { Login } from "@/pages/Login";
import { Routes, Route } from "react-router-dom";
import { ReactRoutes } from "@/constants/constants";
import { Home } from "@/pages/Home";
import HomeLayout from "@/components/layouts/HomeLayout";

export const Router = () => {

  const leaderboarddata = [
    {rank:1, name:"nidh", score:45},
    {rank:2, name:"john", score:35},
    {rank:3, name:"jenny", score:15},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35},
    {rank:2, name:"john", score:35}  
  ]; 
  return (
    <Routes>
      <Route path={ReactRoutes.LOGIN} element={<Login />} />
      <Route path="/loader" element={<Loader />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route element={<HomeLayout />}>
        <Route path={ReactRoutes.HOME} element={<Home />} />
        {/* <Route path={ReactRoutes.HOME} element={<Home />} /> */}
      </Route>
      <Route path="/user-leaderboard" element={<UserLeaderBoard position={3} leaderBoard="BATCH" leaderBoardData={leaderboarddata} />} />
    </Routes>
  );
};
