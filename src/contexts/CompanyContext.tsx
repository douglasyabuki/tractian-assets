import { useRequest } from "@/hooks/use-request";
import { Company } from "@/services/company";
import React, { createContext, useEffect, useState } from "react";

interface CompanyContextProps {
  selectedCompany: Company | null;
  companies: Company[];
  onCompanySelect: (company: Company) => void;
}

export const CompanyContext = createContext<CompanyContextProps | undefined>(undefined);

export const CompanyProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const { data: companies, sendRequest: getCompanies } = useRequest<Company[], Error>();

  const onCompanySelect = (company: Company) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    getCompanies(`/api/companies`, {
      method: "GET",
      onSuccess: (companies) => {
        if (companies?.length > 0) {
          setSelectedCompany(companies[0])
        }
      },
      onError: (err) => {
        console.error("Error fetching locations:", err);
      },
    });
  }, [getCompanies]);

  return (
    <CompanyContext.Provider
      value={{ selectedCompany, companies, onCompanySelect }}>
      {children}
    </CompanyContext.Provider>
  );
};
