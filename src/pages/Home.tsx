import { ViewTree } from "@/components/view-tree/ViewTree";
import { CompanyContext } from "@/contexts/CompanyContext";
import { usePromise } from "@/hooks/use-promise";
import {
  Asset,
  fetchCompanyAssets,
  fetchCompanyLocations,
} from "@/services/company";
import { useContext, useEffect } from "react";

export const HomePage = () => {
  const { selectedCompany } = useContext(CompanyContext)

  const {
    data: locations,
    // loading: loadingLocations,
    // error: errorLocations,
    run: fetchLocations,
  } = usePromise<Location[], Error, { companyId: string }>(
    fetchCompanyLocations
  );

  const {
    data: assets,
    // loading: loadingAssets,
    // error: errorAssets,
    run: fetchAssets,
  } = usePromise<Asset[], Error, { companyId: string }>(fetchCompanyAssets);
  useEffect(() => {
    if (selectedCompany) {
      // Fetch locations and assets using their respective hooks when the company is selected
      fetchLocations({
        params: { companyId: selectedCompany.id },
        onError: (err) => console.error("Failed to fetch locations:", err),
      });

      fetchAssets({
        params: { companyId: selectedCompany.id },
        onError: (err) => console.error("Failed to fetch assets:", err),
      });
    }
  }, [selectedCompany, fetchLocations, fetchAssets]);

  return (
    <main className="page-container">
      <ViewTree
        locations={locations}
        assets={assets}
      />
    </main>
  );
};