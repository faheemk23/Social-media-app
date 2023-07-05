import { defaultAvatars } from "../../../staticData";
import "./ChooseAvatar.css";

export function ChooseAvatar({ setShowAvatars, setNewAvatar }) {
  return (
    <div className="modal-container">
      <div className="choose-avatar-container relative">
        <span
          className="pointer choose-avatar-close-icon close-icon"
          onClick={() => setShowAvatars(false)}
        >
          {" "}
          ✖
        </span>{" "}
        <div className="choose-avatar-heading ">Choose an avatar </div>
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
