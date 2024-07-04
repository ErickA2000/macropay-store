interface Props {
  width?: string;
  height?: string;
  className?: string;
}

function FaceImg({ width, height, className }: Props) {
  return (
    <div className={className} style={{ width: width || "2rem", height: height || "2rem" }}>
      <img src="/img/face.png" alt="Face icon" style={{ width: "100%" }} />
    </div>
  );
}

export default FaceImg;
