import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Adder from "../adder/Adder";

const Menu = ({ onSelect }) => {
  const elements = {
    1: <label>Label</label>,
    2: <input />,
    3: <img />,
  };
  return (
    <>
      <div>
        <span onClick={() => onSelect(elements[1])}>Label</span>
        <span onClick={() => onSelect(elements[2])}>Input</span>
        <span onClick={() => onSelect(elements[3])}>Image</span>
      </div>
    </>
  );
};

const Header = ({ setPreview, setViewMode }) => {
  return (
    <>
      <div className="CodeForm-Header">
        <div className="CodeForm-Header-Left">
          <span
            className="CodeForm-ViewMode-Button"
            onClick={() => {
              setViewMode("CodeForm-ViewMode-Desktop");
            }}
          >
            Desktop
          </span>
          <span>|</span>
          <span
            className="CodeForm-ViewMode-Button"
            onClick={() => {
              setViewMode("CodeForm-ViewMode-Tablet");
            }}
          >
            Tablet
          </span>
          <span>|</span>
          <span
            className="CodeForm-ViewMode-Button"
            onClick={() => {
              setViewMode("CodeForm-ViewMode-Mobile");
            }}
          >
            Mobile
          </span>
        </div>

        <div className="CodeForm-Header-Right">
          <span
            className="CodeForm-EditMode-Button"
            onClick={() => {
              setPreview(true);
            }}
          >
            Preview
          </span>
          <span>|</span>
          <span
            className="CodeForm-EditMode-Button"
            onClick={() => {
              setPreview(false);
            }}
          >
            Design
          </span>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [data, setData] = useState([
    <div className="CodeForm-Row">
      <input />
    </div>,
    <div className="CodeForm-Row">
      <label>Label1</label>
    </div>,
    <div className="CodeForm-Row">
      <label>Label1</label>
    </div>,
    <div className="CodeForm-Row">
      <textarea />
    </div>,
  ]);

  const [preview, setPreview] = useState(false);
  const [viewMode, setViewMode] = useState("");

  useEffect(() => {}, [data]);

  const getElement = () => {
    return (
      <div className="CodeForm-Row">
        <label>Test</label>
      </div>
    );
  };

  const getAdder = (row) => {
    return (
      <Adder
        row={row}
        onClick={(row) => {
          var tmp = data.slice();
          tmp.splice(row + 1, 0, getElement());
          setData(tmp);
        }}
      />
    );
  };

  return (
    <>
      <Header setPreview={setPreview} setViewMode={setViewMode} />
      <div className={"CodeForm-ViewMode " + viewMode}>
        {!preview ? getAdder(-1) : ""}
        {data.map((item, row) => (
          <>
            {item}
            {!preview ? getAdder(row) : ""}
          </>
        ))}
      </div>
    </>
  );
};

export default App;
