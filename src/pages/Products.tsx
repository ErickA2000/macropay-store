import Filter from "../components/Filter";
import ViewProducts from "../components/ViewProducts";
import "../styles/products.css";

function Products() {
  return (
    <div className="container mg-top">
      <div className="section-products">
        <aside className="filter">
          <Filter />
        </aside>
        <ViewProducts />
      </div>
    </div>
  );
}

export default Products;
