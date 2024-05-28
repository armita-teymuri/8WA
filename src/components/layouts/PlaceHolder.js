import { useContext } from "react";
import PreviewContext from "../../contexts/previewContext";

const style = {
  placeholder: {
    display: "block",
    padding: "1em",
    fontSize: "80%",
    color: "lightgray",
    userSelect: "none",
  },
};

const PlaceHolder = () => {
  const {preview, setPreview} = useContext(PreviewContext);

  return (
    <>
      {preview ? (
        <></>
      ) : (
        <span className="IWA-DragHere" style={style.placeholder}>Drag</span>
      )}
    </>
  );
};

export default PlaceHolder;
