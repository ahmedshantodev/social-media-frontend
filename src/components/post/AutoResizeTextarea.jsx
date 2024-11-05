// import React, { useEffect, useRef } from "react";

// const AutoResizeTextarea = ({
//   id,
//   name,
//   text,
//   style,
//   setText,
//   className,
//   maxlength,
//   // textareaRef,
//   placeholder,
// }) => {
//   const textareaRef = useRef(null)
//   useEffect(() => {
//     const textarea = textareaRef.current;
//     textarea.style.height = "auto";
//     textarea.style.height = `${textarea.scrollHeight}px`;
//   }, [text]);

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <textarea
//       id={id}
//       name={name}
//       value={text}
//       style={style}
//       ref={textareaRef}
//       maxlength={maxlength}
//       className={className}
//       onChange={handleChange}
//       placeholder={placeholder}
//     />
//   );
// };

// export default AutoResizeTextarea;

import React, { useEffect } from "react";

const AutoResizeTextarea = ({
  id,
  row,
  name,
  value,
  style,
  onChange,
  className,
  maxlength,
  textareaRef,
  placeholder,
}) => {
  useEffect(() => {
    const textarea = textareaRef.current;

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
        maxlength={maxlength}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default AutoResizeTextarea;
