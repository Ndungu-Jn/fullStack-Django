import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/home";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="/delete/:id" element={<Delete />}></Route>
          </Routes>
        }
      />
    </>
  );
}

export default App;
