import { Tabs, TabsProps } from "antd";
import { Device } from "../interfaces/device.interface";
import "../styles/detailDevice.css";
import Specifications from "./atoms/Specifications";
import Reviews from "./atoms/Reviews";

interface Props {
  device: Device;
}

function DetailDevice({ device }: Props) {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Otras Especificaciones",
      children: <Specifications device={device}/>,
    },
    {
      key: "2",
      label: "Reviews",
      children: <Reviews />,
    },
  ];

  return (
    <div className="details">
      <section className="container-img">
        <div className="content-img">
          <img src={device.images[0]} alt={device.shortTitle} />
        </div>

        <div className="content-img">
          <img src={device.images[1]} alt={device.shortTitle} />
        </div>
      </section>

      <section className="tabs">
        <Tabs items={items} defaultActiveKey="1" />
      </section>
    </div>
  );
}

export default DetailDevice;
