import logo from "../images/logo.png";
import menu from "../images/menu.png";

const Header = () => {
  return (
    <header className="flex items-center xl:px-20 px-8 py-9 xl:py-12 justify-between">
      <div className="lg:hidden">
        <img className="w-full" src={menu} alt="Menu" />
      </div>

      <div className="flex items-center gap-3 mx-auto lg:mx-0">
        <img className="w-1/4 lg:w-[28%]" src={logo} alt="Logo" />
        <h1 className="font-lemon text-xl lg:text-2xl  uppercase font-bold ">
          E Guru
        </h1>
      </div>

      <nav className="hidden lg:grid">
        <ul className="text-light-gray gap-12 flex">
          <li className="font-bold text-orange">Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>How it works</li>
        </ul>
      </nav>

      <div className="hidden lg:grid">
        <button className="bg-white border border-black px-6 py-2">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
