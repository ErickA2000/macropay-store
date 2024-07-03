import { Device } from "../../interfaces/device.interface";
import "../../styles/specifications.css";

interface Props {
  device: Device;
}

function Specifications({ device }: Props) {
  return (
    <div className="container-specifications">
      <div className="specification">
        <p className="flex-1">Fabricante</p>
        <p className="flex-1 text-bold">{device.manufacturer}</p>
      </div>
      <div className="specification">
        <p className="flex-1">Peso del producto</p>
        <p className="flex-1 text-bold">{device.weight}</p>
      </div>
      <div className="specification">
        <p className="flex-1">Dimensiones</p>
        <p className="flex-1 text-bold">{device.dimensions}</p>
      </div>
      <div className="specification">
        <p className="flex-1">País de Origen</p>
        <p className="flex-1 text-bold">{device.countryOrigin}</p>
      </div>
      <div className="specification">
        <p className="flex-1">Número de modelo</p>
        <p className="flex-1 text-bold">{device.modelNumber}</p>
      </div>
      <div className="specification">
        <p className="flex-1">Color</p>
        <p className="flex-1 text-bold">{device.color}</p>
      </div>
      <div className="specification">
        <p className="flex-1">Material</p>
        <p className="flex-1 text-bold">{device.material}</p>
      </div>
      <div className="specification">
        <p className="flex-1">Cantidad de piezas</p>
        <p className="flex-1 text-bold">{device.quantity}</p>
      </div>
      <div className="specification">
        <p className="flex-1">Características especiales</p>
        <p className="flex-1 text-bold">{device.specialFeatures}</p>
      </div>
      <div className="specification">
        <p className="flex-1">Componentes incluidos</p>
        <p className="flex-1 text-bold">{device.componentsIncluded}</p>
      </div>
    </div>
  );
}

export default Specifications;
