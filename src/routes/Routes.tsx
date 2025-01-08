import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { UserLeaderBoard } from "@/components/UserLeaderBoard";
import { Login } from "@/pages/Login";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loader" element={<Loader />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/user-leaderboard" element={<UserLeaderBoard position={3} leaderBoard="CLASS" />} />
    </Routes>
  );
};
