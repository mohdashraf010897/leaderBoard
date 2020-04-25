import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import MainPage from "./pages/main/main.component";

function App() {
  return (
    <>
      <MainPage />
      {toast.success("Click THEAD to sort table")}
      <ToastContainer />
    </>
  );
}

export default App;
