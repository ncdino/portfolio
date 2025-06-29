import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderButton from "../components/HeaderButton";
import { HeaderMenuList } from "../data/Header/HeaderList";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const filteredMenuList = useMemo(() => {
    if (location.pathname === "/") {
      return HeaderMenuList;
    } else {
      return HeaderMenuList.filter((item) => item.isLogo);
    }
  }, [location.pathname]);

  const handleMenuClick = (item) => {
    if (item.type === "internal-scroll" && location.pathname === "/") {
      const targetElement = document.getElementById(item.targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        return;
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="fixed p-6 w-full z-[9999]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          {filteredMenuList.map((item) => (
            <HeaderButton
              key={item.id}
              title={item.title}
              isLogo={item.isLogo}
              containerBackgroundColor={item.containerBackgroundColor}
              onClick={() => handleMenuClick(item)}
            />
          ))}
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="z-20 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-neutral-950 dark:bg-amber-500 text-neutral-50 dark:text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors"
          >
            <i
              className={`bx bx-${
                darkMode ? "sun" : "moon"
              } text-lg lg:text-xl`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}
