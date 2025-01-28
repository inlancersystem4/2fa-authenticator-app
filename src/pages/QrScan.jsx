import { useSelector } from "react-redux";

export default function QRScan() {
  const qrCode = useSelector((state) => state.auth.qrCode);

  return (
    <div className="space-y-6 w-full max-w-96 mx-auto">
      <div className="space-y-3">
        <h1 className="text-[28px] font-medium text-center">
          Set up your account on the Inlancer Mobile Application.
        </h1>
        <h4 className="text-center">
          Please scan the QR code below using the Inlancer mobile application for
          easily log in.
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
