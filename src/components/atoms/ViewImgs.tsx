import { useState } from "react";
import "../../styles/viewImgs.css";
import { HeartOutlined } from "@ant-design/icons";

interface Props {
  images: string[];
  title: string;
  discount: number;
}

function ViewImgs({ images, title, discount }: Props) {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <section className="view-imgs">
      <div className="container-image">
        {images.map((image, index) => (
          <div
            className={`content-img ${index === currentImg ? "active" : ""}`}
            key={index}
            onClick={() => setCurrentImg(index)}>
            <img src={image} alt={title} />
          </div>
        ))}
      </div>

      <div className="selected-img">
        <HeartOutlined className="heart-icon"/>

        <img src={images[currentImg]} alt={title} />

        {discount != 0 && (
          <div className="active-discount">
            <p>{discount}%</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ViewImgs;
