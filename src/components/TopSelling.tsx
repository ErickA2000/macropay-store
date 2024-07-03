import { Device } from "../interfaces/device.interface";
import CardPRoduct from "./atoms/CardProduct";
import '../styles/topSelling.css';

interface Props {
    devices: Device[];
}

function TopSelling({ devices }: Props) {
    return (
        <div className="top-selling">
            {
                devices.map((device: Device, index: number) => {
                    if(index <= 3){
                        return <CardPRoduct device={device} key={device.id} />;
                    }
                })
            }
        </div>
    );
}

export default TopSelling;