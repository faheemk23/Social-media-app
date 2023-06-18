import { v4 as uuid } from "uuid";
import "./PostImages.css";
import { Link, useNavigate } from "react-router-dom";

export default function PostImages({ images }) {
  const navigate = useNavigate();

  return (
    <div className="post-images-container ">
      {images.map((img) => (
        <div className="image-container">
          <img
            className="post-image"
            key={uuid()}
            src={img}
            alt="post"
            width={"100%"}
          />
        </div>
      ))}
    </div>
  );
}
