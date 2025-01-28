import { useSelector } from "react-redux";
import { useSocket } from "../context/SocketProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCode } from "../redux/actions/actions";

export default function QRScan() {
  const dispatch = useDispatch();
  const { socket } = useSocket();
  const navigate = useNavigate();
  const qrCode = useSelector((state) => state.auth.qrCode);

  useEffect(() => {
    if (socket) {
      socket.on("qr_verification", (data) => {
        if (data.success == 1) {
          navigate("/auth/approve-code");
          dispatch(setCode(data.two_digit_code));
        }
      });

      return () => {
        socket.off("qr_verification");
      };
    }
  }, [socket, dispatch , navigate]);

  return (
    <div className="space-y-6 w-full max-w-96 mx-auto">
      <div className="space-y-3">
        <h1 className="text-[28px] font-medium text-center">
          Set up your account on the Inlancer Mobile Application.
        </h1>
        <h4 className="text-center">
          Please scan the QR code below using the Inlancer mobile application
          for easily log in.
        </h4>
      </div>
      <img
        src={`data:image/png;base64,${qrCode}`}
        alt="QR Code"
        className="max-w-full h-auto"
      />
    </div>
  );
}
