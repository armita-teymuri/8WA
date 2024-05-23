import "./ImageButton.css";

const ImageButton = ({ onClick, alt, icon, isActive }) => {
  return (
    <>
      <div
        className={"CodeForm-ImageButton " + (isActive ? "Active" : "")}
        onClick={onClick}
      >
        <img src={"/icons/" + icon + ".png"} />
        <span>{alt}</span>
      </div>
    </>
  );
};

export default ImageButton;
