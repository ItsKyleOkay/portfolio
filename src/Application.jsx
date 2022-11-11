import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProfilePage from "./ProfilePage";

function Application() {
  <Routes>
    <Route path="/" element={<Navigate to="/profile" />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>;
}

export default Application;
