import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@headlessui/react";
import { useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { useForm } from "react-hook-form";
import { post } from "../utils/axiosWrapper";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export default function RecoveryCode() {
  const email = useSelector((state) => state.user.email);
  const { handleSubmit } = useForm();
  const [otp, setOtp] = useState("");

  const recoveryCodeFn = async () => {
    const formData = new FormData();
    formData.append("user_email", otp);

    try {
      const response = await post("", formData);

      if (response.success == 1) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const mutation = useMutation({
    mutationFn: (formData) => {
      recoveryCodeFn(formData);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12 max-w-96 mx-auto"
    >
      <div className="space-y-8">
        <h1 className="text-[28px] font-medium text-center">
          Log in to Inlancer
        </h1>
        <div className="space-y-2">
          <p className="text-center">
            Enter a recovery code to access your account. Recovery codes are
            used when your phone is unavailable, and each code can only be used
            once.
          </p>
          <p className="text-lg text-spanishGray font-medium flex items-center gap-1 justify-center">
            <Mail />
            {email}
          </p>
        </div>
      </div>
      <div className="space-y-24 block">
        <OtpInput
          value={otp}
          onChange={setOtp}
          containerStyle="gap-2 justify-center"
          numInputs={6}
          inputStyle="font-serif text-xl min-w-14 min-h-14 max-w-14 max-h-14 border border-black rounded-xl"
          renderInput={(props) => <input {...props} />}
        />
        <Button
          type="submit"
          disabled={mutation.isPending}
          className="rounded-full w-full bg-black  text-white flex items-center justify-center text-lg gap-2.5 py-2.5
                  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
