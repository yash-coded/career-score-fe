"use client";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import UploadForm from "./components/upload/UploadForm";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
