const Input = ({ label, id, ...props }) => {
  return (
    <div className="my-2 flex flex-col items-center justify-center overflow-auto">
      <label className="form-label mx-2">{label}</label>
      <input className="form-text px-2 py-1 text-sm" id={id} {...props} />
    </div>
  );
};

export default Input;
