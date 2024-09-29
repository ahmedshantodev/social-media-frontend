import React from "react";

const ContactListItem = ({ index, image, name }) => {
  return (
    <div className="flex items-center gap-x-2.5 p-2 rounded-[10px] cursor-pointer hover:bg-tertiary-bg transition-all duration-150 ease-linear">
      <div className="w-[40px] aspect-square rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full" />
      </div>

      <h2 className="text-base font-medium font-poppins text-primary-text">
        {name}
      </h2>
    </div>
  );
};

export default ContactListItem;
