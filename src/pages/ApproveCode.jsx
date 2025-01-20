import { Button } from "@headlessui/react";
import { Mail } from "lucide-react";

export default function ApproveCode() {
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
      </div>
    </div>
  );
}
