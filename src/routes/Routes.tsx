import { Leaderboard } from "@/pages/Leaderboard";
import { Login } from "@/pages/Login";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/leaderboard" element={<Leaderboard/>}/>
    </Routes>
  );
};
