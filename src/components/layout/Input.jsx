import React, { useEffect, useRef } from "react";

const input = ({
  id,
  name,
  type,
  value,
  error,
  label,
  onChange,
  className,
  placeholder,
}) => {
  // to prevent tab key from jumping to the next form field?
  const inputRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    inputRef.current?.addEventListener("keydown", handleKeyDown);

    return () => {
      inputRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={
            "block text-xl font-segoe-ui font-medium text-secondary-text mb-[6px]"
          }
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        ref={inputRef}
        onChange={onChange}
        placeholder={placeholder}
        className={
          error
            ? "w-full border-2 border-[#f87179] focus:outline-none py-4 px-5 rounded-[6px] font-poppins text-primary-text placeholder:font-poppins placeholder:text-[#f87179]"
            : "w-full border-2 border-[#a8c7fa] focus:outline-none py-4 px-5 rounded-[6px] font-poppins text-primary-text placeholder:font-inter"
        }
      />

      {error && (
        <p className="text-[15px] text-[#f87179] absolute top-full left-0 font-inter">
          {error}
        </p>
      )}
    </div>
  );
};

export default input;
