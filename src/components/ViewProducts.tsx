import CardPRoduct from "./atoms/CardProduct";
import Search from "./atoms/Search";
import { devices } from "../constants/devices";
import { Device } from "../interfaces/device.interface";
import "../styles/viewProducts.css";
import { Filters } from "../interfaces/filter.interface";
import { useEffect, useState } from "react";
import { isObjectEmpty } from "../utils/object";
import { useFilterDevices } from "../hooks/useFilterDevices";

interface Props {
  filters?: Filters;
}

function ViewProducts({ filters }: Props) {
  const [inFilter, setInFilter] = useState(false);

  const applyFilter = useFilterDevices(
    devices,
    filters?.brand,
    filters?.price?.min,
    filters?.price?.max,
    filters?.rate
  );

  useEffect(() => {
    funFilter();
  }, [filters, inFilter]);

  const funFilter = () => {
    if (
      filters === undefined ||
      isObjectEmpty(filters) ||
      (!filters.brand && !filters.price && !filters.rate)
    ) {
      setInFilter(false);
      return;
    }

    applyFilter.filter();    

    if (
      filters.brand &&
      filters.brand.length == 0 &&
      (!filters.price ||
        (filters.price &&
          (!filters.price.min || filters.price.min == 0) &&
          (filters.price.max == 0 || !filters.price.max))) &&
      (!filters.rate || (filters.rate && filters.rate == 0))
    ) {
      setInFilter(false);
    } else {
      setInFilter(true);
    }
  };

  return (
    <div className="content">
      <Search />

      <div className="cards">
        {!inFilter &&
          devices.map((device: Device) => {
            return <CardPRoduct device={device} key={device.id} />;
          })}

        {inFilter && applyFilter.devices.length != 0
          ? applyFilter.devices.map((device) => {
              return <CardPRoduct device={device} key={device.id} />;
            })
          : inFilter && (
              <p className="no-devices">No se han encontrado resultados</p>
            )}
      </div>
    </div>
  );
}

export default ViewProducts;
