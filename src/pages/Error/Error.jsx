import ErrorImage from "../../assets/rubber-chicken-800x400.v1.3a2d1b19.png";
import { MiscHeader } from "../../components/headers/MiscHeader";
import "./Error.css";

export function Error() {
  return (
    <main className="error-container">
      <MiscHeader inError />
      <img src={ErrorImage} alt="error" width="60%" />
      <h1>Sorry no results found!</h1>
    </main>
  );
}
