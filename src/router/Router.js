import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MyContext } from "../context/Context";

//
import Todo from "../sections/main/Todo";

//
import Login from "../sections/auth/Login";
import Register from "../sections/auth/Register";
import LoadingPage from "../components/LoadingPage";

export default function Router() {
  const {
    state: {
      auth: {
        auth: { isAuth, loading },
      },
    },
  } = useContext(MyContext);

  if (loading) {
    return <LoadingPage />;
  }

  if (isAuth) {
    return (
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<Navigate to="/todo" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
