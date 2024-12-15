import React, { useState } from "react";
import relationshipIcon from "/public/images/user-info-icon/relationship.png";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";

const RelationshipPart = ({ details, setDetails }) => {
  const [relationship, setRelationship] = useState("");
  const [editedRelationship, setEditedRelationship] = useState(details?.relationship);
  const [isRelationshipEditAreaShow, setIsRelationshipEditAreaShow] = useState(false);
  const [isRelationshipAddAreaShow, setIsRelationshipAddAreaShow] = useState(false);

  const handleAddRelationship = () => {
    if (relationship === "") {
      alert("please enter your city name");
    } else {
      setDetails((prev) => ({
        ...prev,
        relationship: relationship,
      }));

      setRelationship("");
      setEditedRelationship(relationship);
      setIsRelationshipAddAreaShow(false);
    }
  };

  const handleEditRelationship = () => {
    if (editedRelationship === "") {
      alert("please enter your city name");
    } else {
      setDetails((prev) => ({
        ...prev,
        relationship: editedRelationship,
      }));

      setIsRelationshipEditAreaShow(false);
    }
  };

  const handleDeleteRelationship = () => {
    setDetails((prev) => ({
      ...prev,
      relationship: "",
    }));
  };

  return (
    <div className="mt-5">
      <p className="text-primary-text font-segoe-ui font-semibold text-xl mb-4">
        Relationship
      </p>

      {details?.relationship ? (
        isRelationshipEditAreaShow ? (
          <div>
            <div>
              <p className="mb-2 font-inter">Relationship status</p>

              <div className="border border-primary-border rounded-md overflow-hidden pr-5">
                <select
                  name="relationship"
                  id="relationship"
                  value={editedRelationship}
                  onChange={(e) => setEditedRelationship(e.target.value)}
                  className="w-full py-2.5 px-5 outline-none"
                >
                  <option value="">select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="in a relationship">In a relationship</option>
                </select>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-end gap-x-2">
              <SecondaryButton
                onClick={() => setIsRelationshipEditAreaShow(false)}
              >
                Cancel
              </SecondaryButton>

              <PrimaryButton onClick={handleEditRelationship}>
                Save
              </PrimaryButton>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2.5 mb-3">
              <div className="w-[22px] aspect-square">
                <img
                  src={relationshipIcon}
                  alt="job-icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-secondary-text text-lg font-inter font-medium capitalize">
                {details?.relationship}
              </p>
            </div>

            <div className="flex items-center gap-x-1">
              <FiEdit
                title="edit"
                onClick={() => setIsRelationshipEditAreaShow(true)}
                className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
              />

              <AiOutlineDelete
                title="delete"
                onClick={handleDeleteRelationship}
                className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
              />
            </div>
          </div>
        )
      ) : isRelationshipAddAreaShow ? (
        <div>
          <p className="block mb-2 font-inter">Relationship status</p>

          <div className="border border-primary-border rounded-md overflow-hidden pr-5">
            <select
              name="relationship"
              id="relationship"
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full py-2.5 px-5 outline-none"
            >
              <option value="">select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="mivorced">Divorced</option>
              <option value="in a relationship">In a relationship</option>
            </select>
          </div>

          <div className="mt-2 flex items-center justify-end gap-x-2">
            <SecondaryButton
              onClick={() => setIsRelationshipAddAreaShow(false)}
            >
              Cancel
            </SecondaryButton>

            <PrimaryButton onClick={handleAddRelationship}>Save</PrimaryButton>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsRelationshipAddAreaShow(true)}
          className="mt-2 mb-3 flex items-center gap-x-2"
        >
          <div className="border-2 border-primary-button rounded-full">
            <FiPlus className="text-xl text-primary-button" />
          </div>
          <p className="text-lg text-primary-button">
            Add a relationship status
          </p>
        </button>
      )}
    </div>
  );
};

export default RelationshipPart;
