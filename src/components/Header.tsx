import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "../styles/header.css";
import NavHeader from "./atoms/NavHeader";

function Header() {
  return (
    <header>
      <section className="header-part-1">
        <div className="header-part-1__content container">
          <h1>
            Macro<span>pay</span>
          </h1>

          <div className="btns">
            <Button type="primary" className="btn-register">
              Crea Tu Cuenta
            </Button>

            <Button type="link" className="btn-login">
              Iniciar sesión
            </Button>

            <div className="container-icon-cart">
              <ShoppingCartOutlined className="icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="header-part-2">
        <div className="header-part-2__content">
          <NavHeader />
        </div>
      </section>

      <section className="credit">
        <div className="text">
          <p className="text-buy">COMPRA A</p>
          <p className="text-credit">CRÉDITO</p>
        </div>
      </section>
    </header>
  );
}

export default Header;
