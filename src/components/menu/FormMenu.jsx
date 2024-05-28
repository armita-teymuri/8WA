import "./FormMenu.css";
import ImageButton from "../image_button/ImageButton";

const ELEMENTS = {
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
  // 5: 0
};

const FormMenu = ({ onSelect }) => {
  return (
    <>
      <div style={{ display: "inline-block" }}>
        {Object.keys(ELEMENTS).map((key) =>
          ELEMENTS[key] == 0 ? (
            <>
              <span> | </span>
            </>
          ) : (
            <ImageButton
              key={key}
              elementId={key}
              onClick={() => {
                onSelect(ELEMENTS[key].element);
              }}
              alt={ELEMENTS[key].alt}
              icon={ELEMENTS[key].icon}
            />
          )
        )}
      </div>
    </>
  );
};

export default FormMenu;

export { ELEMENTS };
