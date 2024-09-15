import { StatusDisplayer } from "@/components/ui/status-displayer/StatusDisplayer";
import { CompanyContext } from "@/contexts/CompanyContext";
import { Icons } from "@/icons/Icons";
import { IAsset } from "@/interfaces/interfaces";
import { useContext } from "react";

export const Component = ({ ...props }: IAsset) => {
  const { name, sensorType, status } = props;
  const { onComponentSelect } = useContext(CompanyContext);

  return (
    <button
      className="flex w-auto items-center justify-between gap-2 pl-3 text-sm uppercase cursor-pointer"
      onClick={() => onComponentSelect(props)}
    >
      <div className="flex w-full items-center justify-start gap-2">
        <Icons.COMPONENT className="text-white" />
        {name}
      </div>
      <StatusDisplayer sensorType={sensorType} size="small" status={status} />
    </button>
  );
};
