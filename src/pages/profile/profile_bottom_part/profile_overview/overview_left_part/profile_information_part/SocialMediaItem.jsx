import React, { useState } from "react";
import linkedin from "/public/images/user-info-icon/linkedin.png";
import instagram from "/public/images/user-info-icon/ig.png";
import x from "/public/images/user-info-icon/x.png";
import skype from "/public/images/user-info-icon/skype.png";
import github from "/public/images/user-info-icon/github.png";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const SocialMediaItem = ({ index, name, link, details, setDetails }) => {
  const [isSocialMediaEditAreaShow, setIsSocialMediaEditAreaShow] = useState(false);
  const [editedName, setEditedName] = useState(details?.socialMedia[index].name);
  const [editedLink, setEditedLink] = useState(details?.socialMedia[index].link);

  const handleEditCancel = () => {
    setEditedName(details?.socialMedia[index].name);
    setEditedLink(details?.socialMedia[index].link);

    setIsSocialMediaEditAreaShow(false);
  };

  const handleEditSocialItem = () => {
    if (editedName === "") {
      alert("please enter social media name");
    } else if (editedLink === "") {
      alert("please enter social media link");
    } else {
      setDetails((prev) => ({
        ...prev,
        socialMedia: [
          ...prev.socialMedia.slice(0, index),
          {
            name: editedName,
            link: editedLink,
          },
          ...prev.socialMedia.slice(index + 1),
        ],
      }));

      setIsSocialMediaEditAreaShow(false);
    }
  };

  const deleteSocialLinkItem = () => {
    setDetails((prev) => ({
      ...prev,
      socialMedia: [
        ...prev.socialMedia.slice(0, index),
        ...prev.socialMedia.slice(index + 1),
      ],
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2.5 mb-4">
          <div className="w-[23px] aspect-square">
            <img
              src={
                name === "instagram"
                  ? instagram
                  : name === "x (twitter)"
                  ? x
                  : name === "skype"
                  ? skype
                  : name === "linkedin"
                  ? linkedin
                  : github
              }
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <a
            target="_blank"
            href={link}
            className="text-[#0064d1] font-medium text-lg font-inter hover:underline"
          >
            {name}
          </a>
        </div>

        <div className="flex items-center gap-x-1">
          <FiEdit
            title="edit"
            onClick={() => setIsSocialMediaEditAreaShow(true)}
            className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
          />

          <AiOutlineDelete
            title="delete"
            onClick={deleteSocialLinkItem}
            className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
          />
        </div>
      </div>

      {isSocialMediaEditAreaShow && (
        <div>
          <div className="mb-2">
            <p className="mb-2 font-inter">Social media name</p>

            <div className="pr-5 border border-primary-border rounded-md overflow-hidden">
              <select
                name="social-name"
                id="social-name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="w-full py-2.5 px-5 outline-none capitalize"
              >
                <option value="linkedin">linkedin</option>
                <option value="instagram">instagram</option>
                <option value="x (twitter)">x (twitter)</option>
                <option value="skype">skype</option>
                <option value="github">github</option>
              </select>
            </div>
          </div>

          <div>
            <p className="mb-2 font-inter">Social media link</p>

            <input
              type="text"
              value={editedLink}
              placeholder="Enter your social media link"
              onChange={(e) => setEditedLink(e.target.value)}
              className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
            />
          </div>

          <div className="mt-2 flex items-center justify-end gap-x-2">
            <SecondaryButton
               onClick={handleEditCancel}
            >
              Cancel
            </SecondaryButton>

            <PrimaryButton
               onClick={handleEditSocialItem}
            >
              Save
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaItem;
