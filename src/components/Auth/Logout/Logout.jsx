"use client";

import React from "react";
import { signOut } from "next-auth/react";

function Login() {
  return (
    <div>
      <button onClick={() => signOut()}>Login</button>
    </div>
  );
}

export default Login;
