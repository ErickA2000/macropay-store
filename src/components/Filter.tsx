import DropdownSort from "./atoms/DropdownSort";
import "../styles/filter.css";
import { Checkbox, GetProp, Input, Rate } from "antd";

const optionsBrands: Options[] = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Samsung",
    value: "samsung",
  },
  {
    label: "Xiaomi",
    value: "xiaomi",
  },
];

const onChangeBrand: GetProp<typeof Checkbox.Group, "onChange"> = (
  checkedValues
) => {
  console.log("Brand:", checkedValues);
};

function Filter() {
  return (
    <>
      <section className="sort">
        <p>Ordenar por</p>
        <div className="divider"></div>
        <DropdownSort />
      </section>

      <section className="container-filter">
        <section className="section-filter">
          <h5 className="text-color-blue">Marcas</h5>

          <div className="content-checkbox">
            <Checkbox.Group
              options={optionsBrands}
              onChange={onChangeBrand}
              className="brand-list"
            />
          </div>
        </section>

        <hr />

        <section className="section-filter">
          <h5 className="text-color-blue">Precio</h5>

          <div className="inputs-range-price">
            <Input placeholder="100"/>
            <p>-</p>
            <Input placeholder="5000"/>
          </div>
        </section>

        <hr />

        <section className="section-filter">
          <h5 className="text-color-blue">Reviews</h5>

          <Rate/>
        </section>

        <hr />

        <section className="section-filter">
          <h5 className="text-color-blue">Memoria</h5>
        </section>

        <hr />

        <section className="section-filter">
          <h5 className="text-color-blue">Rango</h5>
        </section>

        <hr />

        <section className="section-filter">
          <h5 className="text-color-blue">Cámara</h5>
        </section>
      </section>
    </>
  );
}

export default Filter;

interface Options {
  label: string;
  value: string;
}
