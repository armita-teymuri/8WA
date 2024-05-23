import "./MainMenu.css";
import { useState } from "react";
import FormMenu from "./FormMenu";
import ImageButton from "../image_button/ImageButton";

const MainMenu = ({ onSelect }) => {
  const [menu, setMenu] = useState(1);

  const menus = {
    1: {
      icon: "ico-menu-form",
      alt: "Forms",
      menu: <FormMenu onSelect={onSelect} />,
    },
    2: { icon: "ico-menu-unknown", alt: "Layout", menu: <></> }, //layout
    3: { icon: "ico-menu-unknown", alt: "String", menu: <></> }, //string
    4: { icon: "ico-menu-unknown", alt: "Image", menu: <></> }, //image
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
