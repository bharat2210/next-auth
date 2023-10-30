"use client";
import Image from "next/image";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Banner from "./components/banner";

import { getToken } from "next-auth/jwt";

import Features from "./components/features";
import Header from "./components/Header";
import Footer from "./components/footer";
import Build from "./components/build";


export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session", session?.user);

  return (
    <>
      <Header/>
      <Banner/>
      <Features/>
      <Build/>
      <Footer/>
    </>
  );
}
