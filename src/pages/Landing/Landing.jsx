import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";

export function Landing() {
  const navigate = useNavigate();
  return (
    <main className="landing-container">
      <article className="landing-article">
        <header>
          <h1>My Website</h1>
        </header>
        <div>
          <div>
            <span>FOLLOW </span>PEOPLE AROUND THE GLOBE
          </div>
          <div>
            <span>CONNECT </span> WITH YOUR FRIENDS
          </div>
          <div>
            <span>SHARE </span> WHAT YOU THINK
          </div>
        </div>
        <div>
          <button onClick={() => navigate("/signup")}>Join Now</button>
          <Link to="/login">Already have an account ?</Link>
        </div>
      </article>
      <div className="image-placeholder"></div>
    </main>
  );
}
