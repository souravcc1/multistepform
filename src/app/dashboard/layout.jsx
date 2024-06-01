import React from "react";
import "../globals.css";
import { FormProvider } from "./context";


export default function RootLayout({ children, stepone }) {
  return (
    <div>
      <FormProvider>
        {children}
        {stepone}
      </FormProvider>
    </div>
  );
}
