import { Breadcrumb, Button } from "antd";
import {
  Link,
  NavigateOptions,
  useNavigate,
  useParams,
} from "react-router-dom";
import { devices } from "../constants/devices";
import "../styles/product.css";
import ViewImgs from "../components/atoms/ViewImgs";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const device = devices.filter((item) => item.id === Number(id))[0];

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

      <section>
        <ViewImgs images={device.images} title={device.shortTitle}/>
      </section>

      <section></section>

      <section></section>
    </div>
  );
}

export default Product;
