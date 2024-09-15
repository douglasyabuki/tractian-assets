import { CompanyContext } from "@/contexts/CompanyContext";
import { useRequest } from "@/hooks/use-request";
import { Icons } from "@/icons/Icons";
import {
  FilterOptionsType,
  IAsset,
  ICompany,
  ILocation,
} from "@/interfaces/interfaces";
import { useContext, useEffect, useState } from "react";
import { ToggleButton } from "../ui/buttons/toggle-button/ToggleButton";
import { ComponentViewer } from "./component-viewer/ComponentViewer";
import { SearchableViewTree } from "./searchable-view-tree/SearchableViewTree";

type AssetsContainer = {
  selectedCompany: ICompany;
};

export const AssetsContainer = ({ selectedCompany }: AssetsContainer) => {
  const [filters, setFilters] = useState<FilterOptionsType>({
    sensorEnergy: false,
    statusAlert: false,
  });
  const { selectedComponent, onComponentSelect } = useContext(CompanyContext);
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
    <div className="box-border flex h-auto min-h-full w-auto min-w-full flex-1 flex-col gap-[0.625rem] bg-slate-800 px-4 py-[1.125rem]">
      <div className="flex h-fit w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold leading-7">Ativos</h2>
          <p className="text-sm leading-5">{`/ ${selectedCompany?.name} Unit`}</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <ToggleButton
            onClick={() => {
              setFilters((prev) => ({
                sensorEnergy: !prev.sensorEnergy,
                statusAlert: false,
              }));
            }}
            isToggled={!!filters.sensorEnergy}
          >
            <Icons.ENERGY />
            Energy sensor
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              setFilters((prev) => ({
                sensorEnergy: false,
                statusAlert: !prev.statusAlert,
              }));
            }}
            isToggled={!!filters.statusAlert}
          >
            <Icons.WARNING />
            Critical
          </ToggleButton>
        </div>
      </div>
      <div className="grid h-[100%] w-full grid-cols-[30rem_auto] gap-2">
        <SearchableViewTree
          assets={assets}
          locations={locations}
          onComponentSelect={onComponentSelect}
          filters={filters}
        />
        <ComponentViewer component={selectedComponent} />
      </div>
    </div>
  );
};
