import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@headlessui/react";
import { useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function AuthenticationCode() {
  const email = useSelector((state) => state.user.email);
  const { handleSubmit } = useForm();
  const [otp, setOtp] = useState("");

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12 max-w-96 mx-auto"
    >
      <div className="space-y-8">
        <h1 className="text-[28px] font-medium text-center">
          Log in to Caprock
        </h1>
        <div className="space-y-2">
          <p className="text-center">
            Enter the number displayed on the homepage of your Caprock mobile
            app in the authentication section.
          </p>
          <p className="text-lg text-spanishGray font-medium flex items-center gap-1 justify-center">
            <Mail />
            {email}
          </p>
        </div>
      </div>
      <div className="space-y-16 block">
        <OtpInput
          value={otp}
          onChange={setOtp}
          containerStyle="gap-2 justify-center"
          numInputs={6}
          inputStyle="font-serif text-xl min-w-14 min-h-14 max-w-14 max-h-14 border border-black rounded-xl"
          renderInput={(props) => <input {...props} />}
        />
        <div className="space-y-3">
          <Link
            to="/auth/recovery-code"
            className="block w-full text-end text-base text-spanishGray underline focus:underline"
          >
            Use your Recovery Code
          </Link>
          <Button
            type="submit"
            className="rounded-full w-full bg-black  text-white flex items-center justify-center text-lg gap-2.5 py-2.5
                  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
