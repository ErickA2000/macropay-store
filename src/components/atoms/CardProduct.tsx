import { HeartOutlined } from "@ant-design/icons";
import "../../styles/cardProduct.css";
import { Device } from "../../interfaces/device.interface";
import { Button, Rate } from "antd";

interface Props {
  device: Device;
}

function CardPRoduct({ device }: Props) {
  const discount = device.discount / 100;
  const discountPrice = device.price - device.price * discount;

  return (
    <div className="card">
      <HeartOutlined className="heart-icon" />

      <img src={device.images[0]} alt={device.shortTitle} />

      <div className="card-footer">
        <section>
          <p>{device.shortTitle}</p>
          <Rate disabled defaultValue={device.rate} />
          <p>$120 p/semana</p>
          <p>0 $520 p/mes</p>
        </section>

        <section>
          {device.discount == 0 && <h4>{device.price}</h4>}

          {device.discount != 0 && (
            <div>
              <h4>{discountPrice}</h4>
              <p>{device.price}</p>
            </div>
          )}

          <Button type="primary" className="btn">Lo Quiero!</Button>
        </section>
      </div>
    </div>
  );
}

export default CardPRoduct;
