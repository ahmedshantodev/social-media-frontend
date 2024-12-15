import React, { useEffect } from "react";

const AutoResizeTextarea = ({
  id,
  row,
  name,
  value,
  style,
  onChange,
  className,
  maxLength,
  textareaRef,
  placeholder,
}) => {
  useEffect(() => {
    const textarea = textareaRef?.current;

    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }, []);

  return (
    <div>
      <textarea
        rows={row}
        ref={textareaRef}
        id={id}
        name={name}
        value={value}
        style={style}
        maxLength={maxLength}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default AutoResizeTextarea;
