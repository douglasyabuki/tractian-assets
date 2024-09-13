import { Icons } from '@/icons/Icons';
import { twMerge } from 'tailwind-merge';

interface ComponentProps {
    gatewayId: string;
    id: string;
    locationId: string;
    name: string;
    parentId: string | null;
    sensorId: string;
    sensorType: "energy" | "vibration" | "temperature";
    status: "operating" | "alert" | "offline";
}

export const Component = ({gatewayId, id, locationId, name, parentId, sensorId, sensorType, status}: ComponentProps) => {
  return (
    <div className='flex gap-2 items-center justify-between w-full px-4'>
      <div className='flex gap-2'>
      <Icons.COMPONENT className='text-white'/>
      {name}
      </div>
      {gatewayId}
      {sensorType === "energy" && <Icons.ENERGY />}
      {<span className={twMerge("rounded-full size-2", status === "alert" && "bg-red-600", status === "operating" && "bg-green-600", status === "offline" && "bg-gray-600" )}/>}
    </div>
  );
}