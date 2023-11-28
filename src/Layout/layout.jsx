import React from "react";

export default function layout({ children }) {
  return (
    <div className="h-screen w-full transition overflow-x-hidden">
      <div className="h-full w-full"></div>
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
