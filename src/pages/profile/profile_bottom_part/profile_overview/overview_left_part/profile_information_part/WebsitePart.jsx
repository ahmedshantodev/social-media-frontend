import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";
import WebsiteItem from "./WebsiteItem";

const WebsitePart = ({ information, setInformation }) => {
  const [isAddNewWebsiteLinkAreaShow, setIsAddNewWebsiteLinkAreaShow] = useState(false);
  const [link, setLink] = useState("");

  const addNewEducationItem = () => {
    if (link === "") {
      alert("please enter website link");
    } else {
      setInformation((prev) => ({
        ...prev,
        website: [
          ...prev.website,
          { link: link },
        ],
      }));

      setLink("");
      setIsAddNewWebsiteLinkAreaShow(false);
    }
  };
  return (
    <div>
      <p className="text-primary-text font-segoe-ui font-semibold text-xl mb-4">
        Website
      </p>

      <div>
        {information?.website?.map((item, index) => (
          <WebsiteItem
            key={index}
            index={index}
            link={item.link}
            information={information}
            setInformation={setInformation}
          />
        ))}
      </div>

      <div className="mt-2">
        {isAddNewWebsiteLinkAreaShow && (
          <div>
            <div>
              <p className="mb-2 font-inter">Website link</p>

              <input
                type="text"
                id="subject"
                placeholder="Enter your website link"
                onChange={(e) => setLink(e.target.value)}
                className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
              />
            </div>

            <div className="mt-2 flex items-center justify-end gap-x-2">
              <SecondaryButton
                onClick={() => setIsAddNewWebsiteLinkAreaShow(false)}
              >
                Cancel
              </SecondaryButton>

              <PrimaryButton onClick={addNewEducationItem}>Save</PrimaryButton>
            </div>
          </div>
        )}
      </div>

      {!isAddNewWebsiteLinkAreaShow && (
        <button
          onClick={() => setIsAddNewWebsiteLinkAreaShow(true)}
          className="mt-2 flex items-center gap-x-2"
        >
          <div className="border-2 border-primary-button rounded-full">
            <FiPlus className="text-xl text-primary-button" />
          </div>
          <p className="text-lg text-primary-button">Add website</p>
        </button>
      )}
    </div>
  );
};

export default WebsitePart;
