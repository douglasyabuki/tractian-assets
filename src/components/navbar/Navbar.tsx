import { CompanyContext } from "@/contexts/CompanyContext";
import { Icons } from "@/icons/Icons";
import { useContext } from "react";
import { ToggleButton } from "../ui/buttons/toggle-button/ToggleButton";

export const Navbar = () => {
  const { companies, selectedCompany, onCompanySelect } =
    useContext(CompanyContext);

  return (
    <div className="box-border flex h-14 w-screen items-center justify-between bg-slate-800 px-4 py-3 text-sm sm:px-6 md:px-8">
      <Icons.LOGO />
      <div className="flex w-fit justify-end gap-2 md:gap-4">
        {companies?.length > 0 &&
          companies
            .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1))
            .map((company) => (
              <ToggleButton
                id={company.id}
                key={company.id}
                size="small"
                className="shrink min-w-14 w-auto"
                isToggled={selectedCompany?.id === company.id}
                onClick={() => onCompanySelect(company)}
              >
                <Icons.UNIT className="hidden md:flex"/>
                {company.name} 
                <p className="hidden md:flex">{"Unit"}</p>
              </ToggleButton>
            ))}
      </div>
    </div>
  );
};
