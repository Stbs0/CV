import { useField } from "../hooks/useField";
import { setDegree, setSchool, setYear } from "../reducers/educationReducer";
import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "./Input";
const EducationInfo = () => {  const [isOpen, setIsOpen] = useState(false);

  const educationInfo = useSelector((state) => state.education);
  const school = useField("text", educationInfo.school, setSchool);
  const degree = useField("text", educationInfo.degree, setDegree);
  const year = useField("date", educationInfo.year, setYear);
  console.log(school);
   const handleClick = () => {
     setIsOpen(!isOpen);
   };
  return (
    <div className="flex max-w-lg flex-col rounded-lg bg-gray-100 shadow-md">
      <button
        className="flex w-full justify-between px-3 py-2"
        onClick={handleClick}
      >
        <span className="text-lg font-bold">Educational Information</span>{" "}
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`grid gap-3 overflow-hidden bg-slate-200 transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} `}
      >
        <div className="overflow-hidden rounded-md">
          <Input label="School" id="school" {...school} />
          <Input label="Degree" id="degree" {...degree} />
          <Input label="Graduation year" id="year" {...year} />
        </div>
      </div>
    </div>
  );
};
export default EducationInfo;
