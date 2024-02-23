import "@styles/globals.css";
import Nav from "@components/Nav";
import React from "react";

export const metadata = {
  title: "prompt-ai",
  description: "Discover AI PROMPTS !",
};

const RootLayout = ({ children } : React.PropsWithChildren<{}>) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>
        <main className="app">
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
