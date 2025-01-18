import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Button,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import { CircleUserRound, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isPassword, setIsPassword] = useState(true);

  const onSubmit = (data) => console.log(data);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset className="w-full max-w-96 space-y-8 mx-auto">
        <Legend className="text-3xl text-black font-medium text-center">
          Log in to Caprock
        </Legend>
        <div className="space-y-5">
          <div className="space-y-3">
            <Field className="space-y-1.5">
              <Label className="text-charcoalGray block text-lg">Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className={` ${
                  errors.email ? "border-errorRed" : "border-silverGray"
                } border  w-full placeholder:text-gainsboro rounded-xl py-2 text-xl text-black px-4`}
                placeholder="name@email.com"
              />
              {errors.email && (
                <p className="text-errorRed text-sm">{errors.email.message}</p>
              )}
            </Field>
            <Field className="space-y-1.5">
              <Label className="text-charcoalGray block text-lg">
                Password
              </Label>
              <div className="relative">
                <Input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Password must be at least 4 characters",
                    },
                  })}
                  type={isPassword ? "password" : "text"}
                  className={`border ${
                    errors.password ? "border-errorRed" : "border-silverGray"
                  } w-full pr-9 placeholder:text-gainsboro rounded-xl py-2 text-xl text-black px-4`}
                  placeholder="Type password"
                />
                <Button
                  onClick={() => setIsPassword((prevState) => !prevState)}
                  className="absolute inset-y-0 text-silverGray right-2 h-full"
                >
                  {isPassword ? <Eye /> : <EyeOff />}
                </Button>
              </div>
              {errors.password && (
                <p className="text-errorRed text-sm">
                  {errors.password.message}
                </p>
              )}
              <Link
                to="/"
                className="block w-full text-end text-base text-spanishGray hover:underline focus:underline"
              >
                Forgot Password?
              </Link>
            </Field>
          </div>
          <Button
            type="submit"
            className="rounded-full w-full bg-black text-white flex items-center justify-center text-lg gap-2.5 py-2.5
                  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <CircleUserRound className="w-5 h-5" />
            Log in
          </Button>
        </div>
        <hr />
        <div className="space-y-3.5">
          <p className="text-lg text-center text-charcoal font-serif">
            Don’t have an account?
          </p>
          <Link
            to="/"
            className="rounded-full w-full text-black border border-black bg-transparent flex items-center justify-center text-lg gap-2.5 py-2.5
                   focus:outline-none hover:bg-lightBackground focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            <CircleUserRound className="w-5 h-5" />
            Sign up
          </Link>
        </div>
      </Fieldset>
    </form>
  );
}
