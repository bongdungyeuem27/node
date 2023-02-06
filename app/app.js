import express from "express";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { socketMessages } from "./socket/messages.js";
//config
import * as url from "url";
import config from "config";
//middleware
import bodyParser from "body-parser";
// import fs from "fs";

//socket.io
import { Server } from "socket.io";
import { createServer } from "http";

import path, { dirname } from "path";
import { fileURLToPath } from "url";
import util from "util";
import routers from "./routes/index.js";

dotenv.config();

const logFile = fs.createWriteStream(path.join("./debug.log"), { flags: "a" });
const logStdout = process.stdout;

console.log = function (d) {
  logFile.write(
    `${new Date().toISOString()} ${util.format.apply(null, arguments)} \n`
  );
  new this.Console(logStdout).log(d);
};
// console.error = function (d) {
//   logFile.write(
//     `${new Date().toISOString()} ${util.format.apply(null, arguments)} \n`
//   );
//   new this.Console(logStdout).error(d);
// };
console.error = (d) => {
  console.log(d);
};
// console.log = function (d) {
//   log_file.write(util.format(d) + "\n");
//   log_stdout.write(util.format(d) + "\n");
// };
// console.error = function (d) {
//   log_file.write(util.format(d) + "\n");
//   log_stdout.write(util.format(d) + "\n");
// };
const accessLogStream = fs.createWriteStream(path.join("access.log"), {
  flags: "a",
});
var app = express();

app.use(cors());

// var access = fs.createWriteStream(path.join("/node.access.log"), {
//     flags: "a",
//   }),
//   error = fs.createWriteStream(path.join("/node.error.log"), { flags: "a" });

// // redirect stdout / stderr
// proc.stdout.pipe(access);
// proc.stderr.pipe(error);

app.use(morgan("combined", { stream: accessLogStream }));
app.use(bodyParser.json()); //cho phep json
app.use(bodyParser.urlencoded({ extended: true })); //Cho phep form
// app.set("views", views);
app.set("view engine", "ejs");

mongoose.connect(process.env.APT_ENDPOINT_MONGODB, () => {
  console.log("connect to mongodb");
});

//session
app.set("trust proxy", 1); // trust first proxy
// app.use(
//   session({
//     secret: config.get("secret_key"),
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   })
// );

//static folder
// app.use("/public", express.static("./public"));

app.use(routers);

export const server = createServer(app);

socketMessages(server);

server.listen(4000, () => {
  // destructuring
  const { address, port } = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});
