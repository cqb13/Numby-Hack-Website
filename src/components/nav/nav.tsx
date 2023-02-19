import "./nav.css";

const Nav = () => {
  //TODO: hide nav bar in icon upon scroll
  return (
    <nav>
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
