import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import routes from "./api/routes/index.js";
import fileUpload from "express-fileupload";
import { job } from "./utilities/scheduler.js";

// fire up the express app
const app = express();

const PORT = 8081;

const server = http.Server(app);

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

// use express router
app.use("/", routes(io));

server.listen(process.env.PORT || PORT, function (err) {
    if (err) {
        console.log("oh no no no no no");
        return;
    }
    console.log("hey there i am using classroom on port : ", PORT);
});

export { server, app }

// add server self pinging
// job()
// pingAllUsers()