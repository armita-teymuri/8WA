import "./MainMenu.css";
import { useState } from "react";
import FormMenu from "./FormMenu";
import LayoutMenu from "./LayoutMenu";
import ImageButton from "../image_button/ImageButton";

const MainMenu = ({ onSelect }) => {
  const [menu, setMenu] = useState(1);

  const menus = {
    1: {
      icon: "1000",
      alt: "Forms",
      menu: <FormMenu onSelect={onSelect} />,
    },
    2: {
      icon: "9999",
      alt: "Layout",
      menu: <LayoutMenu onSelect={onSelect} />,
    },
    3: { icon: "9999", alt: "String", menu: <></> },
    4: { icon: "9999", alt: "Image", menu: <></> },
    5: { icon: "9999", alt: "Complex", menu: <></> },
  };

  return (
    <>
      <div className="CodeForm-Menu CodeForm-MainMenu">
        {Object.keys(menus).map((key) => (
          <ImageButton
            onClick={() => {
              setMenu(key);
            }}
            alt={menus[key].alt}
            icon={menus[key].icon}
            isActive={key == menu}
          />
        ))}

        <span> | </span>

        {menus[menu].menu}
      </div>
    </>
  );
};

export default MainMenu;
