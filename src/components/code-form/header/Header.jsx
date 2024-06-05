import "./Header.css";
import { useContext, useState } from "react";
import ImageButton from "../image_button/ImageButton";
import PreviewContext from "../../../contexts/previewContext";
import FormMenu from "../menu/FormMenu";

const Header = () => {
  const { setPreview } = useContext(PreviewContext);
  const [selectedPreView, setSelectedPreView] = useState(1);

  const preViewItems = {
    1: { value: false, alt: "Design", icon: "9999" },
    2: { value: true, alt: "Preview", icon: "9999" },
    3: { value: false, alt: "BluePrint", icon: "9999" },
  };

  return (
    <>
      <div className="CodeForm-Menu">
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

        {selectedPreView == 1 ? (
          <>
            <span> | </span>
            <FormMenu />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
