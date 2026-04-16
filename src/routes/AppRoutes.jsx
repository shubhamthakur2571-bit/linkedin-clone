import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import Network from "../pages/Network";
import Jobs from "../pages/Jobs";
import Messaging from "../pages/Messaging";
import Notifications from "../pages/Notifications";
import Search from "../pages/Search";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}
