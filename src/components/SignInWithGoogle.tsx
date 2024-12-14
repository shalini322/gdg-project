"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignInWithGoogle: React.FC = () => {
  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      className="flex items-center justify-center w-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 py-2 px-4 rounded-lg mt-10 bg-white dark:bg-gray-700 text-black dark:text-white transition-colors duration-300"
    >
      <Image
        height={100}
        width={100}
        src="/svg/google.svg"
        alt="Google"
        className="h-5 w-5 mr-2 bg-white dark:bg-transparent"
      />
      Sign in with Google
    </button>
  );
};

export default SignInWithGoogle;