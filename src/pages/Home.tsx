import { AssetsContainer } from "@/components/assets-container/AssetsContainer";
import { CompaniesLoader } from "@/components/loaders/companies-loader/CompaniesLoader";
import { CompanyContext } from "@/contexts/CompanyContext";
import { useContext } from "react";

export const HomePage = () => {
  const { selectedCompany } = useContext(CompanyContext);

  return (
    <main className="page-container p-2">
      {selectedCompany ? (
        <AssetsContainer selectedCompany={selectedCompany} />
      ) : (
        <CompaniesLoader />
      )}
    </main>
  );
};
