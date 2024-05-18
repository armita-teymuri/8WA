import "./Adder.css"

const Adder = ({ row, onClick }) => {
  return (
    <>
      <div className="CodeForm-Adder">
        <span
          className="CodeForm-Adder-Plus"
          onClick={() => {
            onClick(row);
          }}
        >
          +
        </span>
      </div>
    </>
  );
};


export default Adder;
