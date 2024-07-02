import { useState } from "react";
import "../../styles/viewImgs.css";

interface Props {
  images: string[];
  title: string;
}

function ViewImgs({ images, title }: Props) {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <>
      <div className="container-image">
        {images.map((image, index) => (
          <div
            className={`content-img ${index === currentImg ? "active" : ""}`}
            key={index}
            onClick={() => setCurrentImg(index)}
            >
            <img src={image} alt={title} />
          </div>
        ))}
      </div>

      <div></div>
    </>
  );
}

export default ViewImgs;
