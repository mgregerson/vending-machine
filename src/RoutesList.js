import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Cookies from "./Cookies";
import Soda from "./Soda";
import Chips from "./Chips";
import VendingMachine from "./VendingMachine";

function RoutesList() {
  return (
    <Routes>
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/soda" element={<Soda />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/" element={<VendingMachine />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
