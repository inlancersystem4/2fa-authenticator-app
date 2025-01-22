import { Button } from "@headlessui/react";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function ApproveCode() {
  const [isLoginType, setIsLoginType] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    if (type === "login") {
      setIsLoginType(true);
    }
  }, [location.search]);

  return (
    <div className="space-y-14 max-w-96 mx-auto">
      <div className="space-y-5 text-center">
        <h1 className="text-[28px] font-medium text-center">
          Approve your Sign in
        </h1>
        <div className="space-y-2">
          <p>
            Enter the number you see below in your Caprock Mobile App to sign in
          </p>{" "}
          <p className="text-lg text-spanishGray font-medium flex items-center gap-1 justify-center">
            <Mail />
            johnmayer@gmail.com
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <div className="w-fit mx-auto py-2.5 px-9 rounded-xl bg-veryPaleGray">
          <h4 className="font-serif font-semibold text-5xl text-center">83</h4>
        </div>
        <Button
          type="submit"
          className="rounded-full w-full bg-black  text-white flex items-center justify-center text-lg gap-2.5 py-2.5
                          hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Get a New Code
        </Button>
        {isLoginType && (
          <div className="space-y-4 text-center">
            <Link
              to="/"
              className="block text-center underline text-royalBlue font-semibold"
            >
              Try your Authentication Code instead
            </Link>
            <p>- or -</p>
            <Link
              to="/"
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
