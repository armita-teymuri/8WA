import "./LayoutMenu.css";
import ImageButton from "../image_button/ImageButton";
import Flex from "../flex/Flex";

const LayoutMenu = ({ onSelect }) => {
  const elements = {
    1: {
      icon: "9999",
      alt: "Flex",
      element: <Flex />,
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

export default LayoutMenu;
