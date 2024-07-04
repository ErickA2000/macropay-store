import Filter from "../components/Filter";
import TopSelling from "../components/TopSelling";
import ViewProducts from "../components/ViewProducts";
import "../styles/products.css";
import { devices } from "../constants/devices";
import { Carousel } from "antd";
import { useCallback, useState } from "react";
import { Filters } from "../interfaces/filter.interface";

function Products() {
  const [filtersState, setFiltersState] = useState<Filters>({});

  const handleFilter = useCallback((
    filters: Filters,
  ) => {
    if(filtersState != filters){
      setFiltersState(filters);
    }
  }, [filtersState])

  return (
    <div className="container mg-top">
      <section className="section-products">
        <aside className="filter">
          <Filter onChange={handleFilter} />
        </aside>
        <ViewProducts filters={filtersState}/>
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
