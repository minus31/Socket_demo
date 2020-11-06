/* socket\app.js */
const app = require("express")();
//Create Server
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// See 3000 Port
server.listen(3000, () => {
    console.log("Connected at 3000");
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

// When user connect to the Socket.
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
  console.log("user disconnected");
  });
});