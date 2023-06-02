import React from "react";
import { ErrorOutlineOutlinedIcon, RemoveRedEyeOutlinedIcon, VisibilityOffOutlinedIcon } from "asset";

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  onFocus,
  error,
  toggleHide,
  hidePassword
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-md font-medium text-deepBlue">
        {label}
      </label>
      <div className="relative mt-1 ">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          className="block w-full p-2 sm:text-sm border border-deepBlue rounded-md"
        />
        {toggleHide && (
          <span
            className={`absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ${
              hidePassword ? "text-customGreen" : "text-deepBlue"
            }`}
            onClick={toggleHide}
          >
            {hidePassword ? (
              <VisibilityOffOutlinedIcon/>
            ) : (
              <RemoveRedEyeOutlinedIcon />
            )}
          </span>
        )}
      </div>
      {error && (
        <div className="mt-2 text-sm text-red-600 flex items-center">
          <ErrorOutlineOutlinedIcon className="mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

export { InputField };
