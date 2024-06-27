import { useField } from "../hooks/useField";
import { useState } from "react";
import {
  setEmail,
  setName,
  setPhone,
  setAddress,
} from "../reducers/pesonalReducer";
import Input from "./Input";
import { useSelector } from "react-redux";
const PersonalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const personalData = useSelector((state) => state.personal);
  const name = useField("text", personalData.name, setName);
  const email = useField("email", personalData.email, setEmail);
  const phoneNumber = useField("tel", personalData.phone, setPhone);
  const address = useField("address", personalData.address, setAddress);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex max-w-lg flex-col rounded-lg bg-gray-100 shadow-md">
      <button
        className="flex w-full justify-between px-3 py-2"
        onClick={handleClick}
      >
        <span className="text-lg font-bold">Personal Information</span>{" "}
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`grid gap-3 overflow-hidden bg-slate-200 transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} `}
      >
        <div className="overflow-hidden rounded-md">
          <Input label="Name" id="name" {...name} />
          <Input label="Email" id="email" {...email} />
          <Input label="Phone Number" id="phone" {...phoneNumber} />
          <Input label="Address" id="address" {...address} />
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
