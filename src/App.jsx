import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // ⬅️ Chỉ cần useLocation
import AppRouter from "./AppRouter";
import AppBarComponent from "./Components/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Components/AppBar/Account";
import { ConfirmProvider } from "material-ui-confirm";
import ChatAI from "./Components/ChatAI/ChatAI";
import AdminRouter from "./AdminRouter";

const AppContent = () => {
  const location = useLocation();

  const hideAppBarPaths = [
    "/account/checkout",
    "/account/information",
    "/account/flight",
    "/account/checkoutFlight",
    "/account/InformationSuccess",
  ];

  const isAdminPath = location.pathname.startsWith("/admin");

  return (
    <>
      <ChatAI />

      {/* Hiện AppBar trừ khi là trang admin hoặc nằm trong danh sách ẩn */}
      {!(isAdminPath || hideAppBarPaths.includes(location.pathname)) && <AppBarComponent />}

      {!isAdminPath ? (
        <div style={{ paddingTop: hideAppBarPaths.includes(location.pathname) ? "0" : "64px" }}>
          <Routes>
            <Route path="/*" element={<AppRouter />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ConfirmProvider>
        <AppContent />
      </ConfirmProvider>
    </AuthProvider>
  );
};

export default App;
