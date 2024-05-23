import "./FormMenu.css";
import ImageButton from "../image_button/ImageButton";

const FormMenu = ({ onSelect }) => {
  const elements = {
    1: {
      icon: "ico-menu-form-text",
      alt: "Text",
      element: <input type="text" />,
    },
    2: {
      icon: "ico-menu-form-button",
      alt: "Button",
      element: <input type="button" value="Button" />,
    },
    3: {
      icon: "ico-menu-form-radio",
      alt: "Radio",
      element: <input type="radio" />,
    },
    4: {
      icon: "ico-menu-form-check",
      alt: "Check",
      element: <input type="checkbox" />,
    },
  };
  return (
    <>
      <div style={{ display: "inline-block" }}>
        {Object.keys(elements).map((key) => (
          <ImageButton
            onClick={() => {
              onSelect(elements[key].element);
            }}
            alt={elements[key].alt}
            icon={elements[key].icon}
          />
        ))}
      </div>
    </>
  );
};

export default FormMenu;
