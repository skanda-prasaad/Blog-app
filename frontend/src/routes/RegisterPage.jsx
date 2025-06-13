import { SignUp } from "@clerk/clerk-react";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[calc(100vh-80px)]">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
};

export default RegisterPage;
