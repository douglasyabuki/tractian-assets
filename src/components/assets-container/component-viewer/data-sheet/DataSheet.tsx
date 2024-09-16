import { Icons } from "@/icons/Icons";
import { IAsset } from "@/interfaces/interfaces";
import { DataField } from "./data-field/DataField";
import { ImageField } from "./image-field/ImageField";

interface DataSheetProps {
  component: IAsset;
}

export const DataSheet = ({ component }: DataSheetProps) => {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="between flex h-auto w-full flex-auto flex-col items-center justify-start gap-6 md:flex-row">
        <ImageField id={component.id} />
        <div className="hidden h-auto w-auto flex-grow flex-col justify-center gap-6 rounded-md md:flex">
          <DataField
            label="Tipo de equipamento"
            value="Motor Elétrico (Trifásico)"
          />
          <DataField
            className="border-t-[1px] border-t-white/20 pt-6"
            label="Responsáveis"
            Icon={
              component.sensorType === "energy" ? (
                <Icons.TEAM_ELECTRICAL />
              ) : (
                <Icons.TEAM_MECHANICHAL />
              )
            }
            value={component.sensorType === "energy" ? "Elétrica" : "Mecânica"}
          />
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-between border-t-[1px] border-t-white/20 px-6 pt-6 md:hidden md:px-0">
        <DataField
          label="Tipo de equipamento"
          value="Motor Elétrico (Trifásico)"
        />
        <DataField
          label="Responsáveis"
          Icon={
            component.sensorType === "energy" ? (
              <Icons.TEAM_ELECTRICAL />
            ) : (
              <Icons.TEAM_MECHANICHAL />
            )
          }
          value={component.sensorType === "energy" ? "Elétrica" : "Mecânica"}
        />
      </div>
      <div className="flex h-auto w-full items-center justify-between border-t-[1px] border-t-white/20 px-6 pt-6 md:grid md:grid-cols-2 md:px-0">
        <DataField
          label="Sensor"
          Icon={<Icons.SENSOR />}
          value={component?.sensorId}
        />
        <DataField
          label="Receptor"
          Icon={<Icons.RECEIVER />}
          value={component?.gatewayId}
        />
      </div>
    </div>
  );
};
