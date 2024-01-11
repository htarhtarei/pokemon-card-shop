import logo from "../../assets/Logo.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
  }, []);

  return (
    <div
      className={`bg-white w-screen z-20 flex flex-col items-center shadow-sm transition-all duration-300 ${
        isFixed ? "fixed top-0" : ""
      }`}
    >
      <h1 className="text-[25px] font-bold pt-2 pb-5">TCG Marketplace</h1>

      <div
        className={` top-10 flex flex-col items-center bg-white pb-2 rounded-b-full shadow-sm ${
          isFixed ? "z-30 fixed" : "absolute"
        }`}
      >
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
