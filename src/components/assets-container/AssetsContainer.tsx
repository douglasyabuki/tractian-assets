import { CompanyContext } from "@/contexts/CompanyContext";
import { FilterContext } from "@/contexts/FilterContext";
import { useRequest } from "@/hooks/use-request";
import { Icons } from "@/icons/Icons";
import { IAsset, ICompany, ILocation } from "@/interfaces/interfaces";
import { useContext, useEffect } from "react";
import { ToggleButton } from "../ui/buttons/toggle-button/ToggleButton";
import { ComponentViewer } from "./component-viewer/ComponentViewer";
import { SearchableViewTree } from "./searchable-view-tree/SearchableViewTree";

type AssetsContainer = {
  selectedCompany: ICompany;
};

export const AssetsContainer = ({ selectedCompany }: AssetsContainer) => {
  const { filters, toggleFilter } = useContext(FilterContext);

  const { selectedComponent } = useContext(CompanyContext);
  const { data: locations, sendRequest: getLocations } = useRequest<
    ILocation[],
    Error
  >();
  const { data: assets, sendRequest: getAssets } = useRequest<
    IAsset[],
    Error
  >();

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
          console.log("Assets fetched:", assets);
        },
        onError: (err) => {
          console.error("Error fetching assets:", err);
        },
      });
    }
  }, [selectedCompany, getLocations, getAssets]);

  return (
    <div className="box-border flex h-auto min-h-full w-auto min-w-full max-w-full flex-1 flex-col gap-[0.625rem] bg-slate-800 px-4 py-[1.125rem]">
      <div className="flex h-fit w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold leading-7 md:text-xl">Ativos</h2>
          <p className="text-xs leading-5 md:text-sm">{`/ ${selectedCompany?.name} Unit`}</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <ToggleButton
            onClick={() => toggleFilter("sensorEnergy")}
            isToggled={!!filters.sensorEnergy}
            className="rounded-full p-0 max-md:size-8"
          >
            <Icons.ENERGY className="" />
            <p className="hidden md:flex">Energy sensor</p>
          </ToggleButton>
          <ToggleButton
            onClick={() => toggleFilter("statusAlert")}
            isToggled={!!filters.statusAlert}
            className="rounded-full p-0 max-md:size-8"
          >
            <Icons.WARNING />
            <p className="hidden md:flex">Critical</p>
          </ToggleButton>
        </div>
      </div>
      <div className="flex h-[100%] w-full flex-col gap-2 md:grid md:grid-cols-[30rem_auto]">
        <SearchableViewTree
          assets={assets || []}
          locations={locations || []}
          filters={filters}
        />
        <div className="hidden w-auto md:flex md:flex-auto">
          <ComponentViewer component={selectedComponent} />
        </div>
      </div>
    </div>
  );
};
