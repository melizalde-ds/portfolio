import Navbar from "@/components/Navbar/Navbar";
import DarkModeBotton from "@/components/DarkModeBotton/DarkModeBotton";
import "./Header.css";
import Empty from "./Empty";

export function Header() {
  return (
    <header id="header">
      <Empty />
      <Navbar />
      <div className="darkModeButton">
        <DarkModeBotton />
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
