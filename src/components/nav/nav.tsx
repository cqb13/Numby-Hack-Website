import useScroll from "../../utils/hooks/useScroll";
import "./nav.css";

const Nav = () => {
  return (
    <nav className={useScroll("scrollOffSet", 10) ? "scrolled" : ""}>
      <img src="https://numbyhack.vercel.app/icon.png" alt="icon" className="icon" />
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#faq">FAQ</a>
    </nav>
  );
};

export default Nav;
