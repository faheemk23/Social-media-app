import { v4 as uuid } from "uuid";

import "./PostImages.css";

export default function PostImages({ images }) {
  return (
    <div className="post-images-container ">
      {images.map((img) => (
        <div className={`relative post-image-${images.length}`} key={img}>
          <img
            className="post-image object-fit-contain"
            key={uuid()}
            src={img}
            alt="post"
            width={"100%"}
            height={"100%"}
          />
        </div>
      ))}
    </div>
  );
}
