import React, { useContext, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const ProfilePage = React.lazy(() => import("./ProfilePage"));

function Application() {
  <Routes>
    <Route path="/" element={<Navigate to="/profile" />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>;
}

export default Application;
