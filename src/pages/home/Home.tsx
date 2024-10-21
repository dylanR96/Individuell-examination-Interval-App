import { Link } from "@tanstack/react-router";
import Logo from "../../assets/Logo";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="home-content">
          <Link to="/setTimer">
            <Logo />
          </Link>
          <h4>INTERVAL</h4>
          <h4>For all your timing needs</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
