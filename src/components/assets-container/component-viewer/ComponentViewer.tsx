import { Icons } from "@/icons/Icons";
import { IAsset } from "@/services/company";
import { DataSheet } from "./data-sheet/DataSheet";
import { ViewerHeader } from "./viewer-header/ViewerHeader";

interface ComponentViewerProps {
    component: IAsset
}

export const ComponentViewer = ({ component }: ComponentViewerProps) => {
    return (
        <div className="flex bg-slate-800/90 border-slate-600 border-[1.5px] text-slate-200 flex-col w-auto flex-auto">
            {
                component ? (
                    <>
                        <ViewerHeader name={component.name} status={component.status} sensorType={component.sensorType} />
                        <DataSheet component={component} />
                    </>
                ) : (<>
                    <div className="flex flex-col items-center justify-center gap-4 p-4">
                        <h2 className="text-xl">No component selected</h2>
                        <Icons.COMPONENT className="size-20" />
                    </div>
                </>)
            }
        </div>
    );
}