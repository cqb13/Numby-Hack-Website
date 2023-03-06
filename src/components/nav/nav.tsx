import useScroll from "../../utils/hooks/useScroll";
import "./nav.css";

const Nav = () => {
  return (
    <nav className={useScroll("scrollOffSet", 10) ? "scrolled" : ""}>
      <div className='right-logo'>
        <img src='/icon.png' width={60} height={60} alt='icon' />
      </div>
      <div className='center-nav'>
        <a href='#home'>Home</a>
        <a href='#features'>Features</a>
        <a href='#faq'>FAQ</a>
      </div>
      <div className='spacer'></div>
    </nav>
  );
};

export default Nav;
