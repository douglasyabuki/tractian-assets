import { ViewTree } from "@/components/view-tree/ViewTree";
import { CompanyContext } from "@/contexts/CompanyContext";
import { useRequest } from "@/hooks/use-request";
import {
  Asset
} from "@/services/company";
import { useContext, useEffect } from "react";

export const HomePage = () => {
  const { selectedCompany } = useContext(CompanyContext)

  const { data: locations, sendRequest: getLocations } = useRequest<Location[], Error>();
  const { data: assets, sendRequest: getAssets } = useRequest<Asset[], Error>();

  useEffect(() => {
    if (selectedCompany?.id) {
      getLocations(`/api/companies/${selectedCompany.id}/locations`, {
        method: "GET",
        onSuccess: (locations) => {
          console.log("Locations fetched:", locations);
        },
        onError: (err) => {
          console.error("Error fetching locations:", err);
        },
      });
      getAssets(`/api/companies/${selectedCompany.id}/assets`, {
        method: "GET",
        onSuccess: (assets) => {
          console.log("Locations fetched:", assets);
        },
        onError: (err) => {
          console.error("Error fetching assets:", err);
        },
      });
    }
  }, [selectedCompany, getLocations, getAssets]);


  return (
    <main className="page-container">
      <ViewTree
        locations={locations}
        assets={assets}
      />
    </main>
  );
};