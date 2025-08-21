import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import JonLayout from "./layouts/JonLayout";
import ChrisLayout from "./layouts/ChrisLayout";
import CaraLayout from "./layouts/CaraLayout";
import KarenLayout from "./layouts/KarenLayout";

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

//3rd Layers
import JonFamily01 from "./pages/Jon/family/JonFamily01";
import JonFamily02 from "./pages/Jon/family/JonFamily02";
import JonFamily03 from "./pages/Jon/family/JonFamily03";
import JonFamily04 from "./pages/Jon/family/JonFamily04";
import JonFamily05 from "./pages/Jon/family/JonFamily05";
import JonFamily06 from "./pages/Jon/family/JonFamily06";
import JonFamily07 from "./pages/Jon/family/JonFamily07";
import JonFamily08 from "./pages/Jon/family/JonFamily08";
import JonSchool01 from "./pages/Jon/school/JonSchool01";
import JonSchool02 from "./pages/Jon/school/JonSchool02";
import JonSchool03 from "./pages/Jon/school/JonSchool03";
import JonSchool04 from "./pages/Jon/school/JonSchool04";
import JonSchool05 from "./pages/Jon/school/JonSchool05";
import JonSchool06 from "./pages/Jon/school/JonSchool06";
import JonSchool07 from "./pages/Jon/school/JonSchool07";
import JonSchool08 from "./pages/Jon/school/JonSchool08";
import JonSchool09 from "./pages/Jon/school/JonSchool09";
import JonSchool10 from "./pages/Jon/school/JonSchool10";
import JonSchool11 from "./pages/Jon/school/JonSchool11";
import JonSchool12 from "./pages/Jon/school/JonSchool12";
import JonSchool13 from "./pages/Jon/school/JonSchool13";
import JonMusic01 from "./pages/Jon/music/JonMusic01";
import JonMusic02 from "./pages/Jon/music/JonMusic02";
import JonMusic03 from "./pages/Jon/music/JonMusic03";
import JonMusic04 from "./pages/Jon/music/JonMusic04";
import JonMusic05 from "./pages/Jon/music/JonMusic05";
import JonMusic06 from "./pages/Jon/music/JonMusic06";
import JonMusic07 from "./pages/Jon/music/JonMusic07";
import JonSports01 from "./pages/Jon/sports/JonSports01";
import JonSports02 from "./pages/Jon/sports/JonSports02";
import JonSports03 from "./pages/Jon/sports/JonSports03";
import JonSports04 from "./pages/Jon/sports/JonSports04";
import JonSports05 from "./pages/Jon/sports/JonSports05";
import JonSports06 from "./pages/Jon/sports/JonSports06";
import JonSports07 from "./pages/Jon/sports/JonSports07";
import JonSports08 from "./pages/Jon/sports/JonSports08";
import JonSports09 from "./pages/Jon/sports/JonSports09";
import JonSports10 from "./pages/Jon/sports/JonSports10";
import JonSports11 from "./pages/Jon/sports/JonSports11";
import JonSports12 from "./pages/Jon/sports/JonSports12";
import JonSports13 from "./pages/Jon/sports/JonSports13";
import JonSports14 from "./pages/Jon/sports/JonSports14";
import JonSports15 from "./pages/Jon/sports/JonSports15";
import JonSports16 from "./pages/Jon/sports/JonSports16";
import JonHobby01 from "./pages/Jon/hobby/JonHobby01";
import JonHobby02 from "./pages/Jon/hobby/JonHobby02";
import JonHobby03 from "./pages/Jon/hobby/JonHobby03";
import JonHobby04 from "./pages/Jon/hobby/JonHobby04";
import JonHobby05 from "./pages/Jon/hobby/JonHobby05";
import JonHobby06 from "./pages/Jon/hobby/JonHobby06";
import JonHobby07 from "./pages/Jon/hobby/JonHobby07";
import JonHobby08 from "./pages/Jon/hobby/JonHobby08";
import JonLinks01 from "./pages/Jon/links/JonLinks01";
import JonLinks02 from "./pages/Jon/links/JonLinks02";
import JonLinks03 from "./pages/Jon/links/JonLinks03";
import JonLinks04 from "./pages/Jon/links/JonLinks04";
import JonPlate01 from "./pages/Jon/photos/JonPlate01";
import JonPlate02 from "./pages/Jon/photos/JonPlate02";
import JonPlate03 from "./pages/Jon/photos/JonPlate03";
import JonPlate04 from "./pages/Jon/photos/JonPlate04";
import JonPlate05 from "./pages/Jon/photos/JonPlate05";
import JonPlate06 from "./pages/Jon/photos/JonPlate06";
import JonPlate07 from "./pages/Jon/photos/JonPlate07";
import JonPlate08 from "./pages/Jon/photos/JonPlate08";
import JonPlate09 from "./pages/Jon/photos/JonPlate09";
import JonPlate10 from "./pages/Jon/photos/JonPlate10";
import JonPlate11 from "./pages/Jon/photos/JonPlate11";
import JonPlate12 from "./pages/Jon/photos/JonPlate12";
import JonPlate13 from "./pages/Jon/photos/JonPlate13";
import JonPlate14 from "./pages/Jon/photos/JonPlate14";
import JonPlate15 from "./pages/Jon/photos/JonPlate15";
import JonPlate16 from "./pages/Jon/photos/JonPlate16";
import JonPlate17 from "./pages/Jon/photos/JonPlate17";
import JonPlate18 from "./pages/Jon/photos/JonPlate18";
import JonPlate19 from "./pages/Jon/photos/JonPlate19";
import JonPlate20 from "./pages/Jon/photos/JonPlate20";
import JonPlate21 from "./pages/Jon/photos/JonPlate21";
import JonPlate22 from "./pages/Jon/photos/JonPlate22";
import JonPlate23 from "./pages/Jon/photos/JonPlate23";
import JonPlate24 from "./pages/Jon/photos/JonPlate24";
import JonPlate25 from "./pages/Jon/photos/JonPlate25";
import JonPlate26 from "./pages/Jon/photos/JonPlate26";
import JonPlate27 from "./pages/Jon/photos/JonPlate27";
import JonPlate28 from "./pages/Jon/photos/JonPlate28";
import JonPlate29 from "./pages/Jon/photos/JonPlate29";
import JonPlate30 from "./pages/Jon/photos/JonPlate30";
import JonPlate31 from "./pages/Jon/photos/JonPlate31";
import JonPlate32 from "./pages/Jon/photos/JonPlate32";
import JonPlate33 from "./pages/Jon/photos/JonPlate33";
import JonPlate34 from "./pages/Jon/photos/JonPlate34";
import JonPlate35 from "./pages/Jon/photos/JonPlate35";
import JonPlate36 from "./pages/Jon/photos/JonPlate36";
import JonPlate37 from "./pages/Jon/photos/JonPlate37";
import JonPlate38 from "./pages/Jon/photos/JonPlate38";
import JonPlate39 from "./pages/Jon/photos/JonPlate39";
import JonPlate40 from "./pages/Jon/photos/JonPlate40";
import JonPlate41 from "./pages/Jon/photos/JonPlate41";
import JonPlate42 from "./pages/Jon/photos/JonPlate42";
import JonPlate43 from "./pages/Jon/photos/JonPlate43";
import JonPlate44 from "./pages/Jon/photos/JonPlate44";
import JonPlate45 from "./pages/Jon/photos/JonPlate45";
import JonPlate46 from "./pages/Jon/photos/JonPlate46";
import JonPlate47 from "./pages/Jon/photos/JonPlate47";
import JonPlate48 from "./pages/Jon/photos/JonPlate48";
import JonPlate49 from "./pages/Jon/photos/JonPlate49";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate replace to="jonathan/joninfo" />} />
      <Route path="jonathan" element={<JonLayout />}>
        <Route index element={<Navigate replace to="joninfo" />} />
        <Route path="joninfo" element={<Jonathan />} />
        <Route path="jonfamily" element={<JonFamily />} />
        <Route path="jonfamily/plate01" element={<JonFamily01 />} />
        <Route path="jonfamily/plate02" element={<JonFamily02 />} />
        <Route path="jonfamily/plate03" element={<JonFamily03 />} />
        <Route path="jonfamily/plate04" element={<JonFamily04 />} />
        <Route path="jonfamily/plate05" element={<JonFamily05 />} />
        <Route path="jonfamily/plate06" element={<JonFamily06 />} />
        <Route path="jonfamily/plate07" element={<JonFamily07 />} />
        <Route path="jonfamily/plate08" element={<JonFamily08 />} />
        <Route path="jonschool" element={<JonSchool />} />
        <Route path="jonschool/plate01" element={<JonSchool01 />} />
        <Route path="jonschool/plate02" element={<JonSchool02 />} />
        <Route path="jonschool/plate03" element={<JonSchool03 />} />
        <Route path="jonschool/plate04" element={<JonSchool04 />} />
        <Route path="jonschool/plate05" element={<JonSchool05 />} />
        <Route path="jonschool/plate06" element={<JonSchool06 />} />
        <Route path="jonschool/plate07" element={<JonSchool07 />} />
        <Route path="jonschool/plate08" element={<JonSchool08 />} />
        <Route path="jonschool/plate09" element={<JonSchool09 />} />
        <Route path="jonschool/plate10" element={<JonSchool10 />} />
        <Route path="jonschool/plate11" element={<JonSchool11 />} />
        <Route path="jonschool/plate12" element={<JonSchool12 />} />
        <Route path="jonschool/plate13" element={<JonSchool13 />} />
        <Route path="jonmusic" element={<JonMusic />} />
        <Route path="jonmusic/plate01" element={<JonMusic01 />} />
        <Route path="jonmusic/plate02" element={<JonMusic02 />} />
        <Route path="jonmusic/plate03" element={<JonMusic03 />} />
        <Route path="jonmusic/plate04" element={<JonMusic04 />} />
        <Route path="jonmusic/plate05" element={<JonMusic05 />} />
        <Route path="jonmusic/plate06" element={<JonMusic06 />} />
        <Route path="jonmusic/plate07" element={<JonMusic07 />} />
        <Route path="jonsports" element={<JonSports />} />
        <Route path="jonsports/plate01" element={<JonSports01 />} />
        <Route path="jonsports/plate02" element={<JonSports02 />} />
        <Route path="jonsports/plate03" element={<JonSports03 />} />
        <Route path="jonsports/plate04" element={<JonSports04 />} />
        <Route path="jonsports/plate05" element={<JonSports05 />} />
        <Route path="jonsports/plate06" element={<JonSports06 />} />
        <Route path="jonsports/plate07" element={<JonSports07 />} />
        <Route path="jonsports/plate08" element={<JonSports08 />} />
        <Route path="jonsports/plate09" element={<JonSports09 />} />
        <Route path="jonsports/plate10" element={<JonSports10 />} />
        <Route path="jonsports/plate11" element={<JonSports11 />} />
        <Route path="jonsports/plate12" element={<JonSports12 />} />
        <Route path="jonsports/plate13" element={<JonSports13 />} />
        <Route path="jonsports/plate14" element={<JonSports14 />} />
        <Route path="jonsports/plate15" element={<JonSports15 />} />
        <Route path="jonsports/plate16" element={<JonSports16 />} />
        <Route path="jonhobby" element={<JonHobby />} />
        <Route path="jonhobby/plate01" element={<JonHobby01 />} />
        <Route path="jonhobby/plate02" element={<JonHobby02 />} />
        <Route path="jonhobby/plate03" element={<JonHobby03 />} />
        <Route path="jonhobby/plate04" element={<JonHobby04 />} />
        <Route path="jonhobby/plate05" element={<JonHobby05 />} />
        <Route path="jonhobby/plate06" element={<JonHobby06 />} />
        <Route path="jonhobby/plate07" element={<JonHobby07 />} />
        <Route path="jonhobby/plate08" element={<JonHobby08 />} />
        <Route path="jonphotos" element={<JonPhotos />} />
        <Route path="jonphotos/plate01" element={<JonPlate01 />} />
        <Route path="jonphotos/plate02" element={<JonPlate02 />} />
        <Route path="jonphotos/plate03" element={<JonPlate03 />} />
        <Route path="jonphotos/plate04" element={<JonPlate04 />} />
        <Route path="jonphotos/plate05" element={<JonPlate05 />} />
        <Route path="jonphotos/plate06" element={<JonPlate06 />} />
        <Route path="jonphotos/plate07" element={<JonPlate07 />} />
        <Route path="jonphotos/plate08" element={<JonPlate08 />} />
        <Route path="jonphotos/plate09" element={<JonPlate09 />} />
        <Route path="jonphotos/plate10" element={<JonPlate10 />} />
        <Route path="jonphotos/plate11" element={<JonPlate11 />} />
        <Route path="jonphotos/plate12" element={<JonPlate12 />} />
        <Route path="jonphotos/plate13" element={<JonPlate13 />} />
        <Route path="jonphotos/plate14" element={<JonPlate14 />} />
        <Route path="jonphotos/plate15" element={<JonPlate15 />} />
        <Route path="jonphotos/plate16" element={<JonPlate16 />} />
        <Route path="jonphotos/plate17" element={<JonPlate17 />} />
        <Route path="jonphotos/plate18" element={<JonPlate18 />} />
        <Route path="jonphotos/plate19" element={<JonPlate19 />} />
        <Route path="jonphotos/plate20" element={<JonPlate20 />} />
        <Route path="jonphotos/plate21" element={<JonPlate21 />} />
        <Route path="jonphotos/plate22" element={<JonPlate22 />} />
        <Route path="jonphotos/plate23" element={<JonPlate23 />} />
        <Route path="jonphotos/plate24" element={<JonPlate24 />} />
        <Route path="jonphotos/plate25" element={<JonPlate25 />} />
        <Route path="jonphotos/plate26" element={<JonPlate26 />} />
        <Route path="jonphotos/plate27" element={<JonPlate27 />} />
        <Route path="jonphotos/plate28" element={<JonPlate28 />} />
        <Route path="jonphotos/plate29" element={<JonPlate29 />} />
        <Route path="jonphotos/plate30" element={<JonPlate30 />} />
        <Route path="jonphotos/plate31" element={<JonPlate31 />} />
        <Route path="jonphotos/plate32" element={<JonPlate32 />} />
        <Route path="jonphotos/plate33" element={<JonPlate33 />} />
        <Route path="jonphotos/plate34" element={<JonPlate34 />} />
        <Route path="jonphotos/plate35" element={<JonPlate35 />} />
        <Route path="jonphotos/plate36" element={<JonPlate36 />} />
        <Route path="jonphotos/plate37" element={<JonPlate37 />} />
        <Route path="jonphotos/plate38" element={<JonPlate38 />} />
        <Route path="jonphotos/plate39" element={<JonPlate39 />} />
        <Route path="jonphotos/plate40" element={<JonPlate40 />} />
        <Route path="jonphotos/plate41" element={<JonPlate41 />} />
        <Route path="jonphotos/plate42" element={<JonPlate42 />} />
        <Route path="jonphotos/plate43" element={<JonPlate43 />} />
        <Route path="jonphotos/plate44" element={<JonPlate44 />} />
        <Route path="jonphotos/plate45" element={<JonPlate45 />} />
        <Route path="jonphotos/plate46" element={<JonPlate46 />} />
        <Route path="jonphotos/plate47" element={<JonPlate47 />} />
        <Route path="jonphotos/plate48" element={<JonPlate48 />} />
        <Route path="jonphotos/plate49" element={<JonPlate49 />} />
        <Route path="jonlinks" element={<JonLinks />} />
        <Route path="jonlinks/plate01" element={<JonLinks01 />} />
        <Route path="jonlinks/plate02" element={<JonLinks02 />} />
        <Route path="jonlinks/plate03" element={<JonLinks03 />} />
        <Route path="jonlinks/plate04" element={<JonLinks04 />} />
      </Route>
      <Route path="chris" element={<ChrisLayout />}>
        <Route index element={<Navigate replace to="chrisinfo" />} />
        <Route path="chrisinfo" element={<Chris />} />
        <Route path="chrisfamily" element={<ChrisFamily />} />
        <Route path="chrisschool" element={<ChrisSchool />} />
        <Route path="chrismusic" element={<ChrisMusic />} />
        <Route path="chrissports" element={<ChrisSports />} />
        <Route path="chrishobby" element={<ChrisHobby />} />
        <Route path="chrisphotos" element={<ChrisPhotos />} />
        <Route path="chrislinks" element={<ChrisLinks />} />
      </Route>
      <Route path="cara" element={<CaraLayout />}>
        <Route index element={<Navigate replace to="carainfo" />} />
        <Route path="carainfo" element={<Cara />} />
        <Route path="carafamily" element={<CaraFamily />} />
        <Route path="caraschool" element={<CaraSchool />} />
        <Route path="caramusic" element={<CaraMusic />} />
        <Route path="carasports" element={<CaraSports />} />
        <Route path="carahobby" element={<CaraHobby />} />
        <Route path="caraphotos" element={<CaraPhotos />} />
        <Route path="caralinks" element={<CaraLinks />} />
      </Route>
      <Route path="karen" element={<KarenLayout />}>
        <Route index element={<Navigate replace to="kareninfo" />} />
        <Route path="kareninfo" element={<Karen />} />
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
