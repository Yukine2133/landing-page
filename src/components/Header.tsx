import logo from "../images/logo.png";
import menu from "../images/menu.png";
import NavReveal from "../utils/NavReveal";

const Header = () => {
  return (
    <header className="flex items-center xl:px-20 px-8 py-9 xl:py-12 justify-between">
      <div className="lg:hidden">
        <NavReveal>
          <img className="w-full" src={menu} alt="Menu" />
        </NavReveal>
      </div>

      <div className="flex items-center gap-3 mx-auto lg:mx-0">
        <NavReveal>
          <img className="w-2/3 lg:w-9/12" src={logo} alt="Logo" />
        </NavReveal>
        <NavReveal>
          <h1 className="font-lemon text-xl lg:text-2xl  uppercase font-bold ">
            E Guru
          </h1>
        </NavReveal>
      </div>

      <nav className="hidden lg:grid">
        <ul className="text-light-gray gap-12 flex">
          <NavReveal>
            <li className="font-bold text-orange">Home</li>
          </NavReveal>
          <NavReveal>
            <li>About Us</li>
          </NavReveal>
          <NavReveal>
            <li>Features</li>
          </NavReveal>
          <NavReveal>
            <li>How it works</li>
          </NavReveal>
        </ul>
      </nav>

      <div className="hidden lg:grid">
        <NavReveal>
          <button className="bg-white border border-black px-6 py-2">
            Sign Up
          </button>
        </NavReveal>
      </div>
    </header>
  );
};

export default Header;
