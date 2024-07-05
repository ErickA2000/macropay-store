import CardPRoduct from "./atoms/CardProduct";
import Search from "./atoms/Search";
import { devices } from "../constants/devices";
import { Device } from "../interfaces/device.interface";
import "../styles/viewProducts.css";
import { Filters } from "../interfaces/filter.interface";
import { useEffect, useState } from "react";
import { isObjectEmpty } from "../utils/object";
import { filterDevices } from "../utils/filter";

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
    if (
      filters === undefined ||
      isObjectEmpty(filters) ||
      (!filters.brand && !filters.price && !filters.rate)
    ) {
      setInFilter(false);
      return;
    }

    devicesFilter = filterDevices(
      devices,
      filters.brand,
      filters.price?.min,
      filters.price?.max,
      filters.rate
    );
    setDeviceFilterState(devicesFilter);

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

        {
          inFilter && devicesFilterState.length != 0 ? devicesFilterState.map((device) => {
            return <CardPRoduct device={device} key={device.id} />;
          }) : inFilter && <p className="no-devices">No se han encontrado resultados</p>
        }
      </div>
    </div>
  );
}

export default ViewProducts;
