import { HeartOutlined } from "@ant-design/icons";
import { Button, Modal, Rate } from "antd";
import CurrencyFormat from "react-currency-format";
import "../../styles/cardProduct.css";
import { Device } from "../../interfaces/device.interface";
import ModalProduct from "../ModalProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  device: Device;
}

function CardPRoduct({ device }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const discount = device.discount / 100;
  const discountPrice = device.price - device.price * discount;

  const handleNavigate = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <div className="card">
        <div className="content-image">
          <HeartOutlined className="heart-icon" />

          <img
            src={device.images[0]}
            alt={device.shortTitle}
            className="img"
            onClick={() => handleNavigate(device.id)}
          />

          {device.discount != 0 && (
            <div className="discount">
              <p>{device.discount}%</p>
            </div>
          )}
        </div>

        <div className="card-footer">
          <section className="title-rate">
            <div className="content-title-rate">
              <p
                className="short-title"
                onClick={() => handleNavigate(device.id)}>
                {device.shortTitle}
              </p>
              <Rate disabled defaultValue={device.rate} allowHalf/>
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

            <Button
              type="primary"
              className="btn"
              onClick={() => setOpenModal(true)}>
              Lo Quiero!
            </Button>
          </section>
        </div>
      </div>

      <Modal
        open={openModal}
        footer
        onCancel={() => setOpenModal(false)}
        centered
        className="modal">
        <ModalProduct data={device} discountPrice={discountPrice} />
      </Modal>
    </>
  );
}

export default CardPRoduct;
