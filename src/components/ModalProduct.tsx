import CurrencyFormat from "react-currency-format";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Device } from "../interfaces/device.interface";
import "../styles/modalProduct.css";
import { Button } from "antd";

interface Props {
  data: Device;
  discountPrice: number;
}

function ModalProduct({ data, discountPrice }: Props) {
  return (
    <>
      <section>
        <img src="/img/banner2.png" alt="Banner" className="img-100" />
      </section>

      <section className="info">
        <div className="content-img">
          <img src={data.images[0]} alt={data.shortTitle} className="img-100" />
        </div>

        <div className="text">
          <h3>{data.longTitle}</h3>
          <p>
            Color seleccionado: <span>{data.color}</span>
          </p>
        </div>

        {data.discount == 0 ? (
          <CurrencyFormat
            value={data.price}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            suffix=" x 1"
            className="price"
          />
        ) : (
          <CurrencyFormat
            value={discountPrice}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            suffix=" x 1"
            className="price"
          />
        )}
      </section>

      <section className="content-subtotal">
        <hr />
        <div className="subtotal">
          <p>1 ítem en tu carrito</p>
          <p>
            Subtotal
            {data.discount == 0 ? (
              <CurrencyFormat
                value={data.price}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
                suffix=" x 1"
                className="price"
              />
            ) : (
              <CurrencyFormat
                value={discountPrice}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
                suffix=" x 1"
                className="price"
              />
            )}
          </p>
        </div>
        <hr />
      </section>

      <section className="buy">
        <CheckCircleOutlined className="icon"/>

        <p className="mg-0 mg-top">Te vas llevar este celular por solo</p>
        <p className="mg-0 fees">$120 p/semana!</p>

        <Button type="primary" className="btn-credit">COMPRAR A CRÉDITO</Button>

        <div className="or">
            <div className="line"></div>
            <p>o puedes</p>
            <div className="line"></div>
        </div>

        <p className="buy-cash">Comprar a contado</p>
      </section>
    </>
  );
}

export default ModalProduct;
