import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Where in the world ?</h1>
      <div className="header__darkMode">
        <div>
          <i class="far fa-moon" />
        </div>
        <div>Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;
