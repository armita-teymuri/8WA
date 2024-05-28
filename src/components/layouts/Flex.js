import { useContext, useEffect, useState } from "react";
import PlaceHolder from "./PlaceHolder";
import PreviewContext from "../../contexts/previewContext";

const style = {
  holder: {},
};

const Flex = () => {
  const { preview, setPreview } = useContext(PreviewContext);
  const [cell, setCell] = useState([<PlaceHolder />]);

  const handlePlusClick = (index) => {
    const tmp = cell.slice();
    tmp.splice(index + 1, 0, <PlaceHolder />);
    setCell(tmp);
  };

  const plus = ( index) => {
    if (!preview)
      return (
        <div
          className="IWA-Flex-Cell"
          onClick={() => {
            handlePlusClick(index);
          }}
        >
          +
        </div>
      );
    else return <></>;
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {plus( -1)}
        {cell.map((element, index) => (
          <>
            <div style={{ flex: 1, textAlign: "center" }}>{element}</div>
            {plus( index)}
          </>
        ))}
      </div>
    </>
  );
};

export default Flex;
