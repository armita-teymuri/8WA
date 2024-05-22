import "./Adder.css";

const Adder = ({ row, onClick }) => {
  return (
    <>
      <div
        className="CodeForm-Adder"
        onClick={() => {
          onClick(row);
        }}
      ></div>
    </>
  );
};

export default Adder;
