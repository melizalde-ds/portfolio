import "./Header.css";
import dynamic from "next/dynamic";
const Empty = dynamic(() => import("./Empty"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), { ssr: false });
const DarkModeBotton = dynamic(() => import("@/components/DarkModeBotton/DarkModeBotton"), { ssr: false });

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
