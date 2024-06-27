
import { useDispatch } from "react-redux";
export const useField = (type, value, fn) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(fn(e.target.value));
  };
  return {
    type,
    onChange,
    value,
  };
};
