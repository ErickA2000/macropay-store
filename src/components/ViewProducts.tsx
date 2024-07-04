import CardPRoduct from "./atoms/CardProduct";
import Search from "./atoms/Search";
import { devices } from "../constants/devices";
import { Device } from "../interfaces/device.interface";
import "../styles/viewProducts.css";
import { Filters } from "../interfaces/filter.interface";
import { useEffect, useState } from "react";
import { isObjectEmpty } from "../utils/object";

interface Props {
  filters?: Filters;
}

function ViewProducts({ filters }: Props) {
  let devicesFilter: Device[] = [];
  const [devicesFilterState, setDeviceFilterState] = useState<Device[]>([]);
  const [inFilter, setInFilter] = useState(false);

  useEffect(() => {
    funFilter();
  }, [filters, inFilter]);

  const funFilter = () => {
    console.log(filters);
    
    if (
      filters === undefined ||
      isObjectEmpty(filters) ||
      (!filters.brand && !filters.price && !filters.rate)
    ) {
      setInFilter(false);
      return;
    }

    devicesFilter = devices.filter((device) => {
      return (
        (!filters.brand ||
          filters.brand?.includes(device.manufacturer.toLowerCase())) &&
        (!filters.price ||
          !filters.price.min ||
          device.price >= filters.price.min) &&
        (!filters.price ||
          !filters.price.max ||
          device.price <= filters.price.max) &&
        (!filters.rate || device.rate == filters.rate)
      );
    });
    setDeviceFilterState(devicesFilter);
    
    if(devicesFilter.length == 0 && 
      (filters.brand && filters.brand.length == 0 ) && 
      (filters.price && filters.price.min == 0 || !filters.price.min) &&
      (filters.price && filters.price.max == 0 || !filters.price.max) &&
      (filters.rate && filters.rate == 0 || !filters.rate )
    ) {
      setInFilter(false);
    }else{
      setInFilter(true);
    }
    
  };

  return (
    <div className="content">
      <Search />

      <div className="cards">
        {devicesFilterState.length == 0 && !inFilter
          ? devices.map((device: Device) => {
              return <CardPRoduct device={device} key={device.id} />;
            })
          : devicesFilterState.map((device) => {
              return <CardPRoduct device={device} key={device.id} />;
            })}
      </div>
    </div>
  );
}

export default ViewProducts;
