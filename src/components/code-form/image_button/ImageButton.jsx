import "./ImageButton.css";

const ImageButton = ({
  alt,
  icon,
  onClick = () => {},
  isActive,
  elementId,
}) => {
  return (
    <>
      <div
        elementId={elementId}
        className={"CodeForm-ImageButton " + (isActive ? "Active" : "")}
        onClick={onClick}
        draggable="true"
      >
        {/* <img draggable="false" src={"/icons/" + icon + ".png"} /> */}
        <span draggable="false">{alt}</span>
      </div>
    </>
  );
};

export default ImageButton;
