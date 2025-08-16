import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// pages
import Jonathan from "../src/pages/Jonathan";
import Chris from "../src/pages/Chris";
import Cara from "../src/pages/Cara";
import Karen from "../src/pages/Karen";
import JonFamily from "../src/pages/Jon/JonFamily";
import JonSchool from "../src/pages/Jon/JonSchool";
import JonMusic from "../src/pages/Jon/JonMusic";
import JonSports from "../src/pages/Jon/JonSports";
import JonHobby from "../src/pages/Jon/JonHobby";
import JonPhotos from "../src/pages/Jon/JonPhotos";
import JonLinks from "../src/pages/Jon/JonLinks";
import ChrisFamily from "../src/pages/Chris/ChrisFamily";
import ChrisSchool from "../src/pages/Chris/ChrisSchool";
import ChrisMusic from "../src/pages/Chris/ChrisMusic";
import ChrisSports from "../src/pages/Chris/ChrisSports";
import ChrisHobby from "../src/pages/Chris/ChrisHobby";
import ChrisPhotos from "../src/pages/Chris/ChrisPhotos";
import ChrisLinks from "../src/pages/Chris/ChrisLinks";
import CaraFamily from "../src/pages/Cara/CaraFamily";
import CaraSchool from "../src/pages/Cara/CaraSchool";
import CaraMusic from "../src/pages/Cara/CaraMusic";
import CaraSports from "../src/pages/Cara/CaraSports";
import CaraHobby from "../src/pages/Cara/CaraHobby";
import CaraPhotos from "../src/pages/Cara/CaraPhotos";
import CaraLinks from "../src/pages/Cara/CaraLinks";
import KarenFamily from "../src/pages/Karen/KarenFamily";
import KarenSchool from "../src/pages/Karen/KarenSchool";
import KarenMusic from "../src/pages/Karen/KarenMusic";
import KarenSports from "../src/pages/Karen/KarenSports";
import KarenHobby from "../src/pages/Karen/KarenHobby";
import KarenPhotos from "../src/pages/Karen/KarenPhotos";
import KarenLinks from "../src/pages/Karen/KarenLinks";

// layouts
import RootLayout from "./layouts/RootLayout";
import JonLayout from "./layouts/JonLayout";
import ChrisLayout from "./layouts/ChrisLayout";
import CaraLayout from "./layouts/CaraLayout";
import KarenLayout from "./layouts/KarenLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate replace to="jonathan/jonintro" />} />
      <Route path="jonathan" element={<JonLayout />}>
        <Route index element={<Navigate replace to="jonintro" />} />
        <Route path="jonintro" element={<Jonathan />} />
        <Route path="jonfamily" element={<JonFamily />} />
        <Route path="jonschool" element={<JonSchool />} />
        <Route path="jonmusic" element={<JonMusic />} />
        <Route path="jonsports" element={<JonSports />} />
        <Route path="jonhobby" element={<JonHobby />} />
        <Route path="jonphotos" element={<JonPhotos />} />
        <Route path="jonlinks" element={<JonLinks />} />
      </Route>
      <Route path="chris" element={<ChrisLayout />}>
        <Route index element={<Navigate replace to="chrisintro" />} />
        <Route path="chrisintro" element={<Chris />} />
        <Route path="chrisfamily" element={<ChrisFamily />} />
        <Route path="chrisschool" element={<ChrisSchool />} />
        <Route path="chrismusic" element={<ChrisMusic />} />
        <Route path="chrissports" element={<ChrisSports />} />
        <Route path="chrishobby" element={<ChrisHobby />} />
        <Route path="chrisphotos" element={<ChrisPhotos />} />
        <Route path="chrislinks" element={<ChrisLinks />} />
      </Route>
      <Route path="cara" element={<CaraLayout />}>
        <Route index element={<Navigate replace to="caraintro" />} />
        <Route path="caraintro" element={<Cara />} />
        <Route path="carafamily" element={<CaraFamily />} />
        <Route path="caraschool" element={<CaraSchool />} />
        <Route path="caramusic" element={<CaraMusic />} />
        <Route path="carasports" element={<CaraSports />} />
        <Route path="carahobby" element={<CaraHobby />} />
        <Route path="caraphotos" element={<CaraPhotos />} />
        <Route path="caralinks" element={<CaraLinks />} />
      </Route>
      <Route path="karen" element={<KarenLayout />}>
        <Route index element={<Navigate replace to="karenintro" />} />
        <Route path="karenintro" element={<Karen />} />
        <Route path="karenfamily" element={<KarenFamily />} />
        <Route path="karenschool" element={<KarenSchool />} />
        <Route path="karenmusic" element={<KarenMusic />} />
        <Route path="karensports" element={<KarenSports />} />
        <Route path="karenhobby" element={<KarenHobby />} />
        <Route path="karenphotos" element={<KarenPhotos />} />
        <Route path="karenlinks" element={<KarenLinks />} />
      </Route>
      <Route path="*" element=<h1>PAGE NOT FOUND</h1> />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
