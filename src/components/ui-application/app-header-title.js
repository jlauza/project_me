import React from "react";

export default function AppHeader({ title }) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
    </>
  );
}
