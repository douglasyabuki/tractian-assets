import { Icons } from "@/icons/Icons";
import { IAsset } from "@/interfaces/interfaces";
import { DataSheet } from "./data-sheet/DataSheet";
import { ViewerHeader } from "./viewer-header/ViewerHeader";

interface ComponentViewerProps {
  component: IAsset | null;
}

export const ComponentViewer = ({ component }: ComponentViewerProps) => {
  return (
    <div className="flex w-auto flex-auto flex-col border-[1.5px] border-slate-600 bg-slate-800/90 text-slate-200">
      {component ? (
        <>
          <ViewerHeader
            name={component.name}
            status={component.status}
            sensorType={component.sensorType}
          />
          <DataSheet component={component} />
        </>
      ) : (
        <>
          <div className="mx-auto my-auto flex flex-col items-center justify-center gap-8 opacity-75 text-center">
            <h2 className="text-xl">No component selected</h2>
            <Icons.COMPONENT className="size-20" />
          </div>
        </>
      )}
    </div>
  );
};
