import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className='right-logo'>
        <img src='/icon.png' width={60} height={60} alt='icon' />
      </div>
      <div className='center-nav'>
        <a href='#home'>Home</a>
        <a href='#features'>Features</a>
        <a href='#contact'>Contact</a>
      </div>
      {/*<div className='spacer'></div>*/}
    </nav>
  );
};

export default Nav;
