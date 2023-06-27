import { defaultAvatars } from "../../../staticData";
import "./ChooseAvatar.css";

export function ChooseAvatar({ setShowAvatars, setNewAvatar }) {
  return (
    <div className="modal-container">
      <div className="choose-avatar-container">
        <div>
          <span className="pointer" onClick={() => setShowAvatars(false)}>
            {" "}
            ✖
          </span>{" "}
          ChooseAvatar{" "}
        </div>
        {defaultAvatars.map((avatar) => (
          <img
            key={avatar}
            src={avatar}
            alt="user-image"
            className="user-avatar pointer"
            height="100px"
            width="100px"
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
