import { useState } from "react";
import { Device } from "../interfaces/device.interface";

export function useFilterDevices(
  inputDevices: Device[],
  selectedBrands?: string[],
  minPrice?: number,
  maxPrice?: number,
  rate?: number
) {
  const [devices, setDevices] = useState<Device[]>([]);
  
  const filter = () => {
    const devicesFilter = inputDevices.filter((device) => {
      const matchesBrand =
        !selectedBrands ||
        selectedBrands.length === 0 ||
        (device.manufacturer &&
          selectedBrands.includes(device.manufacturer.toLowerCase()));
      const matchesPrice =
        (minPrice === 0 && maxPrice === 0) ||
        (((!minPrice && minPrice !== 0) || device.price >= minPrice) &&
          ((!maxPrice && maxPrice !== 0) || device.price <= maxPrice));
      const matchesRate = !rate || device.rate == rate;

      return matchesBrand && matchesPrice && matchesRate;
    });

    setDevices(devicesFilter);
  };

  return {
    devices,
    filter
  };
}
