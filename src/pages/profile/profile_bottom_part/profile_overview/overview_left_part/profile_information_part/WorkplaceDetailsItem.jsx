import React, { useState } from "react";
import job from "/public/images/user-info-icon/job.png";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";

const WorkplaceDetailsItem = ({
  index,
  position,
  company,
  information,
  setInformation,
}) => {
  const [isWorkEditeAreaShows, setIsWorkEditeAreaShows] = useState(false);
  const [editedJobPosition, setEditedJobPosition] = useState(information?.workplace[index].position);
  const [editedCompanyName, setEditedCompanyName] = useState(information?.workplace[index].company);

  const handleEditCancel = () => {
    setEditedJobPosition(information?.workplace[index].position)
    setEditedCompanyName(information?.workplace[index].company)
    setIsWorkEditeAreaShows(false)
  }

  const handleEditWorkPlace = () => {
    if (editedCompanyName === "") {
      alert("please enter your company name");
    } else if (editedJobPosition === "") {
      alert("please enter your job position");
    } else {
      setInformation((prev) => ({
        ...prev,
        workplace: [
          ...prev.workplace.slice(0, index),
          {
            position: editedJobPosition,
            company: editedCompanyName,
            current: true,
          },
          ...prev.workplace.slice(index + 1),
        ],
      }));

      setIsWorkEditeAreaShows(false);
    }
  };

  const deleteWorkplaceItem = () => {
    setInformation((prev) => ({
      ...prev,
      workplace: [
        ...prev.workplace.slice(0, index),
        ...prev.workplace.slice(index + 1),
      ],
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2.5 mb-3">
          <div className="w-[22px] aspect-square">
            <img
              src={job}
              alt="job-icon"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-secondary-text text-lg font-inter">
            {position} at <span className="text-black font-medium">{company}</span>
          </p>
        </div>

        <div className="flex items-center gap-x-1">
          <FiEdit
            title="edit"
            onClick={() => setIsWorkEditeAreaShows(true)}
            className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
          />

          <AiOutlineDelete
            title="delete"
            onClick={deleteWorkplaceItem}
            className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
          />
        </div>
      </div>

      {isWorkEditeAreaShows && (
        <div className="mb-2">
          <div className="mb-2">
            <label htmlFor="position" className="block mb-2 font-inter">
              position
            </label>

            <input
              type="text"
              id="position"
              maxLength={50}
              value={editedJobPosition}
              placeholder="Enter your job position"
              onChange={(e) => setEditedJobPosition(e.target.value)}
              className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none hover:border-secondary-text/80"
            />
          </div>

          <div>
            <label htmlFor="conpany" className="block mb-2 font-inter">
              Company name :
            </label>

            <input
              type="text"
              id="conpany"
              maxLength={50}
              value={editedCompanyName}
              placeholder="Enter your conpany name"
              onChange={(e) => setEditedCompanyName(e.target.value)}
              className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none hover:border-secondary-text/80"
            />
          </div>

          <div className="mt-2 flex items-center justify-end gap-x-2">
            <SecondaryButton onClick={handleEditCancel}>
              Cancel
            </SecondaryButton>

            <PrimaryButton onClick={handleEditWorkPlace}>Save</PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkplaceDetailsItem;
