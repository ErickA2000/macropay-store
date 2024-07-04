import DropdownSort from "./atoms/DropdownSort";
import "../styles/filter.css";
import { Checkbox, GetProp, Input, Rate } from "antd";
import { useEffect, useState } from "react";
import { Filters } from "../interfaces/filter.interface";

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

interface Props {
  onChange: (
    filters: Filters
  ) => void;
}

function Filter({ onChange }: Props) {
  const [brand, setBrand] = useState<string[]>();
  const [price, setPrice] = useState<{
    min?: number;
    max?: number;
  }>();
  const [rate, setRate] = useState<number>();


  useEffect(() => {
    onChange({brand, price, rate});
  }, [brand, price, rate]);


  const onChangeBrand: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    setBrand(checkedValues as string[]);
  };

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
              value={brand}
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
            <Input
              placeholder="100"
              type="number"
              value={price?.min}
              onChange={(e) => {
                setPrice({ min: Number(e.target.value), max: price?.max });
              }}
            />
            <p>-</p>
            <Input
              placeholder="5000"
              type="number"
              value={price?.max}
              onChange={(e) => {
                setPrice({ min: price?.min, max: Number(e.target.value) });
              }}
            />
          </div>
        </section>

        <hr />

        <section className="section-filter">
          <h5 className="text-color-blue">Reviews</h5>

          <Rate value={rate} onChange={setRate} allowHalf/>
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
