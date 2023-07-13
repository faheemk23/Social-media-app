import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import "./GifsModal.css";

export function GifsModal({ setshowGifsModal }) {
  const { mode } = useContext(AuthContext);
  return (
    <div
      className={
        mode === "dark"
          ? "modal-container black-modal-container"
          : "modal-container "
      }
      onClick={() => setshowGifsModal(false)}
    >
      <div className="gif-modal"> GifsModal</div>
    </div>
  );
}
