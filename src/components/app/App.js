import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Adder from "../adder/Adder";
import Header from "../header/Header";
import MainMenu from "../menu/MainMenu";

const App = () => {
  const [data, setData] = useState([
    <div className="CodeForm-Row">
      <p style={{ color: "tomato" }}>Design your own product</p>
    </div>,
  ]);

  const [preview, setPreview] = useState(false);
  const [viewMode, setViewMode] = useState("");
  const [selectedAdderIndex, setSelectedAdderIndex] = useState(-2);

  useEffect(() => {}, [data]);

  const getElement = (el) => {
    return <div className="CodeForm-Row">{el}</div>;
  };

  const getAdder = (row) => {
    return (
      <Adder
        isActive={selectedAdderIndex == row}
        row={row}
        onClick={(row) => {
          setSelectedAdderIndex(row);
        }}
      />
    );
  };

  const handleSelect = (el) => {
    const row = selectedAdderIndex;
    const tmp = data.slice();
    tmp.splice(row + 1, 0, getElement(el));
    setData(tmp);
    setSelectedAdderIndex(-2)
  };

  return (
    <>
      <Header setPreview={setPreview} setViewMode={setViewMode} />
      <MainMenu
        onSelect={(el) => {
          handleSelect(el);
        }}
      />
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
