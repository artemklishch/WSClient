const { io } = require("socket.io-client");
const socket = io(process.env.REACT_APP_BASEURL, {
  transports: ["websocket", "polling", "flashsocket"],
});
export default socket;
