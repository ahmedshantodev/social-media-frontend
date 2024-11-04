import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostCreateEditorPart = ({ user, text, setText }) => {
  const scrollToViewRef = useRef();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  // scroll to view function
  // useEffect(() => {
  //   scrollToViewRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [text]);

  return (
    <div className="mt-3 mb-1">
      <ReactQuill
        theme="snow"
        modules={modules}
        value={text}
        onChange={setText}
        placeholder={`What's on your mind. ${user?.firstName}?`}
      />

      <div ref={scrollToViewRef} />
    </div>
  );
};

export default PostCreateEditorPart;
