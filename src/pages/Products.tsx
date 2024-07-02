import Filter from "../components/Filter";
import ViewProducts from "../components/ViewProducts";
import "../styles/products.css";

function Products() {
  return (
    <div className="container mg-top">
      <section className="section-products">
        <aside className="filter">
          <Filter />
        </aside>
        <ViewProducts />
      </section>

      <section>
        <h3>Ofertas y Promociones</h3>
      </section>

      <section>
        <h3>Nuestros Productos Más Vendidos</h3>
      </section>
    </div>
  );
}

export default Products;
