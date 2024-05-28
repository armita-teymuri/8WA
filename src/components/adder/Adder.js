import "./Adder.css";

const Adder = ({ row, isActive, onClick }) => {
  return (
    <>
      <div
        className={"CodeForm-Adder " + (isActive ? "Active" : "")}
        onClick={() => {
          onClick(row);
        }}
      >
        <span>+{row}</span>
      </div>
    </>
  );
};

export default Adder;
