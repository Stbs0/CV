import { useField } from "../hooks/useField";
import { useSelector } from "react-redux";
import {
  setCompany,
  setPosition,
  setResponsibilities,
  setStartDate,
  setEndDate,
} from "../reducers/experienceReducer";
import Input from "./Input";
import { useState } from "react";
const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const experienceInfo = useSelector((state) => state.experience);
  const company = useField("text", experienceInfo.company, setCompany);
  const position = useField("text", experienceInfo.position, setPosition);
  const responsibilities = useField(
    "text-box",
    experienceInfo.responsibilities,
    setResponsibilities,
  );
  const startDate = useField("date", experienceInfo.startDate, setStartDate);
  const endDate = useField("date", experienceInfo.endDate, setEndDate);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex max-w-lg flex-col rounded-lg bg-gray-100 shadow-md">
      <button
        className="flex w-full justify-between px-3 py-2"
        onClick={handleClick}
      >
        <span className="text-lg font-bold">Experience Information</span>{" "}
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`grid gap-3 overflow-hidden bg-slate-200 transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} `}
      >
        <div className="overflow-hidden rounded-md">
          <Input label="Company Name" id="company" {...company} />
          <Input label="position" id="position" {...position} />
          <label className="flex flex-col" htmlFor="responsibilities">
            responsibilities{" "}
            <textarea
              className="w-1/2 place-self-center rounded-md border border-slate-300 p-2 text-sm"
              label="responsibilities"
              id="responsibilities"
              {...responsibilities}
            />
          </label>

          <Input label="the day you started" id="startDate" {...startDate} />
          <Input label="the day you ended" id="endDate" {...endDate} />
        </div>
      </div>
    </div>
  );
};
export default Experience;
