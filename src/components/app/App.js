import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Adder from "../adder/Adder";

const Menu = () => {
  return (
    <>
      <div>
        <span>Label</span>
        <span>Input</span>
        <span>Image</span>
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
            onClick={() => {
              setViewMode("CodeForm-ViewMode-Desktop");
            }}
          >
            Desktop
          </span>
          <span>|</span>
          <span
            onClick={() => {
              setViewMode("CodeForm-ViewMode-Tablet");
            }}
          >
            Tablet
          </span>
          <span>|</span>
          <span
            onClick={() => {
              setViewMode("CodeForm-ViewMode-Mobile");
            }}
          >
            Mobile
          </span>
        </div>

        <div className="CodeForm-Header-Right">
          <span
            onClick={() => {
              setPreview(true);
            }}
          >
            Preview
          </span>
          <span>|</span>
          <span
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

  return (
    <>
      <Header setPreview={setPreview} setViewMode={setViewMode} />
      <div className={viewMode}>
        {data.map((item, row) => (
          <>
            {item}

            {!preview ? (
              <Adder
                row={row}
                onClick={(row) => {
                  var tmp = data.slice();
                  tmp.splice(
                    row + 1,
                    0,
                    <div className="CodeForm-Row">
                      <label>Test</label>
                    </div>
                  );
                  console.log(tmp);
                  setData(tmp);
                }}
              />
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default App;
