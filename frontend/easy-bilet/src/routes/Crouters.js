import React from "react";
import { Route, Routes } from "react-router-dom";
import BiletAl from "../components/BiletAl";
import Login from "../components/Login";
import Seyahatlarim from "../components/Seyahatlarim";

function Croutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/seyahatlarim" element={<Seyahatlarim />}></Route>
      <Route path="/bilet-al" element={<BiletAl/>}></Route>
    </Routes>
  );
}

export default Croutes;
