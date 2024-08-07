import { Button, Flex, Input, Space } from "antd";
import "../styles/footer.css";
import { FacebookFilled, InstagramOutlined, LinkedinFilled, SendOutlined, WhatsAppOutlined } from "@ant-design/icons";
import FaceImg from "./atoms/FaceImg";

function Footer() {
  return (
    <footer className="content-footer">
      <div className="container-background">
        <img src="/img/background-footer.png" alt="Footer" />
      </div>

      <div className="content-info">
        <section className="section-1">
          <Flex gap="small" vertical align="start">
            <p className="short-text">OFERTAS Y PROMOCIONES</p>
            <p className="long-text">
              <span>No te pierdas</span> <span>nuestras ofertas!</span>
            </p>

            <Space.Compact className="input">
              <Input placeholder="Tu dirección de correo electrónico" />
              <Button icon={<SendOutlined />}></Button>
            </Space.Compact>

            <Flex gap="small" wrap align="center">
              <div className="content-logo">
                <img src="/img/macropay-logo.png" alt="Logo macropay" />
              </div>

              <Flex vertical>
                <Button type="link">Envíos y devoluciones</Button>
                <Button type="link">Preguntas Frecuentes</Button>
              </Flex>

              <Flex vertical>
                <Button type="link">Aviso de privacidad</Button>
                <Button type="link">Términos y condiciones</Button>
              </Flex>
            </Flex>

            <p className="copyright-text">Todos los derechos reservados - &#169; Macropay 2022</p>
          </Flex>
        </section>

        <section className="section-2">
            <FaceImg width="10rem" height="10rem" />
        </section>

        <section className="section-3">
          <Flex gap="small" vertical align="start">
            <h3 className="mg-0">Conversemos!</h3>
            <p className="mg-0">Lorem ipsum dolor sit amet consectetur</p>

            <Flex gap="small">
              <FacebookFilled className="icon"/>
              <InstagramOutlined className="icon"/>
              <LinkedinFilled className="icon"/>
              <WhatsAppOutlined className="icon"/>
            </Flex>
          </Flex>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
