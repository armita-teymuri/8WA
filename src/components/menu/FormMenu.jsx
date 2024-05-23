import "./FormMenu.css";
import ImageButton from "../image_button/ImageButton";

const FormMenu = ({ onSelect }) => {
  const elements = {
    1: {
      icon: "1004",
      alt: "Text",
      element: <input type="text" readOnly />,
    },
    2: {
      icon: "1003",
      alt: "Button",
      element: <input type="button" value="Button" />,
    },
    3: {
      icon: "1001",
      alt: "Radio",
      element: <input type="radio" />,
    },
    4: {
      icon: "1002",
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
