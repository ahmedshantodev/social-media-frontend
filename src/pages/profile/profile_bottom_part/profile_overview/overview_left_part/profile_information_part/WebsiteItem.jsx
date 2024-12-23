import React, { useState } from "react";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import websiteIcon from "/public/images/user-info-icon/website.png";

const WebsiteItem = ({ index, link, information, setInformation }) => {
  const [isWebsiteEditAreaShow, setIsWebsiteEditAreaShow] = useState(false);
  const [editedLink, setEditedLink] = useState(information?.website[index].link);

  const handleEditCancel = () => {
    setEditedLink(information?.website[index].link);

    setIsWebsiteEditAreaShow(false);
  };

  const handleEditWebsiteItem = () => {
    if (editedLink === "") {
      alert("please enter website link");
    } else {
      setInformation((prev) => ({
        ...prev,
        website: [
          ...prev.website.slice(0, index),
          { link: editedLink },
          ...prev.website.slice(index + 1),
        ],
      }));

      setIsWebsiteEditAreaShow(false);
    }
  };

  const deleteWebsiteItem = () => {
    setInformation((prev) => ({
      ...prev,
      website: [
        ...prev.website.slice(0, index),
        ...prev.website.slice(index + 1),
      ],
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2.5 mb-4">
          <div className="w-[23px] aspect-square">
            <img
              src={websiteIcon}
              alt={"website-icon"}
              className="w-full h-full object-cover"
            />
          </div>

          <a
            target="_blank"
            href={link}
            className="text-[#0064d1] font-medium text-lg font-inter hover:underline"
          >
            {link}
          </a>
        </div>

        <div className="flex items-center gap-x-1">
          <FiEdit
            title="edit"
            onClick={() => setIsWebsiteEditAreaShow(true)}
            className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
          />

          <AiOutlineDelete
            title="delete"
            onClick={deleteWebsiteItem}
            className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
          />
        </div>
      </div>

      {isWebsiteEditAreaShow && (
        <div>
          <div>
            <p className="mb-2 font-inter">Website link</p>

            <input
              type="text"
              value={editedLink}
              placeholder="Enter your website link"
              onChange={(e) => setEditedLink(e.target.value)}
              className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
            />
          </div>

          <div className="mt-2 flex items-center justify-end gap-x-2">
            <SecondaryButton onClick={handleEditCancel}>Cancel</SecondaryButton>

            <PrimaryButton onClick={handleEditWebsiteItem}>Save</PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteItem;
