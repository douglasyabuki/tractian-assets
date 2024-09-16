import { ComponentViewer } from "@/components/assets-container/component-viewer/ComponentViewer";
import { Portal } from "@/components/ui/portal/Portal";
import { StatusDisplayer } from "@/components/ui/status-displayer/StatusDisplayer";
import { CompanyContext } from "@/contexts/CompanyContext";
import { Icons } from "@/icons/Icons";
import { IAsset } from "@/interfaces/interfaces";
import { useContext } from "react";

export const Component = ({ ...props }: IAsset) => {
  const { name, sensorType, status } = props;
  const { onComponentSelect, selectedComponent, onComponentClear } =
    useContext(CompanyContext);

  return (
    <>
      <button
        className="hidden w-auto cursor-pointer items-center justify-between gap-2 pl-3 text-sm uppercase md:flex"
        onClick={() => onComponentSelect(props)}
      >
        <div className="flex w-full items-center justify-start gap-2">
          <Icons.COMPONENT className="text-white" />
          {name}
        </div>
        <StatusDisplayer sensorType={sensorType} size="small" status={status} />
      </button>
      <button
        className="flex w-auto cursor-pointer items-center justify-between gap-2 pl-3 text-sm uppercase md:hidden"
        onClick={() => {
          onComponentSelect(props);
        }}
      >
        <div className="flex w-full items-center justify-start gap-2">
          <Icons.COMPONENT className="text-white" />
          {name}
        </div>
        <StatusDisplayer sensorType={sensorType} size="small" status={status} />
      </button>
      <Portal
        isToggled={selectedComponent !== null}
        onClose={onComponentClear}
        className="md:hidden"
        backdrop
      >
        <div
          className="flex w-full items-center justify-center px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <ComponentViewer component={selectedComponent} />
        </div>
      </Portal>
    </>
  );
};
