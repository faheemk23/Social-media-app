import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { defaultAvatars } from "../../../staticData";
import "./ChooseAvatar.css";

export function ChooseAvatar({ setShowAvatars, setNewAvatar }) {
  const { mode } = useContext(AuthContext);
  return (
    <div
      className={
        mode === "dark"
          ? "modal-container black-modal-container"
          : "modal-container "
      }
    >
      <div
        className={
          mode === "dark"
            ? "choose-avatar-container relative black-choose-avatar-container"
            : "choose-avatar-container relative"
        }
      >
        <span
          className="pointer choose-avatar-close-icon close-icon"
          onClick={() => setShowAvatars(false)}
        >
          {" "}
          ✖
        </span>{" "}
        <div className="choose-avatar-heading ">Choose an avatar </div>
        <hr />
        {defaultAvatars.map((avatar) => (
          <img
            key={avatar}
            src={avatar}
            alt="user-image"
            className="user-avatar pointer choose-avatar"
            height="90px"
            width="90px"
            onClick={() => {
              setNewAvatar(avatar);
              setShowAvatars(false);
            }}
          />
        ))}{" "}
      </div>
    </div>
  );
}
