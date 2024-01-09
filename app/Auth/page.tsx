"use client"
import LoginForm from "../components/LoginForm/LoginForm";


// import { authOptions } from "./api/auth/[...nextauth]/route";
import React from 'react'

const Login = () => {
    // const [state, formAction] = useFormState(authenticate, undefined);

      return (
        <div>
          <LoginForm></LoginForm>
        </div>
      );
};

export default Login