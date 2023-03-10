import { type Socket, io } from "socket.io-client";
import { useEffect } from "react";

type EventType = "message" | "response";
function App() {
  const socket: Socket = io("http://localhost:4000");

  useEffect(() => {
    // socket.connect();
    // send some data to server
    socket.emit(
      "message",
      { message: "Hello from client", age: 50 },
      (response: unknown) => {
        console.log("response data is", "Nabin");
      }
    );

    // listen to data from server
    socket.on("response", (data) => {
      console.log("data from server is", data);
    });
  }, []);

  return (
    <div className="container">
      <h6 className="text-center py-2 uppercase text-2xl font-bold">
        The socket io project
      </h6>
    </div>
  );
}

export default App;
