import "./Header.css";
import { useState } from "react";
import ImageButton from "../image_button/ImageButton";

const Header = ({ setPreview, setViewMode }) => {
  const [selectedPreView, setSelectedPreView] = useState(1);
  const [selectedViewPort, setSelectedViewMode] = useState(1);

  const preViewItems = {
    1: { value: false, alt: "Design", icon: "ico-menu-unknown" },
    2: { value: true, alt: "Preview", icon: "ico-menu-unknown" },
  };

  const viewModeItems = {
    1: {
      value: "CodeForm-ViewMode-Desktop",
      alt: "Desktop",
      icon: "ico-menu-unknown",
    },
    2: {
      value: "CodeForm-ViewMode-Tablet",
      alt: "Tablet",
      icon: "ico-menu-unknown",
    },
    3: {
      value: "CodeForm-ViewMode-Mobile",
      alt: "Mobile",
      icon: "ico-menu-unknown",
    },
  };

  return (
    <>
      <div className="CodeForm-Menu">
        <div className="CodeForm-Header-Left">
          {Object.keys(viewModeItems).map((key) => (
            <ImageButton
              isActive={key == selectedViewPort}
              onClick={() => {
                setSelectedViewMode(key);
                setViewMode(viewModeItems[key].value);
              }}
              alt={viewModeItems[key].alt}
              icon={viewModeItems[key].icon}
            />
          ))}
        </div>

        <span> | </span>

        <div className="CodeForm-Header-Right">
          {Object.keys(preViewItems).map((key) => (
            <ImageButton
              isActive={key == selectedPreView}
              onClick={() => {
                setSelectedPreView(key);
                setPreview(preViewItems[key].value);
              }}
              alt={preViewItems[key].alt}
              icon={preViewItems[key].icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
