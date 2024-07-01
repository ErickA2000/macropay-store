import Filter from "../components/Filter";
import '../styles/products.css'

function Products() {
  return (
    <div className="container mg-top">
      <aside className="filter">
        <Filter />
      </aside>
    </div>
  );
}

export default Products;
