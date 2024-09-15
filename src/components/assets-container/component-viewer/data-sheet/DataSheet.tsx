import { Icons } from '@/icons/Icons';
import { IAsset } from '@/services/company';
import { DataField } from './data-field/DataField';
import { ImageField } from './image-field/ImageField';

interface DataSheetProps {
    component: IAsset
}

export const DataSheet = ({ component }: DataSheetProps) => {

    return (
        <div className="p-6 flex flex-col gap-6">
            <div className="w-full h-auto flex-auto flex justify-start between gap-6">
                <ImageField id={component.id}/>
                <div className='w-auto flex-grow h-auto rounded-md flex-col flex justify-center gap-6'>
                    <DataField label='Tipo de equipamento' value='Motor Elétrico (Trifásico)' />
                    <DataField
                        className='pt-6 border-t-white/20 border-t-[1px]'
                        label='Responsáveis'
                        Icon={component.sensorType === "energy" ? <Icons.TEAM_ELECTRICAL /> : <Icons.TEAM_MECHANICHAL />}
                        value={component.sensorType === "energy" ? "Elétrica" : "Mecânica"} />
                </div>
            </div>
            <div className="w-full h-auto grid grid-cols-2 pt-6 border-t-[1px] border-t-white/20">
                <DataField
                    label='Sensor'
                    Icon={<Icons.SENSOR />}
                    value={component?.sensorId}
                />
                <DataField
                    label='Receptor'
                    Icon={<Icons.RECEIVER />}
                    value={component?.gatewayId}
                />
            </div>
        </div>
    );
}