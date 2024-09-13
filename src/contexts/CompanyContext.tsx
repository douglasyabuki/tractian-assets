import { useOnMount } from "@/hooks/use-on-mount";
import { usePromise } from "@/hooks/use-promise";
import { Company, fetchCompanies } from "@/services/company";
import React, { createContext, useEffect, useMemo, useRef, useState } from "react";

interface CompanyContextProps {
  selectedCompany: Company | null;
  companies: Company[];
  onCompanySelect: (company: Company) => void;
}

export const CompanyContext = createContext<CompanyContextProps | undefined>(undefined);

export const CompanyProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const { data, run } = usePromise<Company[], Error>(fetchCompanies);
  const isMountedRef = useRef<boolean>(false);

  const onCompanySelect = (company: Company) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useOnMount(() => run({ onSuccess: (res) => setSelectedCompany(res?.[0]) }));

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedCompany(data[0]);
    }
  }, [data]);

  const companies = useMemo(() => {
    return data ? data : [];
  }, [data]);

  return (
    <CompanyContext.Provider
      value={{ selectedCompany, companies, onCompanySelect }}>
      {children}
    </CompanyContext.Provider>
  );
};
