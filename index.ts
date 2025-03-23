// Limpia la consola
// import clear from "console-clear";
// clear();

import express from 'express';

const app = express();



import middlewareBasicos from "./src/config/middlewareBasicos";
middlewareBasicos(app);

import viewEngine from "./src/config/viewEngine";
viewEngine(app);



import router from "./src/config/router";
router(app);

import startServer from "./src/config/startServer";
startServer(app);