import React from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";
import { useSignup } from "../hooks/useSignup";
import { useEffect } from "react";
import FormInput from "../components/FormInput";

// context

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let image = formData.get("image");
  let password = formData.get("password");

  return { name, email, image, password };
};

function Signup() {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSignup();

  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      registerWithEmailAndPassword(actionData);
    }
  }, [actionData]);

  return (
    <div className="min-h-screen flex items-center justify-center gap-16">
      <div className="w-96 shadow-md hover:shadow-2xl px-7 pb-4 rounded-md">
        <div className="mb-3 ">
          <Form method="POST" className="w-full">
            <h1 className="text-4xl text-center font-medium mb-3">SignUp</h1>
            <FormInput label="Display Name" type="text" name="displayName" />
            <FormInput label="Email" type="email" name="email" />
            <FormInput label="Image" type="url" name="image" />
            <FormInput
              className="mb-4"
              label="Password"
              type="password"
              name="password"
            />
            <button
              onClick={registerWithEmailAndPassword}
              type="submit"
              className="btn btn-primary w-full mt-3 "
            >
              Submit
            </button>
          </Form>
        </div>
        <div>
          <button
            onClick={signUpWithGoogle}
            type="button"
            className="btn btn-secondary w-full"
          >
            <span
              className="flex items-center gap-1
"
            >
              <GrGoogle className="w-5 h-5 " />
              <span className="">Signup</span>
            </span>
          </button>
          <p className="mt-4 text-center">
            Already registered ?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
