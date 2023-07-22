import { Link } from "react-router-dom";
import "./home.css";
import Button from "../../components/Button";

export default function Homepage() {
  return (
    <div className="home">
      <h1>JordenSky Assignment</h1>
      <div className="home-container">
        <Link to={"/table"}>
          <Button bg={"--color-primary"} fontColor={"--color-white"}>
            Table Page
          </Button>
        </Link>
        <Link to={"/graph/m"}>
          <Button bg={"--color-primary"} fontColor={"--color-white"}>
            Graph Page
          </Button>
        </Link>
      </div>
    </div>
  );
}
