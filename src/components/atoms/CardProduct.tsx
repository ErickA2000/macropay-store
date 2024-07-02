import { HeartOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import CurrencyFormat from "react-currency-format";
import "../../styles/cardProduct.css";
import { Device } from "../../interfaces/device.interface";

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
        <section className="title-rate">
          <div className="content-title-rate">
            <p className="short-title">{device.shortTitle}</p>
            <Rate disabled defaultValue={device.rate} />
          </div>

          <div className="content-fees">
            <p className="fees">$120 p/semana</p>
            <p className="fees">0 $520 p/mes</p>
          </div>
        </section>

        <section className="price-buy">
          {device.discount == 0 && (
            <CurrencyFormat
              className="price"
              value={device.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix="$"
            />
          )}

          {device.discount != 0 && (
            <>
              <CurrencyFormat
                className="price"
                value={discountPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
              <CurrencyFormat
                className="old-price"
                value={device.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
              />
            </>
          )}

          <Button type="primary" className="btn">
            Lo Quiero!
          </Button>
        </section>
      </div>
    </div>
  );
}

export default CardPRoduct;
