import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import MainPage from "./pages/main/main.component";

function App() {
  return (
    <>
      {toast.success("Click THEAD to sort table")}
      <ToastContainer />
      <MainPage />
    </>
  );
}

export default App;
