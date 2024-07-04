import { Button, Slider } from "antd";
import "../styles/applyCredit.css";
import FaceImg from "./atoms/FaceImg";

interface Props {
  images: string[];
}

function ApplyCredit({ images }: Props) {
  return (
    <div className="details gap-0 mg-top">
      <section className="container-img">
        <div className="content-img">
          <img src={images[0]} alt="Phone image" />
        </div>
        <div className="content-img">
          <img src={images[1]} alt="Prone image" />
        </div>
      </section>

      <section className="selector-credit">
        <img src="/img/banner3-v4.png" alt="Banner" />
        <div className="selector">
          <FaceImg className="mg-0-auto" width="3rem" height="3rem" />

          <h3>¿Te falta una lanita?</h3>
          <p className="mg-0 text-09">ENGANCHE $520,00</p>
          <p className="mg-0 text-09">PAGO SEMANAL $125,00</p>

          <div className="content-slider">
            <Slider defaultValue={15} />
            <p className="mg-0 text-09 text-left">ENGANCHE</p>
          </div>

          <Button type="primary" className="btn">
            Aplicar Ahora
          </Button>

          <p className="mg-0 text-05">
            *Hasta $2.000 de manera fácil, rápida y confiable.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ApplyCredit;
