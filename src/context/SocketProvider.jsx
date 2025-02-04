import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setSocketID } from "../redux/actions/actions";
import PropTypes from "prop-types";

const SocketContext = createContext(null);

export default function SocketProvider({ children }) {
  const userID = useSelector((state) => state.user.userID);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketURL = "http://192.168.87.94:8040";

    const socketInstance = io(socketURL, {
      query: { user_id: userID },
      autoConnect: false,
      transports: ["websocket", "polling"],
    });

    socketInstance.connect();

    socketInstance.on("connect", () => {
      dispatch(setSocketID(socketInstance.id));
      setIsConnected(true);
    });

    socketInstance.on("disconnect", () => {
      dispatch(setSocketID(null));
      setIsConnected(false);
    });

    socketInstance.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    socketInstance.on("reconnect_attempt", () => {
      console.log("Attempting to reconnect...");
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.off("connect");
      socketInstance.off("disconnect");
      socketInstance.off("connect_error");
      socketInstance.off("reconnect_attempt");
      socketInstance.disconnect();
    };
  }, [dispatch, userID]);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => {
  return useContext(SocketContext);
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
