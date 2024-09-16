import { useRequest } from "@/hooks/use-request";
import { IAsset, ICompany } from "@/interfaces/interfaces";
import React, { createContext, useEffect, useState } from "react";

interface CompanyContextProps {
  companies: ICompany[];
  onCompanySelect: (company: ICompany) => void;
  onComponentSelect: (component: IAsset) => void;
  selectedCompany: ICompany | null;
  selectedComponent: IAsset | null;
  onComponentClear: () => void;
}

export const CompanyContext = createContext<CompanyContextProps>({
  companies: [],
  onCompanySelect: () => {},
  onComponentSelect: () => {},
  selectedCompany: null,
  selectedComponent: null,
  onComponentClear: () => {},
});

export const CompanyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCompany, setSelectedCompany] = useState<ICompany | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<IAsset | null>(
    null,
  );

  const { data: companies = [], sendRequest: getCompanies } = useRequest<
    ICompany[],
    Error
  >();

  useEffect(() => {
    getCompanies(`/api/companies`, {
      method: "GET",
      onSuccess: (companies) => {
        if (companies?.length > 0) {
          setSelectedCompany(companies[0]);
        }
      },
      onError: (err) => {
        console.error("Error fetching locations:", err);
      },
    });
  }, [getCompanies]);

  const onCompanySelect = (company: ICompany) => {
    setSelectedComponent(null);
    setSelectedCompany(company);
  };

  const onComponentSelect = (component: IAsset) => {
    setSelectedComponent(component);
  };

  const onComponentClear = () => {
    setSelectedComponent(null);
  };

  return (
    <CompanyContext.Provider
      value={{
        selectedCompany,
        companies: companies ? companies : [],
        onCompanySelect,
        selectedComponent,
        onComponentSelect,
        onComponentClear,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
