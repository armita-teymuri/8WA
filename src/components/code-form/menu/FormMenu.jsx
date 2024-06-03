import "./FormMenu.css";
import M_Card from "../../menu-items/M_Card";
import M_NavBar from "../../menu-items/M_NavBar";
import M_Button from "../../menu-items/M_Button";
import M_Footer from "../../menu-items/M_Footer";
import ImageButton from "../image_button/ImageButton";
import M_Pagination from "../../menu-items/M_Pagination";
import M_BreadCrumbs from "../../menu-items/M_BreadCrumbs";
import M_Tab from "../../menu-items/M_Tab";
import N_Button from "../../menu-items2/button/N_Button";

const ELEMENTS = {
  1: {
    icon: "M001",
    alt: "NavBar",
    element: <M_NavBar />,
  },
  2: {
    icon: "M002",
    alt: "Pagination",
    element: <M_Pagination />,
  },
  3: {
    icon: "M003",
    alt: "Button",
    element: <N_Button />,
  },
  4: {
    icon: "M004",
    alt: "BreadCrumbs",
    element: <M_BreadCrumbs />,
  },
  5: {
    icon: "M005",
    alt: "Card",
    element: <M_Card />,
  },
  6: {
    icon: "M006",
    alt: "Footer",
    element: <M_Footer />,
  },
  7: {
    icon: "M007",
    alt: "Tab",
    element: <M_Tab />,
  },
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
