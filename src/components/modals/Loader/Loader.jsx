import { useContext } from "react";
import LoaderImage from "../../../assets/Loader.webp";
import darkLoaderImage from "../../../assets/darkLoader.webp";
import { AuthContext } from "../../../contexts/AuthContext";
import "./Loader.css";

export function Loader() {
  const { mode } = useContext(AuthContext);
  return (
    <div className="modal-container">
      <img
        className="loader-image"
        src={mode === "dark" ? darkLoaderImage : LoaderImage}
        alt="loader"
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}
