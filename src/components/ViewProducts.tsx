import CardPRoduct from "./atoms/CardProduct";
import Search from "./atoms/Search";
import { devices } from "../constants/devices";
import { Device } from "../interfaces/device.interface";
import '../styles/viewProducts.css';
import { Filters } from "../interfaces/filter.interface";
import { useEffect } from "react";

interface Props {
  filters?: Filters;
}

function ViewProducts({ filters }: Props) {
  const devicesFilter: Device[] = [];

  useEffect(() => {
    console.log("in use effect:",filters);
    
  }, [filters])

  const funFilter = () => {
    if(!filters) return;

    
  }
  
  return (
    <div className="content">
      <Search />

      <div className="cards">
        {devices.map((device: Device) => {
          return <CardPRoduct device={device} key={device.id}/>;
        })}
      </div>
    </div>
  );
}

export default ViewProducts;
