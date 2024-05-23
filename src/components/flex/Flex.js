import { useState } from "react";

const Flex = ({ preview = true }) => {
  const [cell, setCell] = useState([<p>ABC</p>, <input />]);

  const handlePlusClick = (index) => {
    const tmp = cell.slice();
    tmp.splice(index + 1, 0, <label>Hello</label>);
    setCell(tmp);
  };

  const plus = (preview, index) => {
    if (preview)
      return (
        <div className="IWA-Flex-Cell" onClick={()=>{handlePlusClick(index)}}>
          +
        </div>
      );
    else return <></>;
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {plus(preview, -1)}
        {cell.map((c, i) => (
          <>
            <div style={{ flex: 1, textAlign: "center" }}>{c}</div>
            {plus(preview, i)}
          </>
        ))}
      </div>
    </>
  );
};

export default Flex;
