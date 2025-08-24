import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// layouts
import HomePage from "./pages/HomePage";
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

// Chris
import ChrisFamily01 from "./pages/Chris/family/ChrisFamily01";
import ChrisFamily02 from "./pages/Chris/family/ChrisFamily02";
import ChrisFamily03 from "./pages/Chris/family/ChrisFamily03";
import ChrisFamily04 from "./pages/Chris/family/ChrisFamily04";
import ChrisFamily05 from "./pages/Chris/family/ChrisFamily05";
import ChrisFamily06 from "./pages/Chris/family/ChrisFamily06";
import ChrisFamily07 from "./pages/Chris/family/ChrisFamily07";
import ChrisFamily08 from "./pages/Chris/family/ChrisFamily08";
import ChrisFamily09 from "./pages/Chris/family/ChrisFamily09";

import ChrisSchool01 from "./pages/Chris/school/ChrisSchool01";

import ChrisMusic01 from "./pages/Chris/music/ChrisMusic01";
import ChrisMusic02 from "./pages/Chris/music/ChrisMusic02";
import ChrisMusic03 from "./pages/Chris/music/ChrisMusic03";

import ChrisSports01 from "./pages/Chris/sports/ChrisSports01";
import ChrisSports02 from "./pages/Chris/sports/ChrisSports02";
import ChrisSports03 from "./pages/Chris/sports/ChrisSports03";
import ChrisSports04 from "./pages/Chris/sports/ChrisSports04";
import ChrisSports05 from "./pages/Chris/sports/ChrisSports05";
import ChrisSports06 from "./pages/Chris/sports/ChrisSports06";
import ChrisSports07 from "./pages/Chris/sports/ChrisSports07";
import ChrisSports08 from "./pages/Chris/sports/ChrisSports08";
import ChrisSports09 from "./pages/Chris/sports/ChrisSports09";
import ChrisSports10 from "./pages/Chris/sports/ChrisSports10";
import ChrisSports11 from "./pages/Chris/sports/ChrisSports11";
import ChrisSports12 from "./pages/Chris/sports/ChrisSports12";
import ChrisSports13 from "./pages/Chris/sports/ChrisSports13";
import ChrisSports14 from "./pages/Chris/sports/ChrisSports14";
import ChrisSports15 from "./pages/Chris/sports/ChrisSports15";
import ChrisSports16 from "./pages/Chris/sports/ChrisSports16";
import ChrisSports17 from "./pages/Chris/sports/ChrisSports17";
import ChrisSports18 from "./pages/Chris/sports/ChrisSports18";
import ChrisSports19 from "./pages/Chris/sports/ChrisSports19";
import ChrisSports20 from "./pages/Chris/sports/ChrisSports20";
import ChrisSports21 from "./pages/Chris/sports/ChrisSports21";
import ChrisSports22 from "./pages/Chris/sports/ChrisSports22";
import ChrisSports23 from "./pages/Chris/sports/ChrisSports23";

import ChrisHobby01 from "./pages/Chris/hobby/ChrisHobby01";
import ChrisHobby02 from "./pages/Chris/hobby/ChrisHobby02";
import ChrisHobby03 from "./pages/Chris/hobby/ChrisHobby03";
import ChrisHobby04 from "./pages/Chris/hobby/ChrisHobby04";
import ChrisHobby05 from "./pages/Chris/hobby/ChrisHobby05";
import ChrisHobby06 from "./pages/Chris/hobby/ChrisHobby06";
import ChrisHobby07 from "./pages/Chris/hobby/ChrisHobby07";
import ChrisHobby08 from "./pages/Chris/hobby/ChrisHobby08";

import ChrisLinks01 from "./pages/Chris/links/ChrisLinks01";
import ChrisLinks02 from "./pages/Chris/links/ChrisLinks02";
import ChrisLinks03 from "./pages/Chris/links/ChrisLinks03";
import ChrisLinks04 from "./pages/Chris/links/ChrisLinks04";

import ChrisPlate01 from "./pages/Chris/photos/ChrisPlate01";
import ChrisPlate02 from "./pages/Chris/photos/ChrisPlate02";
import ChrisPlate03 from "./pages/Chris/photos/ChrisPlate03";
import ChrisPlate04 from "./pages/Chris/photos/ChrisPlate04";
import ChrisPlate05 from "./pages/Chris/photos/ChrisPlate05";
import ChrisPlate06 from "./pages/Chris/photos/ChrisPlate06";
import ChrisPlate07 from "./pages/Chris/photos/ChrisPlate07";
import ChrisPlate08 from "./pages/Chris/photos/ChrisPlate08";
import ChrisPlate09 from "./pages/Chris/photos/ChrisPlate09";
import ChrisPlate10 from "./pages/Chris/photos/ChrisPlate10";
import ChrisPlate11 from "./pages/Chris/photos/ChrisPlate11";
import ChrisPlate12 from "./pages/Chris/photos/ChrisPlate12";
import ChrisPlate13 from "./pages/Chris/photos/ChrisPlate13";
import ChrisPlate14 from "./pages/Chris/photos/ChrisPlate14";
import ChrisPlate15 from "./pages/Chris/photos/ChrisPlate15";
import ChrisPlate16 from "./pages/Chris/photos/ChrisPlate16";
import ChrisPlate17 from "./pages/Chris/photos/ChrisPlate17";
import ChrisPlate18 from "./pages/Chris/photos/ChrisPlate18";
import ChrisPlate19 from "./pages/Chris/photos/ChrisPlate19";
import ChrisPlate20 from "./pages/Chris/photos/ChrisPlate20";
import ChrisPlate21 from "./pages/Chris/photos/ChrisPlate21";
import ChrisPlate22 from "./pages/Chris/photos/ChrisPlate22";
import ChrisPlate23 from "./pages/Chris/photos/ChrisPlate23";
import ChrisPlate24 from "./pages/Chris/photos/ChrisPlate24";
import ChrisPlate25 from "./pages/Chris/photos/ChrisPlate25";
import ChrisPlate26 from "./pages/Chris/photos/ChrisPlate26";
import ChrisPlate27 from "./pages/Chris/photos/ChrisPlate27";
import ChrisPlate28 from "./pages/Chris/photos/ChrisPlate28";
import ChrisPlate29 from "./pages/Chris/photos/ChrisPlate29";
import ChrisPlate30 from "./pages/Chris/photos/ChrisPlate30";
import ChrisPlate31 from "./pages/Chris/photos/ChrisPlate31";
import ChrisPlate32 from "./pages/Chris/photos/ChrisPlate32";
import ChrisPlate33 from "./pages/Chris/photos/ChrisPlate33";
import ChrisPlate34 from "./pages/Chris/photos/ChrisPlate34";
import ChrisPlate35 from "./pages/Chris/photos/ChrisPlate35";
import ChrisPlate36 from "./pages/Chris/photos/ChrisPlate36";
import ChrisPlate37 from "./pages/Chris/photos/ChrisPlate37";
import ChrisPlate38 from "./pages/Chris/photos/ChrisPlate38";
import ChrisPlate39 from "./pages/Chris/photos/ChrisPlate39";
import ChrisPlate40 from "./pages/Chris/photos/ChrisPlate40";
import ChrisPlate41 from "./pages/Chris/photos/ChrisPlate41";
import ChrisPlate42 from "./pages/Chris/photos/ChrisPlate42";

// CARA
import CaraFamily01 from "./pages/Cara/family/CaraFamily01";
import CaraFamily02 from "./pages/Cara/family/CaraFamily02";
import CaraFamily03 from "./pages/Cara/family/CaraFamily03";
import CaraFamily04 from "./pages/Cara/family/CaraFamily04";
import CaraFamily05 from "./pages/Cara/family/CaraFamily05";
import CaraFamily06 from "./pages/Cara/family/CaraFamily06";
import CaraFamily07 from "./pages/Cara/family/CaraFamily07";
import CaraFamily08 from "./pages/Cara/family/CaraFamily08";
import CaraFamily09 from "./pages/Cara/family/CaraFamily09";

import CaraSchool01 from "./pages/Cara/school/CaraSchool01";
import CaraSchool02 from "./pages/Cara/school/CaraSchool02";
import CaraSchool03 from "./pages/Cara/school/CaraSchool03";
import CaraSchool04 from "./pages/Cara/school/CaraSchool04";
import CaraSchool05 from "./pages/Cara/school/CaraSchool05";

import CaraMusic01 from "./pages/Cara/music/CaraMusic01";

import CaraSports01 from "./pages/Cara/sports/CaraSports01";
import CaraSports02 from "./pages/Cara/sports/CaraSports02";
import CaraSports03 from "./pages/Cara/sports/CaraSports03";
import CaraSports04 from "./pages/Cara/sports/CaraSports04";
import CaraSports05 from "./pages/Cara/sports/CaraSports05";
import CaraSports06 from "./pages/Cara/sports/CaraSports06";
import CaraSports07 from "./pages/Cara/sports/CaraSports07";
import CaraSports08 from "./pages/Cara/sports/CaraSports08";
import CaraSports09 from "./pages/Cara/sports/CaraSports09";
import CaraSports10 from "./pages/Cara/sports/CaraSports10";
import CaraSports11 from "./pages/Cara/sports/CaraSports11";
import CaraSports12 from "./pages/Cara/sports/CaraSports12";

import CaraHobby01 from "./pages/Cara/hobby/CaraHobby01";
import CaraHobby02 from "./pages/Cara/hobby/CaraHobby02";
import CaraHobby03 from "./pages/Cara/hobby/CaraHobby03";
import CaraHobby04 from "./pages/Cara/hobby/CaraHobby04";
import CaraHobby05 from "./pages/Cara/hobby/CaraHobby05";
import CaraHobby06 from "./pages/Cara/hobby/CaraHobby06";

import CaraLinks01 from "./pages/Cara/links/CaraLinks01";
import CaraLinks02 from "./pages/Cara/links/CaraLinks02";
import CaraLinks03 from "./pages/Cara/links/CaraLinks03";
import CaraLinks04 from "./pages/Cara/links/CaraLinks04";

import CaraPlate01 from "./pages/Cara/photos/CaraPlate01";
import CaraPlate02 from "./pages/Cara/photos/CaraPlate02";
import CaraPlate03 from "./pages/Cara/photos/CaraPlate03";
import CaraPlate04 from "./pages/Cara/photos/CaraPlate04";
import CaraPlate05 from "./pages/Cara/photos/CaraPlate05";
import CaraPlate06 from "./pages/Cara/photos/CaraPlate06";
import CaraPlate07 from "./pages/Cara/photos/CaraPlate07";
import CaraPlate08 from "./pages/Cara/photos/CaraPlate08";
import CaraPlate09 from "./pages/Cara/photos/CaraPlate09";
import CaraPlate10 from "./pages/Cara/photos/CaraPlate10";
import CaraPlate11 from "./pages/Cara/photos/CaraPlate11";
import CaraPlate12 from "./pages/Cara/photos/CaraPlate12";
import CaraPlate13 from "./pages/Cara/photos/CaraPlate13";
import CaraPlate14 from "./pages/Cara/photos/CaraPlate14";
import CaraPlate15 from "./pages/Cara/photos/CaraPlate15";
import CaraPlate16 from "./pages/Cara/photos/CaraPlate16";
import CaraPlate17 from "./pages/Cara/photos/CaraPlate17";
import CaraPlate18 from "./pages/Cara/photos/CaraPlate18";
import CaraPlate19 from "./pages/Cara/photos/CaraPlate19";
import CaraPlate20 from "./pages/Cara/photos/CaraPlate20";
import CaraPlate21 from "./pages/Cara/photos/CaraPlate21";
import CaraPlate22 from "./pages/Cara/photos/CaraPlate22";
import CaraPlate23 from "./pages/Cara/photos/CaraPlate23";
import CaraPlate24 from "./pages/Cara/photos/CaraPlate24";
import CaraPlate25 from "./pages/Cara/photos/CaraPlate25";
import CaraPlate26 from "./pages/Cara/photos/CaraPlate26";
import CaraPlate27 from "./pages/Cara/photos/CaraPlate27";
import CaraPlate28 from "./pages/Cara/photos/CaraPlate28";
import CaraPlate29 from "./pages/Cara/photos/CaraPlate29";
import CaraPlate30 from "./pages/Cara/photos/CaraPlate30";
import CaraPlate31 from "./pages/Cara/photos/CaraPlate31";
import CaraPlate32 from "./pages/Cara/photos/CaraPlate32";
import CaraPlate33 from "./pages/Cara/photos/CaraPlate33";
import CaraPlate34 from "./pages/Cara/photos/CaraPlate34";
import CaraPlate35 from "./pages/Cara/photos/CaraPlate35";
import CaraPlate36 from "./pages/Cara/photos/CaraPlate36";
import CaraPlate37 from "./pages/Cara/photos/CaraPlate37";
import CaraPlate38 from "./pages/Cara/photos/CaraPlate38";
import CaraPlate39 from "./pages/Cara/photos/CaraPlate39";
import CaraPlate40 from "./pages/Cara/photos/CaraPlate40";
import CaraPlate41 from "./pages/Cara/photos/CaraPlate41";
import CaraPlate42 from "./pages/Cara/photos/CaraPlate42";
import CaraPlate43 from "./pages/Cara/photos/CaraPlate43";
import CaraPlate44 from "./pages/Cara/photos/CaraPlate44";
import CaraPlate45 from "./pages/Cara/photos/CaraPlate45";
import CaraPlate46 from "./pages/Cara/photos/CaraPlate46";
import CaraPlate47 from "./pages/Cara/photos/CaraPlate47";
import CaraPlate48 from "./pages/Cara/photos/CaraPlate48";

// KAREN
import KarenFamily01 from "./pages/Karen/family/KarenFamily01";
import KarenFamily02 from "./pages/Karen/family/KarenFamily02";
import KarenFamily03 from "./pages/Karen/family/KarenFamily03";
import KarenFamily04 from "./pages/Karen/family/KarenFamily04";
import KarenFamily05 from "./pages/Karen/family/KarenFamily05";
import KarenFamily06 from "./pages/Karen/family/KarenFamily06";
import KarenFamily07 from "./pages/Karen/family/KarenFamily07";
import KarenFamily08 from "./pages/Karen/family/KarenFamily08";
import KarenFamily09 from "./pages/Karen/family/KarenFamily09";
import KarenFamily10 from "./pages/Karen/family/KarenFamily10";
import KarenFamily11 from "./pages/Karen/family/KarenFamily11";
import KarenFamily12 from "./pages/Karen/family/KarenFamily12";
import KarenFamily13 from "./pages/Karen/family/KarenFamily13";
import KarenFamily14 from "./pages/Karen/family/KarenFamily14";
import KarenFamily15 from "./pages/Karen/family/KarenFamily15";
import KarenFamily16 from "./pages/Karen/family/KarenFamily16";
import KarenFamily17 from "./pages/Karen/family/KarenFamily17";
import KarenFamily18 from "./pages/Karen/family/KarenFamily18";
import KarenFamily19 from "./pages/Karen/family/KarenFamily19";
import KarenFamily20 from "./pages/Karen/family/KarenFamily20";
import KarenFamily21 from "./pages/Karen/family/KarenFamily21";
import KarenFamily22 from "./pages/Karen/family/KarenFamily22";
import KarenFamily23 from "./pages/Karen/family/KarenFamily23";

import KarenSchool01 from "./pages/Karen/school/KarenSchool01";
import KarenSchool02 from "./pages/Karen/school/KarenSchool02";
import KarenSchool03 from "./pages/Karen/school/KarenSchool03";

import KarenMusic01 from "./pages/Karen/music/KarenMusic01";
import KarenMusic02 from "./pages/Karen/music/KarenMusic02";

import KarenSports01 from "./pages/Karen/sports/KarenSports01";
import KarenSports02 from "./pages/Karen/sports/KarenSports02";
import KarenSports03 from "./pages/Karen/sports/KarenSports03";
import KarenSports04 from "./pages/Karen/sports/KarenSports04";
import KarenSports05 from "./pages/Karen/sports/KarenSports05";
import KarenSports06 from "./pages/Karen/sports/KarenSports06";

import KarenHobby01 from "./pages/Karen/hobby/KarenHobby01";
import KarenHobby02 from "./pages/Karen/hobby/KarenHobby02";
import KarenHobby03 from "./pages/Karen/hobby/KarenHobby03";
import KarenHobby04 from "./pages/Karen/hobby/KarenHobby04";
import KarenHobby05 from "./pages/Karen/hobby/KarenHobby05";
import KarenHobby06 from "./pages/Karen/hobby/KarenHobby06";
import KarenHobby07 from "./pages/Karen/hobby/KarenHobby07";

import KarenPlate01 from "./pages/Karen/photos/KarenPlate01";
import KarenPlate02 from "./pages/Karen/photos/KarenPlate02";
import KarenPlate03 from "./pages/Karen/photos/KarenPlate03";
import KarenPlate04 from "./pages/Karen/photos/KarenPlate04";
import KarenPlate05 from "./pages/Karen/photos/KarenPlate05";
import KarenPlate06 from "./pages/Karen/photos/KarenPlate06";
import KarenPlate07 from "./pages/Karen/photos/KarenPlate07";
import KarenPlate08 from "./pages/Karen/photos/KarenPlate08";
import KarenPlate09 from "./pages/Karen/photos/KarenPlate09";
import KarenPlate10 from "./pages/Karen/photos/KarenPlate10";
import KarenPlate11 from "./pages/Karen/photos/KarenPlate11";
import KarenPlate12 from "./pages/Karen/photos/KarenPlate12";
import KarenPlate13 from "./pages/Karen/photos/KarenPlate13";
import KarenPlate14 from "./pages/Karen/photos/KarenPlate14";
import KarenPlate15 from "./pages/Karen/photos/KarenPlate15";
import KarenPlate16 from "./pages/Karen/photos/KarenPlate16";
import KarenPlate17 from "./pages/Karen/photos/KarenPlate17";
import KarenPlate18 from "./pages/Karen/photos/KarenPlate18";
import KarenPlate19 from "./pages/Karen/photos/KarenPlate19";
import KarenPlate20 from "./pages/Karen/photos/KarenPlate20";
import KarenPlate21 from "./pages/Karen/photos/KarenPlate21";
import KarenPlate22 from "./pages/Karen/photos/KarenPlate22";
import KarenPlate23 from "./pages/Karen/photos/KarenPlate23";
import KarenPlate24 from "./pages/Karen/photos/KarenPlate24";
import KarenPlate25 from "./pages/Karen/photos/KarenPlate25";
import KarenPlate26 from "./pages/Karen/photos/KarenPlate26";
import KarenPlate27 from "./pages/Karen/photos/KarenPlate27";
import KarenPlate28 from "./pages/Karen/photos/KarenPlate28";
import KarenPlate29 from "./pages/Karen/photos/KarenPlate29";
import KarenPlate30 from "./pages/Karen/photos/KarenPlate30";
import KarenPlate31 from "./pages/Karen/photos/KarenPlate31";
import KarenPlate32 from "./pages/Karen/photos/KarenPlate32";
import KarenPlate33 from "./pages/Karen/photos/KarenPlate33";
import KarenPlate34 from "./pages/Karen/photos/KarenPlate34";
import KarenPlate35 from "./pages/Karen/photos/KarenPlate35";
import KarenPlate36 from "./pages/Karen/photos/KarenPlate36";
import KarenPlate37 from "./pages/Karen/photos/KarenPlate37";
import KarenPlate38 from "./pages/Karen/photos/KarenPlate38";
import KarenPlate39 from "./pages/Karen/photos/KarenPlate39";
import KarenPlate40 from "./pages/Karen/photos/KarenPlate40";
import KarenPlate41 from "./pages/Karen/photos/KarenPlate41";
import KarenPlate42 from "./pages/Karen/photos/KarenPlate42";
import KarenPlate43 from "./pages/Karen/photos/KarenPlate43";
import KarenPlate44 from "./pages/Karen/photos/KarenPlate44";
import KarenPlate45 from "./pages/Karen/photos/KarenPlate45";
import KarenPlate46 from "./pages/Karen/photos/KarenPlate46";
import KarenPlate47 from "./pages/Karen/photos/KarenPlate47";
import KarenPlate48 from "./pages/Karen/photos/KarenPlate48";
import KarenPlate49 from "./pages/Karen/photos/KarenPlate49";
import KarenPlate50 from "./pages/Karen/photos/KarenPlate50";
import KarenPlate51 from "./pages/Karen/photos/KarenPlate51";
import KarenPlate52 from "./pages/Karen/photos/KarenPlate52";
import KarenPlate53 from "./pages/Karen/photos/KarenPlate53";

import KarenLinks01 from "./pages/Karen/links/KarenLinks01";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path="/" element={<RootLayout />}>
        {/* <Route index element={<Navigate replace to="jonathan/joninfo" />} /> */}
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

          <Route path="chrisfamily/plate01" element={<ChrisFamily01 />} />
          <Route path="chrisfamily/plate02" element={<ChrisFamily02 />} />
          <Route path="chrisfamily/plate03" element={<ChrisFamily03 />} />
          <Route path="chrisfamily/plate04" element={<ChrisFamily04 />} />
          <Route path="chrisfamily/plate05" element={<ChrisFamily05 />} />
          <Route path="chrisfamily/plate06" element={<ChrisFamily06 />} />
          <Route path="chrisfamily/plate07" element={<ChrisFamily07 />} />
          <Route path="chrisfamily/plate08" element={<ChrisFamily08 />} />
          <Route path="chrisfamily/plate09" element={<ChrisFamily09 />} />
          <Route path="chrisschool/plate01" element={<ChrisSchool01 />} />
          <Route path="chrismusic/plate01" element={<ChrisMusic01 />} />
          <Route path="chrismusic/plate02" element={<ChrisMusic02 />} />
          <Route path="chrismusic/plate03" element={<ChrisMusic03 />} />

          <Route path="chrissports/plate01" element={<ChrisSports01 />} />
          <Route path="chrissports/plate02" element={<ChrisSports02 />} />
          <Route path="chrissports/plate03" element={<ChrisSports03 />} />
          <Route path="chrissports/plate04" element={<ChrisSports04 />} />
          <Route path="chrissports/plate05" element={<ChrisSports05 />} />
          <Route path="chrissports/plate06" element={<ChrisSports06 />} />
          <Route path="chrissports/plate07" element={<ChrisSports07 />} />
          <Route path="chrissports/plate08" element={<ChrisSports08 />} />
          <Route path="chrissports/plate09" element={<ChrisSports09 />} />
          <Route path="chrissports/plate10" element={<ChrisSports10 />} />
          <Route path="chrissports/plate11" element={<ChrisSports11 />} />
          <Route path="chrissports/plate12" element={<ChrisSports12 />} />
          <Route path="chrissports/plate13" element={<ChrisSports13 />} />
          <Route path="chrissports/plate14" element={<ChrisSports14 />} />
          <Route path="chrissports/plate15" element={<ChrisSports15 />} />
          <Route path="chrissports/plate16" element={<ChrisSports16 />} />
          <Route path="chrissports/plate17" element={<ChrisSports17 />} />
          <Route path="chrissports/plate18" element={<ChrisSports18 />} />
          <Route path="chrissports/plate19" element={<ChrisSports19 />} />
          <Route path="chrissports/plate20" element={<ChrisSports20 />} />
          <Route path="chrissports/plate21" element={<ChrisSports21 />} />
          <Route path="chrissports/plate22" element={<ChrisSports22 />} />
          <Route path="chrissports/plate23" element={<ChrisSports23 />} />
          <Route path="chrishobby/plate01" element={<ChrisHobby01 />} />
          <Route path="chrishobby/plate02" element={<ChrisHobby02 />} />
          <Route path="chrishobby/plate03" element={<ChrisHobby03 />} />
          <Route path="chrishobby/plate04" element={<ChrisHobby04 />} />
          <Route path="chrishobby/plate05" element={<ChrisHobby05 />} />
          <Route path="chrishobby/plate06" element={<ChrisHobby06 />} />
          <Route path="chrishobby/plate07" element={<ChrisHobby07 />} />
          <Route path="chrishobby/plate08" element={<ChrisHobby08 />} />
          <Route path="chrislinks/plate01" element={<ChrisLinks01 />} />
          <Route path="chrislinks/plate02" element={<ChrisLinks02 />} />
          <Route path="chrislinks/plate03" element={<ChrisLinks03 />} />
          <Route path="chrislinks/plate04" element={<ChrisLinks04 />} />

          <Route path="chrisphotos" element={<ChrisPhotos />} />
          <Route path="chrisphotos/plate01" element={<ChrisPlate01 />} />
          <Route path="chrisphotos/plate02" element={<ChrisPlate02 />} />
          <Route path="chrisphotos/plate03" element={<ChrisPlate03 />} />
          <Route path="chrisphotos/plate04" element={<ChrisPlate04 />} />
          <Route path="chrisphotos/plate05" element={<ChrisPlate05 />} />
          <Route path="chrisphotos/plate06" element={<ChrisPlate06 />} />
          <Route path="chrisphotos/plate07" element={<ChrisPlate07 />} />
          <Route path="chrisphotos/plate08" element={<ChrisPlate08 />} />
          <Route path="chrisphotos/plate09" element={<ChrisPlate09 />} />
          <Route path="chrisphotos/plate10" element={<ChrisPlate10 />} />
          <Route path="chrisphotos/plate11" element={<ChrisPlate11 />} />
          <Route path="chrisphotos/plate12" element={<ChrisPlate12 />} />
          <Route path="chrisphotos/plate13" element={<ChrisPlate13 />} />
          <Route path="chrisphotos/plate14" element={<ChrisPlate14 />} />
          <Route path="chrisphotos/plate15" element={<ChrisPlate15 />} />
          <Route path="chrisphotos/plate16" element={<ChrisPlate16 />} />
          <Route path="chrisphotos/plate17" element={<ChrisPlate17 />} />
          <Route path="chrisphotos/plate18" element={<ChrisPlate18 />} />
          <Route path="chrisphotos/plate19" element={<ChrisPlate19 />} />
          <Route path="chrisphotos/plate20" element={<ChrisPlate20 />} />
          <Route path="chrisphotos/plate21" element={<ChrisPlate21 />} />
          <Route path="chrisphotos/plate22" element={<ChrisPlate22 />} />
          <Route path="chrisphotos/plate23" element={<ChrisPlate23 />} />
          <Route path="chrisphotos/plate24" element={<ChrisPlate24 />} />
          <Route path="chrisphotos/plate25" element={<ChrisPlate25 />} />
          <Route path="chrisphotos/plate26" element={<ChrisPlate26 />} />
          <Route path="chrisphotos/plate27" element={<ChrisPlate27 />} />
          <Route path="chrisphotos/plate28" element={<ChrisPlate28 />} />
          <Route path="chrisphotos/plate29" element={<ChrisPlate29 />} />
          <Route path="chrisphotos/plate30" element={<ChrisPlate30 />} />
          <Route path="chrisphotos/plate31" element={<ChrisPlate31 />} />
          <Route path="chrisphotos/plate32" element={<ChrisPlate32 />} />
          <Route path="chrisphotos/plate33" element={<ChrisPlate33 />} />
          <Route path="chrisphotos/plate34" element={<ChrisPlate34 />} />
          <Route path="chrisphotos/plate35" element={<ChrisPlate35 />} />
          <Route path="chrisphotos/plate36" element={<ChrisPlate36 />} />
          <Route path="chrisphotos/plate37" element={<ChrisPlate37 />} />
          <Route path="chrisphotos/plate38" element={<ChrisPlate38 />} />
          <Route path="chrisphotos/plate39" element={<ChrisPlate39 />} />
          <Route path="chrisphotos/plate40" element={<ChrisPlate40 />} />
          <Route path="chrisphotos/plate41" element={<ChrisPlate41 />} />
          <Route path="chrisphotos/plate42" element={<ChrisPlate42 />} />
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

          <Route path="carafamily/plate01" element={<CaraFamily01 />} />
          <Route path="carafamily/plate02" element={<CaraFamily02 />} />
          <Route path="carafamily/plate03" element={<CaraFamily03 />} />
          <Route path="carafamily/plate04" element={<CaraFamily04 />} />
          <Route path="carafamily/plate05" element={<CaraFamily05 />} />
          <Route path="carafamily/plate06" element={<CaraFamily06 />} />
          <Route path="carafamily/plate07" element={<CaraFamily07 />} />
          <Route path="carafamily/plate08" element={<CaraFamily08 />} />
          <Route path="carafamily/plate09" element={<CaraFamily09 />} />
          <Route path="caraschool/plate01" element={<CaraSchool01 />} />
          <Route path="caraschool/plate02" element={<CaraSchool02 />} />
          <Route path="caraschool/plate03" element={<CaraSchool03 />} />
          <Route path="caraschool/plate04" element={<CaraSchool04 />} />
          <Route path="caraschool/plate05" element={<CaraSchool05 />} />
          <Route path="caramusic/plate01" element={<CaraMusic01 />} />
          <Route path="carasports/plate01" element={<CaraSports01 />} />
          <Route path="carasports/plate02" element={<CaraSports02 />} />
          <Route path="carasports/plate03" element={<CaraSports03 />} />
          <Route path="carasports/plate04" element={<CaraSports04 />} />
          <Route path="carasports/plate05" element={<CaraSports05 />} />
          <Route path="carasports/plate06" element={<CaraSports06 />} />
          <Route path="carasports/plate07" element={<CaraSports07 />} />
          <Route path="carasports/plate08" element={<CaraSports08 />} />
          <Route path="carasports/plate09" element={<CaraSports09 />} />
          <Route path="carasports/plate10" element={<CaraSports10 />} />
          <Route path="carasports/plate11" element={<CaraSports11 />} />
          <Route path="carasports/plate12" element={<CaraSports12 />} />
          <Route path="carahobby/plate01" element={<CaraHobby01 />} />
          <Route path="carahobby/plate02" element={<CaraHobby02 />} />
          <Route path="carahobby/plate03" element={<CaraHobby03 />} />
          <Route path="carahobby/plate04" element={<CaraHobby04 />} />
          <Route path="carahobby/plate05" element={<CaraHobby05 />} />
          <Route path="carahobby/plate06" element={<CaraHobby06 />} />

          <Route path="caralinks/plate01" element={<CaraLinks01 />} />
          <Route path="caralinks/plate02" element={<CaraLinks02 />} />
          <Route path="caralinks/plate03" element={<CaraLinks03 />} />
          <Route path="caralinks/plate04" element={<CaraLinks04 />} />

          <Route path="caraphotos" element={<CaraPhotos />} />
          <Route path="caraphotos/plate01" element={<CaraPlate01 />} />
          <Route path="caraphotos/plate02" element={<CaraPlate02 />} />
          <Route path="caraphotos/plate03" element={<CaraPlate03 />} />
          <Route path="caraphotos/plate04" element={<CaraPlate04 />} />
          <Route path="caraphotos/plate05" element={<CaraPlate05 />} />
          <Route path="caraphotos/plate06" element={<CaraPlate06 />} />
          <Route path="caraphotos/plate07" element={<CaraPlate07 />} />
          <Route path="caraphotos/plate08" element={<CaraPlate08 />} />
          <Route path="caraphotos/plate09" element={<CaraPlate09 />} />
          <Route path="caraphotos/plate10" element={<CaraPlate10 />} />
          <Route path="caraphotos/plate11" element={<CaraPlate11 />} />
          <Route path="caraphotos/plate12" element={<CaraPlate12 />} />
          <Route path="caraphotos/plate13" element={<CaraPlate13 />} />
          <Route path="caraphotos/plate14" element={<CaraPlate14 />} />
          <Route path="caraphotos/plate15" element={<CaraPlate15 />} />
          <Route path="caraphotos/plate16" element={<CaraPlate16 />} />
          <Route path="caraphotos/plate17" element={<CaraPlate17 />} />
          <Route path="caraphotos/plate18" element={<CaraPlate18 />} />
          <Route path="caraphotos/plate19" element={<CaraPlate19 />} />
          <Route path="caraphotos/plate20" element={<CaraPlate20 />} />
          <Route path="caraphotos/plate21" element={<CaraPlate21 />} />
          <Route path="caraphotos/plate22" element={<CaraPlate22 />} />
          <Route path="caraphotos/plate23" element={<CaraPlate23 />} />
          <Route path="caraphotos/plate24" element={<CaraPlate24 />} />
          <Route path="caraphotos/plate25" element={<CaraPlate25 />} />
          <Route path="caraphotos/plate26" element={<CaraPlate26 />} />
          <Route path="caraphotos/plate27" element={<CaraPlate27 />} />
          <Route path="caraphotos/plate28" element={<CaraPlate28 />} />
          <Route path="caraphotos/plate29" element={<CaraPlate29 />} />
          <Route path="caraphotos/plate30" element={<CaraPlate30 />} />
          <Route path="caraphotos/plate31" element={<CaraPlate31 />} />
          <Route path="caraphotos/plate32" element={<CaraPlate32 />} />
          <Route path="caraphotos/plate33" element={<CaraPlate33 />} />
          <Route path="caraphotos/plate34" element={<CaraPlate34 />} />
          <Route path="caraphotos/plate35" element={<CaraPlate35 />} />
          <Route path="caraphotos/plate36" element={<CaraPlate36 />} />
          <Route path="caraphotos/plate37" element={<CaraPlate37 />} />
          <Route path="caraphotos/plate38" element={<CaraPlate38 />} />
          <Route path="caraphotos/plate39" element={<CaraPlate39 />} />
          <Route path="caraphotos/plate40" element={<CaraPlate40 />} />
          <Route path="caraphotos/plate41" element={<CaraPlate41 />} />
          <Route path="caraphotos/plate42" element={<CaraPlate42 />} />
          <Route path="caraphotos/plate43" element={<CaraPlate43 />} />
          <Route path="caraphotos/plate44" element={<CaraPlate44 />} />
          <Route path="caraphotos/plate45" element={<CaraPlate45 />} />
          <Route path="caraphotos/plate46" element={<CaraPlate46 />} />
          <Route path="caraphotos/plate47" element={<CaraPlate47 />} />
          <Route path="caraphotos/plate48" element={<CaraPlate48 />} />

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

          <Route path="karenfamily/plate01" element={<KarenFamily01 />} />
          <Route path="karenfamily/plate02" element={<KarenFamily02 />} />
          <Route path="karenfamily/plate03" element={<KarenFamily03 />} />
          <Route path="karenfamily/plate04" element={<KarenFamily04 />} />
          <Route path="karenfamily/plate05" element={<KarenFamily05 />} />
          <Route path="karenfamily/plate06" element={<KarenFamily06 />} />
          <Route path="karenfamily/plate07" element={<KarenFamily07 />} />
          <Route path="karenfamily/plate08" element={<KarenFamily08 />} />
          <Route path="karenfamily/plate09" element={<KarenFamily09 />} />
          <Route path="karenfamily/plate10" element={<KarenFamily10 />} />
          <Route path="karenfamily/plate11" element={<KarenFamily11 />} />
          <Route path="karenfamily/plate12" element={<KarenFamily12 />} />
          <Route path="karenfamily/plate13" element={<KarenFamily13 />} />
          <Route path="karenfamily/plate14" element={<KarenFamily14 />} />
          <Route path="karenfamily/plate15" element={<KarenFamily15 />} />
          <Route path="karenfamily/plate16" element={<KarenFamily16 />} />
          <Route path="karenfamily/plate17" element={<KarenFamily17 />} />
          <Route path="karenfamily/plate18" element={<KarenFamily18 />} />
          <Route path="karenfamily/plate19" element={<KarenFamily19 />} />
          <Route path="karenfamily/plate20" element={<KarenFamily20 />} />
          <Route path="karenfamily/plate21" element={<KarenFamily21 />} />
          <Route path="karenfamily/plate22" element={<KarenFamily22 />} />
          <Route path="karenfamily/plate23" element={<KarenFamily23 />} />
          <Route path="karenschool/plate01" element={<KarenSchool01 />} />
          <Route path="karenschool/plate02" element={<KarenSchool02 />} />
          <Route path="karenschool/plate03" element={<KarenSchool03 />} />
          <Route path="karenmusic/plate01" element={<KarenMusic01 />} />
          <Route path="karenmusic/plate02" element={<KarenMusic02 />} />
          <Route path="karensports/plate01" element={<KarenSports01 />} />
          <Route path="karensports/plate02" element={<KarenSports02 />} />
          <Route path="karensports/plate03" element={<KarenSports03 />} />
          <Route path="karensports/plate04" element={<KarenSports04 />} />
          <Route path="karensports/plate05" element={<KarenSports05 />} />
          <Route path="karensports/plate06" element={<KarenSports06 />} />
          <Route path="karenhobby/plate01" element={<KarenHobby01 />} />
          <Route path="karenhobby/plate02" element={<KarenHobby02 />} />
          <Route path="karenhobby/plate03" element={<KarenHobby03 />} />
          <Route path="karenhobby/plate04" element={<KarenHobby04 />} />
          <Route path="karenhobby/plate05" element={<KarenHobby05 />} />
          <Route path="karenhobby/plate06" element={<KarenHobby06 />} />
          <Route path="karenhobby/plate07" element={<KarenHobby07 />} />
          <Route path="karenphotos" element={<KarenPhotos />} />
          <Route path="karenphotos/plate01" element={<KarenPlate01 />} />
          <Route path="karenphotos/plate02" element={<KarenPlate02 />} />
          <Route path="karenphotos/plate03" element={<KarenPlate03 />} />
          <Route path="karenphotos/plate04" element={<KarenPlate04 />} />
          <Route path="karenphotos/plate05" element={<KarenPlate05 />} />
          <Route path="karenphotos/plate06" element={<KarenPlate06 />} />
          <Route path="karenphotos/plate07" element={<KarenPlate07 />} />
          <Route path="karenphotos/plate08" element={<KarenPlate08 />} />
          <Route path="karenphotos/plate09" element={<KarenPlate09 />} />
          <Route path="karenphotos/plate10" element={<KarenPlate10 />} />
          <Route path="karenphotos/plate11" element={<KarenPlate11 />} />
          <Route path="karenphotos/plate12" element={<KarenPlate12 />} />
          <Route path="karenphotos/plate13" element={<KarenPlate13 />} />
          <Route path="karenphotos/plate14" element={<KarenPlate14 />} />
          <Route path="karenphotos/plate15" element={<KarenPlate15 />} />
          <Route path="karenphotos/plate16" element={<KarenPlate16 />} />
          <Route path="karenphotos/plate17" element={<KarenPlate17 />} />
          <Route path="karenphotos/plate18" element={<KarenPlate18 />} />
          <Route path="karenphotos/plate19" element={<KarenPlate19 />} />
          <Route path="karenphotos/plate20" element={<KarenPlate20 />} />
          <Route path="karenphotos/plate21" element={<KarenPlate21 />} />
          <Route path="karenphotos/plate22" element={<KarenPlate22 />} />
          <Route path="karenphotos/plate23" element={<KarenPlate23 />} />
          <Route path="karenphotos/plate24" element={<KarenPlate24 />} />
          <Route path="karenphotos/plate25" element={<KarenPlate25 />} />
          <Route path="karenphotos/plate26" element={<KarenPlate26 />} />
          <Route path="karenphotos/plate27" element={<KarenPlate27 />} />
          <Route path="karenphotos/plate28" element={<KarenPlate28 />} />
          <Route path="karenphotos/plate29" element={<KarenPlate29 />} />
          <Route path="karenphotos/plate30" element={<KarenPlate30 />} />
          <Route path="karenphotos/plate31" element={<KarenPlate31 />} />
          <Route path="karenphotos/plate32" element={<KarenPlate32 />} />
          <Route path="karenphotos/plate33" element={<KarenPlate33 />} />
          <Route path="karenphotos/plate34" element={<KarenPlate34 />} />
          <Route path="karenphotos/plate35" element={<KarenPlate35 />} />
          <Route path="karenphotos/plate36" element={<KarenPlate36 />} />
          <Route path="karenphotos/plate37" element={<KarenPlate37 />} />
          <Route path="karenphotos/plate38" element={<KarenPlate38 />} />
          <Route path="karenphotos/plate39" element={<KarenPlate39 />} />
          <Route path="karenphotos/plate40" element={<KarenPlate40 />} />
          <Route path="karenphotos/plate41" element={<KarenPlate41 />} />
          <Route path="karenphotos/plate42" element={<KarenPlate42 />} />
          <Route path="karenphotos/plate43" element={<KarenPlate43 />} />
          <Route path="karenphotos/plate44" element={<KarenPlate44 />} />
          <Route path="karenphotos/plate45" element={<KarenPlate45 />} />
          <Route path="karenphotos/plate46" element={<KarenPlate46 />} />
          <Route path="karenphotos/plate47" element={<KarenPlate47 />} />
          <Route path="karenphotos/plate48" element={<KarenPlate48 />} />
          <Route path="karenphotos/plate49" element={<KarenPlate49 />} />
          <Route path="karenphotos/plate50" element={<KarenPlate50 />} />
          <Route path="karenphotos/plate51" element={<KarenPlate51 />} />
          <Route path="karenphotos/plate52" element={<KarenPlate52 />} />
          <Route path="karenphotos/plate53" element={<KarenPlate53 />} />

          <Route path="karenlinks" element={<KarenLinks />} />
          <Route path="karenlinks/plate01" element={<KarenLinks01 />} />
        </Route>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
