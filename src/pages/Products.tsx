import Filter from "../components/Filter";
import TopSelling from "../components/TopSelling";
import ViewProducts from "../components/ViewProducts";
import "../styles/products.css";
import { devices } from "../constants/devices";
import { Carousel } from "antd";

function Products() {
  return (
    <div className="container mg-top">
      <section className="section-products">
        <aside className="filter">
          <Filter />
        </aside>
        <ViewProducts />
      </section>

      <section className="carousel">
        <h3>Ofertas y Promociones</h3>

        <Carousel arrows infinite={false} className="carousel-component">
            <div className="carousel-content">
              <img src="/img/banner-carousel.png" alt="Banner" />
            </div>

            <div className="carousel-content">
              <img src="/img/banner-carousel.png" alt="Banner" />
            </div>

            <div className="carousel-content">
              <img src="/img/banner-carousel.png" alt="Banner" />
            </div>
        </Carousel>
      </section>

      <section>
        <h3>Nuestros Productos Más Vendidos</h3>

        <TopSelling
          devices={[devices[0], devices[4], devices[2], devices[6]]}
        />
      </section>
    </div>
  );
}

export default Products;
