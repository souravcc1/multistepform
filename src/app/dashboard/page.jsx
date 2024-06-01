"use client"
import Link from "next/link";
import React, { useContext } from "react";
import FormContext from "./context";

export default function page() {

  const { formValues, updateFormValues } = useContext(FormContext);

  console.log("Form values: ",formValues);
  return (
    <>
      <h1>Welcome to multi-step form</h1>
      <Link className="underline" href="/dashboard">
        steptone
      </Link> <br />
      <Link className="underline" href="/dashboard/steptwo">
        steptwo
      </Link> <br />

      <Link className="underline" href="/dashboard/stepthree">
        stepthree
      </Link>
    </>
  );
}
