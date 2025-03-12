import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./index.css";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";

export default function Recipe() {
  return (
    <div className="flex text-black bg-white">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}
