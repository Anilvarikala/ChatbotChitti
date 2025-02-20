import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Chat from "./Pages/Chat/Chat";
import ProfileUpdate from "./Pages/ProfileUpdate/ProfileUpdate";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Chat" element={<Chat />}></Route>
        <Route path="/Profile" element={<ProfileUpdate/>}></Route>
      </Routes>
    </>
  );
};

export default App;
