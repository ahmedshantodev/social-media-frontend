import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";
import SocialMediaItem from "./SocialMediaItem";

const SocialMediaPart = ({ details, setDetails }) => {
  const [isAddNewSocialLinkAreaShow, setIsAddNewSocialLinkAreaShow] = useState(false);
  const [name, setName] = useState("linkedin");
  const [link, setLink] = useState("");

  const addNewSocialItem = () => {
    if (link === "") {
      alert("please enter social media link");
    } else {
      setDetails((prev) => ({
        ...prev,
        socialMedia: [
          ...prev.socialMedia,
          {
            name: name,
            link: link,
          },
        ],
      }));

      setName("");
      setLink("");
      setIsAddNewSocialLinkAreaShow(false);
    }
  };

  return (
    <div className="mb-5">
      <p className="text-primary-text font-segoe-ui font-semibold text-xl mb-4">
        Social media
      </p>

      <div>
        {details?.socialMedia?.map((item, index) => (
          <SocialMediaItem
            key={index}
            index={index}
            name={item.name}
            link={item.link}
            details={details}
            setDetails={setDetails}
          />
        ))}
      </div>

      <div className="mt-2">
        {isAddNewSocialLinkAreaShow && (
          <div>
            <div className="mb-2">
              <p className="mb-2 font-inter">Social media name</p>

              <div className="border border-primary-border rounded-md overflow-hidden pr-5">
                <select
                  name="social-name"
                  id="social-name"
                  onChange={(e) => setName(e.target.value)}
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
                id="subject"
                placeholder="Enter your social media link"
                onChange={(e) => setLink(e.target.value)}
                className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
              />
            </div>

            <div className="mt-2 flex items-center justify-end gap-x-2">
              <SecondaryButton
                onClick={() => setIsAddNewSocialLinkAreaShow(false)}
              >
                Cancel
              </SecondaryButton>

              <PrimaryButton onClick={addNewSocialItem}>Save</PrimaryButton>
            </div>
          </div>
        )}
      </div>

      {!isAddNewSocialLinkAreaShow && (
        <button
          onClick={() => setIsAddNewSocialLinkAreaShow(true)}
          className="mt-2 flex items-center gap-x-2"
        >
          <div className="border-2 border-primary-button rounded-full">
            <FiPlus className="text-xl text-primary-button" />
          </div>
          <p className="text-lg text-primary-button">
            Add social media link
          </p>
        </button>
      )}
    </div>
  );
};

export default SocialMediaPart;
