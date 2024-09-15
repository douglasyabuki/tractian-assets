import { StatusDisplayer } from "@/components/ui/status-displayer/StatusDisplayer";
import { SensorType, Status } from "@/services/company";

interface ViewerHeaderProps {
  name: string;
  status: Status;
  sensorType: SensorType;
}

export const ViewerHeader = ({
  name,
  status,
  sensorType,
}: ViewerHeaderProps) => {
  return (
    <div className="flex items-center justify-start gap-2 px-4 py-3">
      <h3 className="font-semibold uppercase text-gray-200">{name}</h3>
      <StatusDisplayer status={status} sensorType={sensorType} />
    </div>
  );
};
