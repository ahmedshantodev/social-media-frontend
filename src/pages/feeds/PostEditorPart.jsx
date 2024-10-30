import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostEditorPart = ({ text, setText }) => {
  const scrollToViewRef = useRef();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  useEffect(() => {
    scrollToViewRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [text]);

  return (
    <div className="mt-3 mb-2 mr-1 shanto">
      <ReactQuill
        theme="snow"
        modules={modules}
        value={text}
        onChange={setText}
        placeholder="What's on your mind. Monsur?"
      />

      <div ref={scrollToViewRef} />
    </div>
  );
};

export default PostEditorPart;
