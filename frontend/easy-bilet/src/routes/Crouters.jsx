import React from "react";
import { Route, Routes } from "react-router-dom";
import BiletAl from "../components/BiletAl";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Member from "../components/Member";
import SeferSec from "../components/SeferSec";
import Seyahatlarim from "../components/Seyahatlarim";

function Croutes() {
  return (
    <Routes>
      <Route path="/biletal">
        <Route index element={<BiletAl />}/>
        <Route path="sefersec" element={<SeferSec />}/>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/seyahatlarim" element={<Seyahatlarim />}></Route>
      <Route path="/Member" element={<Member />}></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Croutes;
