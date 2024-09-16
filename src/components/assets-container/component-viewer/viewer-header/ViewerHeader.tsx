import { StatusDisplayer } from "@/components/ui/status-displayer/StatusDisplayer";
import { SensorType, StatusType } from "@/interfaces/interfaces";

interface ViewerHeaderProps {
  name: string;
  status?: StatusType;
  sensorType?: SensorType;
}

export const ViewerHeader = ({
  name,
  status,
  sensorType,
}: ViewerHeaderProps) => {
  return (
    <div className="flex items-center justify-center gap-2 px-4 py-3 md:justify-start">
      <h3 className="font-semibold uppercase text-gray-200">{name}</h3>
      <StatusDisplayer status={status} sensorType={sensorType} />
    </div>
  );
};
