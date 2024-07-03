import { Breadcrumb, Button, Rate } from "antd";
import {
  Link,
  NavigateOptions,
  useNavigate,
  useParams,
} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { devices } from "../constants/devices";
import "../styles/product.css";
import ViewImgs from "../components/atoms/ViewImgs";
import { useState } from "react";
import { SecurityScanOutlined } from "@ant-design/icons";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [moreText, setMoreText] = useState(false);

  const device = devices.filter((item) => item.id === Number(id))[0];
  const discount = device.discount / 100;
  const discountPrice = device.price - device.price * discount;

  const handleNavigate = (route: string, options?: NavigateOptions) => {
    navigate(route, options);
  };

  return (
    <div className="container">
      <section className="nav">
        <Button onClick={() => handleNavigate("..", { relative: "path" })}>
          Volver a resultados
        </Button>

        <Breadcrumb
          items={[
            {
              title: <Link to={"/"}>Celulares</Link>,
            },
            {
              title: device.manufacturer,
            },
            {
              title: device.shortTitle,
            },
          ]}
        />
      </section>

      <section className="section-basic-info">
        <ViewImgs
          images={device.images}
          title={device.shortTitle}
          discount={device.discount}
        />

        <div>
          <section className="right-content">
            <div className="right-content__title-rate">
              <h2>{device.longTitle}</h2>
              <Rate value={device.rate} disabled />
            </div>

            <div className="price-payment-method">
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

              <img
                src="/img/icons-credit-card.png"
                alt="credit-cards"
                className="card-img"
              />
            </div>
          </section>

          <section>
            <p
              className={`description ${
                moreText ? "description-more" : "description-no-more"
              }`}>
              {device.description}
            </p>

            <p onClick={() => setMoreText(!moreText)} className="more">
              - {moreText ? "Ver menos" : "Ver más"} -
            </p>
          </section>

          <div className="content-security-card">
            <section className="security">
              <SecurityScanOutlined className="icon" />
              <div>
                <p className="text text-1">
                  Compra segura con Macropay protect
                </p>
                <p className="text text-2">
                  Devolución gratis (30 días) / 12 meses de garantía de fábrica.
                </p>
              </div>
            </section>
          </div>

          {discount != 0 && (
            <p className="promotion">La promoción vence en 24d 12h:43m</p>
          )}

          <section className="today-credit">
            <div className="circle">
              <div className="front">
                <p>HOY</p>
              </div>
              <div className="back"></div>
            </div>

            <div className="week-pay">
              <div className="front">

              </div>
            </div>
          </section>
        </div>
      </section>

      <section></section>

      <section></section>
    </div>
  );
}

export default Product;
