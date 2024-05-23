import "./Adder.css";

const style = {
  isActive: {
    backgroundColor: "green",
  },
};

const Adder = ({ row, isActive, onClick }) => {
  return (
    <>
      <div
        className={"CodeForm-Adder " + (isActive ? "Active" : "")}
        onClick={() => {
          onClick(row);
        }}
      >
        <span>R{row}</span>
      </div>
    </>
  );
};

export default Adder;
