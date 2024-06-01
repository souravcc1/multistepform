import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link href="/dashboard">Go to dashboard</Link>
    </>
  );
}
