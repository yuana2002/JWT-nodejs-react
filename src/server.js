import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouters from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//init web router
initWebRouters(app);


app.listen(PORT, () => {
    console.log("JWT is backend running on the port " + PORT)
})