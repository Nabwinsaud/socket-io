import express, { Request, Response, NextFunction } from "express";
import { Server } from "socket.io";
import { createServer } from "https";
import cors from "cors";
import helmet from "helmet";
const app = express();
// const server = require("http").createServer(app);
const server = createServer(app);

app.use(cors());
const io = new Server(server, {
  //   cors: { origin: "*", allowedHeaders: ["fizz-buzz"], credentials: true },
  cors: { origin: "http://127.0.0.1:5173/" },
});

app.use(helmet());
app.use("/", (req: Request, res: Response) => {
  res.send("Hello world ");
});

io.on("connection", (socket) => {
  console.log("socket connection is", socket);
  // listen the event from client
  socket.on("message", (data) => {
    console.log("data from client", data);
    // broad cast the message to all the clients
    io.emit("chat message ", data);
  });
});

// app.listen(4000, () => {
//   console.log("server running at port 4000");
// });
