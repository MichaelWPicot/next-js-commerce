

import React, { useState } from "react";

import { useRouter } from 'next/router';

import { signIn, useSession, signOut } from 'next-auth/react';
import SignInButton from "@/components/signInButton";
import SignInPage from "@/components/signInPage";
import Orders from "@/components/Orders";

const LoginPage = () => {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen relative w-screen flex-col">
      
      <div className="dark-mode-shaded min-h-screen items-center flex-col">
      
      
      {status === "authenticated" ? ( <div className="dark-mode-shaded content-center">
        <Orders/>
      </div>): (
        <SignInPage/>
     )}
      </div>
    </div>
  );
};

export default LoginPage;

