import { Navbar } from "@/components/navbar/Navbar";
import { CompanyProvider } from "@/contexts/CompanyContext";
import { FilterProvider } from "@/contexts/FilterContext";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <CompanyProvider>
      <FilterProvider>
        <section className="layout">
          <Navbar />
          <Outlet />
        </section>
      </FilterProvider>
    </CompanyProvider>
  );
};
