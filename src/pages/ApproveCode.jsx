import { Button } from "@headlessui/react";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { post } from "../utils/axiosWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setCode } from "../redux/actions/actions";
import { useSocket } from "../context/SocketProvider";
import { toast } from "sonner";

export default function ApproveCode() {
  const dispatch = useDispatch();
  const { socket } = useSocket();
  const navigate = useNavigate();
  const code = useSelector((state) => state.auth.verified_code);
  const email = useSelector((state) => state.user.email);
  const userID = useSelector((state) => state.user.userID);
  const fcmToken = useSelector((state) => state.auth.fcm);
  const [isLoginType, setIsLoginType] = useState(false);

  const location = useLocation();

  const signInFn = async () => {
    const formData = new FormData();
    formData.append("user_id", userID);
    formData.append("user_fcm_token", fcmToken);

    try {
      const response = await post("resend-two-digit-code", formData);

      if (response.success == 1) {
        return response.data;
      } else {
        toast.error(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const mutation = useMutation({
    mutationFn: signInFn,
    onSuccess: (data) => {
      dispatch(setCode(data.two_digit_code));
    },
    onError: (e) => {
      toast.error(e);
    },
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    if (type === "login") {
      setIsLoginType(true);
    }
  }, [location.search]);

  useEffect(() => {
    if (socket) {
      socket.on("code_verify", (data) => {
        if (data.success == 1) {
          navigate("/dashboard");
        } else {
          mutation.mutate();
          toast.error(data.message);
        }
      });
      return () => {
        socket.off("code_verify");
      };
    }
  }, [socket, navigate, mutation]);

  return (
    <div className="space-y-14 max-w-96 mx-auto">
      <div className="space-y-5 text-center">
        <h1 className="text-[28px] font-medium text-center">
          Approve your Sign in
        </h1>
        <div className="space-y-2">
          <p>
            Enter the number you see below in your Inlancer Mobile App to sign
            in
          </p>{" "}
          <p className="text-lg text-spanishGray font-medium flex items-center gap-1 justify-center">
            <Mail />
            {email}
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <div className="w-fit mx-auto py-2.5 px-9 rounded-xl bg-veryPaleGray">
          <h4 className="font-serif font-semibold text-5xl text-center">
            {code}
          </h4>
        </div>
        <Button
          type="button"
          onClick={() => mutation.mutate()}
          disabled={mutation.isPending}
          className={`rounded-full w-full bg-black text-white flex items-center justify-center text-lg gap-2.5 py-2.5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
            mutation.isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {mutation.isPending ? "Loading..." : "Get a New Code"}
        </Button>
        {isLoginType && (
          <div className="space-y-4 text-center">
            <Link
              to="/auth/authentication-code"
              className="block text-center underline text-royalBlue font-semibold"
            >
              Try your Authentication Code instead
            </Link>
            <p>- or -</p>
            <Link
              to="/auth/recovery-code"
              className="block text-coolGray underline font-semibold text-center"
            >
              Use your Recovery Code
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
