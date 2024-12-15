import React, { useState } from "react";
import education from "/public/images/user-info-icon/education.png";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";
import Modal from "../../../../../../components/layout/Modal";

const EducationDetailsItem = ({
  index,
  subject,
  details,
  setDetails,
  institute,
}) => {
  const [isDeleteModalShow, setIsDeleteModalShow] = useState(false);
  const [isEducationEditAreaShow, setIsEducationEditAreaShow] = useState(false);
  const [editedInstitute, setEditedInstitute] = useState(details?.education[index].institute);
  const [editedSubject, setEditedSubject] = useState(details?.education[index].subject);

  const handleEditCancel = () => {
    setEditedInstitute(details?.education[index].institute);
    setEditedSubject(details?.education[index].subject);

    setIsEducationEditAreaShow(false);
  };

  const handleEditEducationItem = () => {
    if (editedInstitute === "") {
      alert("please enter your instiute name");
    } else {
      setDetails((prev) => ({
        ...prev,
        education: [
          ...prev.education.slice(0, index),
          {
            type: "College",
            subject: editedSubject,
            institute: editedInstitute,
            current: true,
          },
          ...prev.education.slice(index + 1),
        ],
      }));

      setIsEducationEditAreaShow(false);
    }
  };

  const deleteEducationItem = () => {
    setDetails((prev) => ({
      ...prev,
      education: [
        ...prev.education.slice(0, index),
        ...prev.education.slice(index + 1),
      ],
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2.5 mb-3">
          <div className="w-[23px] aspect-square">
            <img
              src={education}
              alt="education-icon"
              className="w-full h-full object-cover"
            />
          </div>

          {subject ? (
            <p className="text-secondary-text text-lg font-inter">
              Studies {subject} at{" "}
              <span className="text-black font-medium">{institute}</span>
            </p>
          ) : (
            <p className="text-secondary-text text-lg font-inter">
              Studied at{" "}
              <span className="text-black font-medium">{institute}</span>
            </p>
          )}
        </div>

        <div className="flex items-center gap-x-1">
          <FiEdit
            title="edit"
            onClick={() => setIsEducationEditAreaShow(true)}
            className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
          />

          <AiOutlineDelete
            title="delete"
            onClick={deleteEducationItem}
            className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
          />
        </div>
      </div>

      {isEducationEditAreaShow && (
        <div className="mb-2">
          <div className="mb-2">
            <label htmlFor="subject" className="block mb-2 font-inter">
              Subject <span className="text-secondary-text">(optional)</span>
            </label>

            <input
              type="text"
              id="subject"
              value={editedSubject}
              placeholder="Describe"
              onChange={(e) => setEditedSubject(e.target.value)}
              className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
            />
          </div>

          <div>
            <label htmlFor="Insitute" className="block mb-2 font-inter">
              Insitute name :
            </label>

            <input
              type="text"
              id="Insitute"
              value={editedInstitute}
              placeholder="Enter your institute name"
              onChange={(e) => setEditedInstitute(e.target.value)}
              className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
            />
          </div>

          <div className="mt-2 flex items-center justify-end gap-x-2">
            <SecondaryButton onClick={handleEditCancel}>Cancel</SecondaryButton>

            <PrimaryButton onClick={handleEditEducationItem}>
              Save
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationDetailsItem;
