import reactLogo from "../../assets/react.svg";
import { Menu } from "../Menu";
import { Profile } from "../Profile";
import "./index.css";
export const TopBar = () => (
  <nav className="top-bar">
    <div className="logo">
      <img src={reactLogo} alt="hola" />
    </div>
    <Menu />
    <Profile />
  </nav>
);
