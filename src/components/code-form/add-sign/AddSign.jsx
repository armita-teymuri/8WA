import "./AddSign.css";

const AddSign = ({ onClick }) => {
  return (
    <div className="CF_AddSign_Holder">
      <div className="CF_AddSign" onClick={onClick}></div>
    </div>
  );
};

export default AddSign;
