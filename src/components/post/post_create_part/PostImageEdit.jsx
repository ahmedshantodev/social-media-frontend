import React, { useState } from "react";

const PostImageEdit = () => {
  const [isImageRemoveShow, setIsImageRemoveShow] = useState(false);

  const handleImageRemove = (index) => {
    const newImage = postImages.filter((item, findex) => index !== findex);
    setPostImages(newImage);
  };
  
  return (
    <div className="border border-primary-border p-2.5 rounded-[6px] mb-2 mt-2">
      <div>
        <button onClick={() => setIsImageRemoveShow(false)} className="">
          back
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {postImages.map((item, index) => (
          <div
            key={index}
            className="w-[49%] aspect-square relative border border-primary-border rounded-lg overflow-hidden"
          >
            <img
              src={item}
              alt="images"
              className={"w-full h-full object-cover"}
            />

            <button
              onClick={() => handleImageRemove(index)}
              className={
                "box-content bg-white px-5 py-2 rounded-md absolute top-3 right-3 z-10 text-sm font-poppins text-secondary-text border border-primary-border hover:bg-tertiary-bg"
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostImageEdit;
