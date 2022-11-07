import React from "react";
import { BrowserRouter } from "react-router-dom";

//
import Context from "./context/Context";

//
import Router from "./router/Router";

export default function App() {
  return (
    <Context>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Context>
  );
}
