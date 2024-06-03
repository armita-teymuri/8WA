import { useContext, useEffect, useState } from "react";
import PlaceHolder from "./PlaceHolder";
import PreviewContext from "../../../contexts/previewContext";

const style = {
  holder: {},
};

const Flex = ({ data, setData, rowIndex }) => {
  const { preview, setPreview } = useContext(PreviewContext);
  // const [cell, setCell] = useState(rowElements); // this is a list like [<p/>,<br/>,...]

  const handlePlusClick = (index) => {
    const tmpRow = data[rowIndex].slice();
    tmpRow.splice(index + 1, 0, <PlaceHolder />);

    const tmpData = data.slice();
    tmpData[rowIndex] = tmpRow;

    setData(tmpData);
  };

  const plus = (index) => {
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
        {plus(-1)}
        {data[rowIndex].map((element, index) => (
          <>
            <div
              r={rowIndex}
              c={index}
              style={{ flex: 1, textAlign: "center" }}
            >
              {element}
            </div>
            {plus(index)}
          </>
        ))}
      </div>
    </>
  );
};

export default Flex;
