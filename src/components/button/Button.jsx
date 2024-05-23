import "./Button.css";

const Button = ({ onClick, children, isActive }) => {
  return (
    <>
      <span
        className={"CodeForm-Button " + (isActive ? "Active" : "")}
        onClick={onClick}
      >
        {children}
      </span>
    </>
  );
};

export default Button;
