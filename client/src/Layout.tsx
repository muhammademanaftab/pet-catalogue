import { Outlet } from "react-router";
import { Background } from "./Background";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <Background />
      <Navigation />
      <main className="flex-1 mx-auto px-4 py-8 mt-10 z-10 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}