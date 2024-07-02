import CardPRoduct from "./atoms/CardProduct";
import Search from "./atoms/Search";
import { devices } from "../constants/devices";
import { Device } from "../interfaces/device.interface";
import '../styles/viewProducts.css';

function ViewProducts() {
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
