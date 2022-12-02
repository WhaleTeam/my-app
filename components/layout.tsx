import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Head>
        <title>Contacts App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}