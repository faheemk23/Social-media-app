import { useContext, useState } from "react";
import { toast } from "react-hot-toast";

import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";
import { defaultAvatars } from "../../../staticData";
import { uploadImage } from "../../../utilities/postsUtilities";
import { editProfileHandler } from "../../../utilities/userUtilities";
import { ChooseAvatar } from "../ChooseAvatar/ChooseAvatar";
import "./EditProfileModal.css";

export default function EditProfileModal({ user, setShowEditProfileModal }) {
  const { name, avatar, cover, bio, location, website } = user;

  const [userInfo, setUserInfo] = useState({
    name,
    bio,
    location,
    website,
  });
  const [newCover, setNewCover] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAvatars, setShowAvatars] = useState(false);

  const { setUser } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);

  const editProfileFieldChangeHandler = (e) => {
    const fieldChanged = e.target.id;
    setUserInfo((prev) => ({ ...prev, [fieldChanged]: e.target.value }));
  };

  const valiateDetails = (userInfo, setErrorMessage) => {
    const res = Object.keys(userInfo).every((key) => {
      if (userInfo[key] === "") {
        // const field = key === "confirmPassword" ? "confirm password" : key;
        setErrorMessage(`Please fill the ${key} field!`);
        return false;
      } else {
        return true;
      }
    });
    return res;
  };
  const handleImageFileInput = (e, type) => {
    if (e.target.files[0].size > 2000000) {
      toast.error("Image size should be less than 2MB");
    } else {
      type === "avatar"
        ? setNewAvatar(e.target.files[0])
        : setNewCover(e.target.files[0]);
    }
  };

  const handleBtnSave = async () => {
    if (valiateDetails(userInfo, setErrorMessage)) {
      let avatar = "";
      let cover = "";
      let userDetails = userInfo;
      if (newAvatar) {
        if (defaultAvatars.includes(newAvatar)) {
          userDetails = { ...userDetails, avatar: newAvatar };
        } else {
          try {
            console.log("we are uploading");
            const res = await uploadImage(newAvatar);
            avatar = res.secure_url;
            userDetails = { ...userDetails, avatar };
          } catch (e) {
            console.error(e.message);
          }
        }
      }
      if (newCover) {
        try {
          const res = await uploadImage(newCover);
          cover = res.secure_url;
          userDetails = { ...userDetails, cover };
        } catch (e) {
          console.error(e.message);
        }
      }

      editProfileHandler(userDetails, setUser, dataDispatch);

      setShowEditProfileModal(false);
    }
  };

  return (
    <div className="modal-container">
      <div className="edit-profile-modal relative">
        <span
          className="pointer edit-profile-close-icon close-icon"
          onClick={() => setShowEditProfileModal(false)}
        >
          {" "}
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <div className="flex">
          <span className="edit-profile-heading">Edit profile</span>
          <button
            className="btn btn-primary edit-profile-btn-save"
            onClick={() => handleBtnSave()}
          >
            Save
          </button>
        </div>
        <label className="label-container cover-container" htmlFor="cover">
          <i className="fa-solid fa-camera-retro camera-icon"></i>
          <img
            src={newCover ? URL.createObjectURL(newCover) : cover}
            alt="cover"
            height="200px"
            width="100%"
          />
        </label>

        <label
          className="label-container  edit-profile-avatar"
          htmlFor="avatar"
        >
          <i className="fa-solid fa-camera-retro camera-icon"></i>
          <img
            src={
              newAvatar
                ? defaultAvatars.includes(newAvatar)
                  ? newAvatar
                  : URL.createObjectURL(newAvatar)
                : avatar
            }
            alt="user"
            className="user-avatar"
            height="120px"
            width="120px"
          />
        </label>

        <input
          className="hidden"
          type="file"
          accept="image/*"
          name="cover"
          id="cover"
          onChange={(e) => handleImageFileInput(e, "cover")}
        />
        <input
          className="hidden"
          type="file"
          accept="image/*"
          name="avatar"
          id="avatar"
          onChange={(e) => handleImageFileInput(e, "avatar")}
        />
        <div className="edit-profile-info">
          {errorMessage && <p>{errorMessage}</p>}
          <button
            className="btn btn-secondary edit-profile-btn-select-avatar"
            onClick={() => setShowAvatars(true)}
          >
            Select an avatar
          </button>
          {showAvatars && (
            <ChooseAvatar
              setShowAvatars={setShowAvatars}
              setNewAvatar={setNewAvatar}
            />
          )}

          <label className="edit-profile-label" htmlFor="name">
            Name
          </label>
          <input
            className="edit-profile-input"
            defaultValue={name}
            type="text"
            id="name"
            onChange={editProfileFieldChangeHandler}
          />
          <label className="edit-profile-label" htmlFor="bio">
            Bio
          </label>
          <input
            className="edit-profile-input"
            defaultValue={bio}
            type="text"
            id="bio"
            onChange={editProfileFieldChangeHandler}
          />
          <label className="edit-profile-label" htmlFor="location">
            Location
          </label>
          <input
            className="edit-profile-input"
            defaultValue={location}
            type="text"
            id="location"
            onChange={editProfileFieldChangeHandler}
          />
          <label className="edit-profile-label" htmlFor="website">
            Website
          </label>
          <input
            className="edit-profile-input"
            defaultValue={website}
            type="text"
            id="website"
            onChange={editProfileFieldChangeHandler}
          />
        </div>
      </div>
    </div>
  );
}
