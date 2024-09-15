import { useRequest } from "@/hooks/use-request";
import { IAsset, ICompany } from "@/interfaces/interfaces";
import React, { createContext, useEffect, useState } from "react";

interface CompanyContextProps {
  companies: ICompany[];
  onCompanySelect: (company: ICompany) => void;
  onComponentSelect: (component: IAsset) => void;
  selectedCompany: ICompany | null;
  selectedComponent: IAsset | null;
}

export const CompanyContext = createContext<CompanyContextProps>({
  companies: [],
  onCompanySelect: () => { },
  onComponentSelect: () => { },
  selectedCompany: null,
  selectedComponent: null,
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

  const onCompanySelect = (company: ICompany) => {
    setSelectedComponent(null);
    setSelectedCompany(company);
  };

  const onComponentSelect = (component: IAsset) => {
    setSelectedComponent(component);
  };

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

  return (
    <CompanyContext.Provider
      value={{
        selectedCompany,
        companies: companies ? companies : [],
        onCompanySelect,
        selectedComponent,
        onComponentSelect,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
