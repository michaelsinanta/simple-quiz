"use client";

import Head from "next/head";
import { Button } from "@/components/elements/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserAuth } from "@/components/context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LandingPage() {
  const router = useRouter();
  const { user } = UserAuth();

  useEffect(() => {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
      router.push("/quiz");
    }
  }, [router]);

  const handleStartQuiz = () => {
    if (user) {
      router.push("/quiz");
    } else {
      toast.error("Please log in first!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="container flex flex-col items-center justify-center px-[10vw]">
          <div className="hidden md:block lg:block absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
          <div className="hidden md:block lg:block absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
          <div className="hidden md:block lg:block absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
          <div className="hidden md:block lg:block absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div>
          <h1 className="text-center ">
          Test your knowledge in
          </h1>
          <h1 className=" italic text-primary mb-10">10 minutes</h1>

          <Button
            variant={"primary"}
            size={"md"}
            onClick={() => handleStartQuiz()}
          >
            <h3>Start the Quizyy</h3>
          </Button>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}
