import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// pages
import Homepage from "../src/pages/HomePage";
import Jonathan from "../src/pages/Jonathan";
import Chris from "../src/pages/Chris";
import Cara from "../src/pages/Cara";
import Karen from "../src/pages/Karen";
import JLFamily from "../src/pages/Jon/JLFamily";
import JLSchool from "../src/pages/Jon/JLSchool";
import JLMusic from "../src/pages/Jon/JLMusic";
import JLSports from "../src/pages/Jon/JLSports";
import JLHobby from "../src/pages/Jon/JLHobby";
import JLLinks from "../src/pages/Jon/JLLinks";

// layouts
import RootLayout from "./layouts/RootLayout";
import JonLayout from "./layouts/JonLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="jonathan" element={<JonLayout />}>
        {/* <Route path="jonindex" element={<Jonathan />} /> */}
        <Route index element={<Navigate replace to="jonintro" />} />
        <Route path="jonintro" element={<Jonathan />} />
        <Route path="jonfamily" element={<JLFamily />} />
        <Route path="jonschool" element={<JLSchool />} />
        <Route path="jonmusic" element={<JLMusic />} />
        <Route path="jonsports" element={<JLSports />} />
        <Route path="jonhobby" element={<JLHobby />} />
        <Route path="jonlinks" element={<JLLinks />} />
      </Route>
      <Route path="chris" element={<Chris />} />
      <Route path="cara" element={<Cara />} />
      <Route path="karen" element={<Karen />} />
      <Route path="*" element=<h1>PAGE NOT FOUND</h1> />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
