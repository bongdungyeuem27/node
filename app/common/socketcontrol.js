module.exports = function (io) {
  io.sockets.on("connection", (socket) => {
    console.log("co 1 user moi da ket noi");
  });
};
