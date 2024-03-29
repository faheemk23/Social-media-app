import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { editProfileHandler } from "../../utilities/userUtilities";
import "./Verified.css";

export function Verified() {
  const [subscription, setSubscription] = useState("individual");
  const { dataDispatch } = useContext(DataContext);
  const { user, setUser, mode } = useContext(AuthContext);

  const verified = user?.isVerified;
  const navigate = useNavigate();

  const handleBtnSubscribe = () => {
    editProfileHandler({ isVerified: true }, setUser, dataDispatch);
    toast.success("Subscribed!");
    navigate(-1);
  };

  const handleBtnUnsubscribe = () => {
    editProfileHandler({ isVerified: false }, setUser, dataDispatch);
    toast.success("Unsubscribed!");
    navigate(-1);
  };
  return (
    <div
      className={
        mode === "dark"
          ? "modal-container black-modal-container"
          : "modal-container"
      }
    >
      <div
        className={
          mode === "dark"
            ? "verified-modal relative black-verified-modal"
            : "verified-modal relative"
        }
      >
        <i
          className="fa-solid fa-xmark login-modal-close-icon pointer"
          onClick={(e) => {
            e.stopPropagation();
            navigate(-1);
          }}
        ></i>
        <div className="flex-center">
          {" "}
          <img
            className="nav-logo"
            src={
              mode === "dark"
                ? "https://ik.imagekit.io/faheem/Social-media/dark-logo.png?updatedAt=1688983665780"
                : "https://ik.imagekit.io/faheem/Social-media/app-logo?updatedAt=1686601318657"
            }
            alt="app-logo"
            width="40px"
            height="32px"
          />
        </div>
        <div className="verified-heading">
          {verified ? "You are already subscribed!" : "Who are you?"}
        </div>
        <div
          className={
            mode === "dark"
              ? "verified-text black-verified-text"
              : "verified-text"
          }
        >
          {verified
            ? "You can unsubscribe below:"
            : "Choose the right Verified subscription for you:"}
        </div>
        {!verified && (
          <div className="choose-verification-container">
            <div
              className={
                subscription === "individual"
                  ? mode === "dark"
                    ? "choose-verification-item outline-primary black-choose-verification-item"
                    : "choose-verification-item outline-primary"
                  : mode === "dark"
                  ? "choose-verification-item black-choose-verification-item"
                  : "choose-verification-item"
              }
              onClick={() => setSubscription("individual")}
            >
              <div className="choose-verification-light-text">Twitter Blue</div>
              <div className="choose-verification-bold">I am an individual</div>
              <div className="choose-verification-light-text smaller">
                For individuals and creators
              </div>
            </div>
            <div
              className={
                subscription === "organization"
                  ? mode === "dark"
                    ? "choose-verification-item outline-primary black-choose-verification-item "
                    : "choose-verification-item outline-primary"
                  : mode === "dark"
                  ? "choose-verification-item black-choose-verification-item"
                  : "choose-verification-item"
              }
              onClick={() => setSubscription("organization")}
            >
              <div className="choose-verification-light-text">
                Verified Organizations
              </div>
              <div className="choose-verification-bold">
                I am an Organization
              </div>
              <div className="choose-verification-light-text smaller">
                For businesses, government agencies, and non-profit
              </div>
            </div>
          </div>
        )}
        {verified ? (
          <button
            className={
              mode === "dark"
                ? "btn btn-primary btn-subscribe-verified black-btn-subscribe-verified"
                : "btn btn-primary btn-subscribe-verified "
            }
            onClick={(e) => {
              e.stopPropagation();
              handleBtnUnsubscribe();
            }}
          >
            Unsubscribe
          </button>
        ) : (
          <button
            className={
              mode === "dark"
                ? "btn btn-primary btn-subscribe-verified black-btn-subscribe-verified"
                : "btn btn-primary btn-subscribe-verified "
            }
            onClick={(e) => {
              e.stopPropagation();
              handleBtnSubscribe();
            }}
          >
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
}
