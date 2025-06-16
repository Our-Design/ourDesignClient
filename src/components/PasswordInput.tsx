import React from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

type PasswordInputProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  state: string;
  setter: (state: string) => void;
  placeholder?: string;
};

const PasswordInput = ({
  isVisible,
  setIsVisible,
  state,
  setter,
  placeholder = "Password",
}: PasswordInputProps) => {
  return (
    <>
      <div className="border outline-none rounded flex items-center justify-between">
        <input
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          className="p-2 outline-none flex-grow"
          value={state}
          onChange={(e) => setter(e.target.value)}
        />
        <span
          className="text-xl cursor-pointer px-2"
          onClick={() => setIsVisible(!isVisible)}
        >
          {!isVisible ? <IoMdEyeOff /> : <IoMdEye />}
        </span>
      </div>
    </>
  );
};

export default PasswordInput;
