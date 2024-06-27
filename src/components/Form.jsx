import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./Education";
import Experience from "./Experience";
import Toggable from "./Toggable";
import { useRef } from "react";
const Form = () => {
  const ref = useRef();
  return (
    <>
      <div className="flex flex-col">
        <PersonalInfo />
      </div>

      <div className="flex flex-col">
        <EducationInfo />
      </div>
      <div className="flex flex-col">
        <Experience />
      </div>
    </>
  );
};
export default Form;
