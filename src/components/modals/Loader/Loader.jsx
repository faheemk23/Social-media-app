import LoaderImage from "../../../assets/Loader.webp";
import "./Loader.css";

export function Loader() {
  return (
    <div className="modal-container">
      <img
        className="loader-image"
        src={LoaderImage}
        alt="loader"
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}
