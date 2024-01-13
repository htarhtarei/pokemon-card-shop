import { useEffect, useState } from "react";
import "./ScrollUpBtn.css";
import upDouble from "../../assets/upDouble.svg"

const ScrollUpBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div className="scrollUp">
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="bg-[#FDCE29] w-[56] h-[56] text-2xl rounded-sm md:text-3xl text-white py-1 px-1 animate__animated animate__shakeY animate__slower animate__delay-9000s animate__infinite"
        >
          <img src={upDouble} alt="upDouble" />
        </button>
      )}
    </div>
  );
};

export default ScrollUpBtn;
