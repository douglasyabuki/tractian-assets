import { Navbar } from "@/components/navbar/Navbar";
import { CompanyProvider } from "@/contexts/CompanyContext";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {

  return (
    <CompanyProvider>
      <section className="layout">
        <Navbar />
        <Outlet />
      </section>
    </CompanyProvider>
  );
};