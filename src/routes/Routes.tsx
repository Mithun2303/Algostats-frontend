import { Loader } from "@/components/Loader";
import { Login } from "@/pages/Login";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sample" element={<Loader />} />
    </Routes>
  );
};
