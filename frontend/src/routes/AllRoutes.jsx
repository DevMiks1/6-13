import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LogIn from "../pages/LogIn";
import DashBoard from "../pages/Dashboard";
import ProtectedRoutes from "../components/utils/ProtectedRoutes";
import { useAuth } from "../components/context/Auth";
import PageNotFound from "../pages/PageNotFound";
import Face from "../pages/Face";

const AllRoutes = () => {
  const { user } = useAuth();
  const [isFaceRecognized, setIsFaceRecognized] = useState(false);
  const navigate = useNavigate();

  console.log(isFaceRecognized);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/", { replace: true });
  //   } else if (user && isFaceRecognized) {
  //     navigate("/dashboard", { replace: true });
  //   } else if (user && !isFaceRecognized) {
  //     navigate("/face", { replace: true });
  //   }
  // }, [user, isFaceRecognized, navigate]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      {/* <Route
        path="/dashboard"
        element={user && isFaceRecognized ? <DashBoard /> : <Navigate to="/face" replace />}
      /> */}
      <Route
        path="/dashboard"
        element={ <DashBoard />}
      />
      {/* <Route
        path="/face"
        element={user && isFaceRecognized ? <Navigate to="/dashboard" replace /> : <Face onFaceRecognized={() => setIsFaceRecognized(true)} />}
      /> */}
      <Route element={<ProtectedRoutes />}>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
