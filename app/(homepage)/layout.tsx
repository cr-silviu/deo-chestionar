import React, { ReactNode } from "react";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-red max-h-screen">
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
};

export default layout;
