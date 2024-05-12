"use client";

import Head from "next/head";
import { Button } from "@/components/elements/Button";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/components/contexts/QuizContext";
import { useEffect } from "react";

export default function LandingPage() {
  const { isInQuiz, setIsInQuiz } = useQuiz();
  const router = useRouter();

  useEffect(() => {
    console.log(isInQuiz);
    if (isInQuiz) {
      router.push("/quiz");
    }
  }, [isInQuiz, router]);

  const startQuiz = () => {
    setIsInQuiz(true);
    router.push("/quiz");
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
          <div className=" absolute -left-32 -top-48 z-0 h-[80vh] w-[80vh] rounded-full bg-[#5056ED]/[.42]"></div>
          <div className=" absolute -left-40 top-64 z-0 h-[50vh] w-[50vh] rounded-full bg-[#111692]/[.42]"></div>
          <div className=" absolute -right-48 bottom-12 z-0 h-[40vh] w-[40vh] rounded-full bg-[#111692]/[.42]"></div>
          <div className=" absolute -bottom-56 -right-24 z-0 h-[64vh] w-[64vh] rounded-full bg-[#946CE8]/[.62]"></div>
          <h1 className="text-center mb-10">
            Tingkatkan pengetahuanmu dalam waktu{" "}
            <span className=" italic text-primary">10 menit</span>.
          </h1>
          <Button variant={"primary"} size={"md"} onClick={() => startQuiz()}>
            <h3>Mulai Kuis</h3>
          </Button>
        </div>
      </main>
    </>
  );
}
