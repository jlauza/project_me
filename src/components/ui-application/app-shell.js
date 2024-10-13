"use client";
import * as React from "react";
import AppNavbar from "./app-navbar";
import AppSidebar from "./app-sidebar";

export default function AppShell({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  React.useEffect(() => {
    const sideBarState = localStorage.getItem("sidebarOpen");
    if (sideBarState !== null) {
      setSidebarOpen(JSON.parse(sideBarState));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
  }, []);

  function clickMe() {
    setSidebarOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="min-h-full flex flex-row">
        <AppSidebar open={sidebarOpen} />
        <div className="flex-1">
          <AppNavbar title={title} clickMe={clickMe} />
          <main>
            <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
