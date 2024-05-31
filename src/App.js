import { useState, useEffect } from "react";
import Flex from "./components/layouts/Flex";
import Adder from "./components/adder/Adder";
import Header from "./components/header/Header";
import PreviewContext from "./contexts/previewContext";
import PlaceHolder from "./components/layouts/PlaceHolder";
import FormMenu, { ELEMENTS } from "./components/menu/FormMenu";

const DRAG_OVER = "IWA-Cell-Drag-Over";

const style = {
  p: {
    display: "block",
    /* */
    color: "white",
    padding: "1em",
    fontSize: "60%",
    fontWeight: "bold",
    textAlign: "center",
    background: "tomato",
  },
};

const App = () => {
  const [viewMode, setViewMode] = useState("");
  const [preview, setPreview] = useState(false);
  const [data, setData] = useState([
    [<p style={style.p}>DESIGN YOR OWN PRODUCT</p>],
  ]);

  useEffect(() => {}, [data]);

  /* ***************************************************************** */

  const removeClass = () => {
    let elements = document.getElementsByClassName(DRAG_OVER);
    elements[0] && elements[0].classList.remove(DRAG_OVER);
  };

  document.ondragstart = function (event) {
    event.dataTransfer.setData("el", event.target.getAttribute("elementId"));
  };

  document.ondragend = function () {
    removeClass();
  };

  /* Events fired on the drop target */
  document.ondragover = function (event) {
    event.preventDefault();
    removeClass();

    if (event.target.classList.contains("IWA-DragHere"))
      event.target.className += " " + DRAG_OVER;
  };

  document.ondrop = function (event) {
    event.preventDefault();
    const elementId = event.dataTransfer.getData("el");
    // alert(item);

    // let newElement = document.createElement("label");
    // newElement.id = "div1";
    // newElement.textContent = "Hello DIV";

    if (event.target.classList.contains("IWA-DragHere")) {
      console.log(ELEMENTS[elementId].icon,elementId);
      // event.target.replaceChild(ELEMENTS[parseInt(elementId)].element,event.target.firstChild);

      let r = parseInt(event.target.parentNode.getAttribute("r"));
      let c = parseInt(event.target.parentNode.getAttribute("c"));
      console.log(r, c);

      const tmpRow = data[r].slice();
      tmpRow[c] = ELEMENTS[elementId].element;
      const tmpData = data.slice();
      tmpData[r] = tmpRow;
      setData(tmpData);
    }
  };

  /* ***************************************************************** */

  const getAdder = (row) => {
    return (
      <Adder
        key={row}
        row={row}
        onClick={(row) => {
          handleSelect(row);
        }}
      />
    );
  };

  const handleSelect = (row) => {
    const tmp = data.slice();
    tmp.splice(row, 0, [<PlaceHolder />]);
    setData(tmp);
  };

  /* ***************************************************************** */

  return (
    <PreviewContext.Provider value={{ preview, setPreview }}>
      <>
        <Header setViewMode={setViewMode} />
        <FormMenu />
        <div className={"CodeForm-ViewMode " + viewMode}>
          {!preview ? getAdder(0) : ""}
          {data.map((_, rowIndex) => (
            <>
              {<Flex data={data} setData={setData} rowIndex={rowIndex} />}
              {!preview ? getAdder(rowIndex + 1) : ""}
            </>
          ))}
        </div>
      </>
    </PreviewContext.Provider>
  );
};

export default App;
