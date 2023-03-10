import { Server } from "socket.io";

const io = new Server({
  //   cors: { origin: "*", allowedHeaders: ["fizz-buzz"], credentials: true },
  cors: { origin: "http://127.0.0.1:5173" },
});

io.on("connection", (socket) => {
  // listen the event from client
  console.log("socket data is", socket.id);
  socket.on("message", (data: unknown) => {
    console.log("data from client", data);
    // broad cast the message to all the clients
    io.emit("response", { message: "Hello Nabin", age: 19 });
  });

  //   io.on('disconnect', () => {
  //     console.log('user disconnected');
  //   });
});

io.listen(4000);
console.log("server running at port 4000");
