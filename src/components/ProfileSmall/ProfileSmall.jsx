import "./ProfileSmall.css";

export function ProfileSmall({ avatar, name, username }) {
  return (
    <div className="flex">
      <img
        className="user-avatar"
        src={avatar}
        alt="user-image"
        height="40px"
        width="40px"
      />
      <div>
        <div className="bolder">{name}</div>
        <div className="profile-small-username">@{username}</div>
      </div>
    </div>
  );
}
