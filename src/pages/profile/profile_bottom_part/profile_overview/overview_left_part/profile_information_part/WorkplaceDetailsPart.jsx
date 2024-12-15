import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import WorkplaceDetailsItem from "./WorkplaceDetailsItem";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";

const WorkplaceDetailsPart = ({ details, setDetails }) => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [isAddNewWorkplaceAreaShow, setIsAddNewWorkplaceAreaShow] = useState(false);

  const handleAddNewWorkplace = () => {
    if (position === "") {
      alert("please enter your job position");
    } else if (company === "") {
      alert("please enter your company name");
    } else {
      setDetails((prev) => ({
        ...prev,
        workplace: [
          ...prev.workplace,
          {
            position: position,
            company: company,
            current: true,
          },
        ],
      }));

      setPosition("");
      setCompany("");
      setIsAddNewWorkplaceAreaShow(false);
    }
  };

  return (
    <div className="mt-5">
      <p className="text-primary-text font-segoe-ui font-semibold text-xl mb-4">
        Workplace:
      </p>

      <div>
        {details?.workplace?.map((item, index) => (
          <WorkplaceDetailsItem
            key={index}
            index={index}
            details={details}
            setDetails={setDetails}
            position={item.position}
            company={item.company}
          />
        ))}
      </div>

      <div className="mt-2">
        {isAddNewWorkplaceAreaShow ? (
          <div>
            <div className="mb-2">
              <label htmlFor="Positon" className="block mb-2 font-inter">
                Positon
              </label>

              <input
                type="text"
                id="Positon"
                placeholder="Enter your job position"
                onChange={(e) => setPosition(e.target.value)}
                className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
              />
            </div>

            <div>
              <label htmlFor="Company" className="block mb-2 font-inter">
                Company
              </label>

              <input
                type="text"
                id="Company"
                placeholder="Enter your company name"
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
              />
            </div>

            <div className="mt-2 flex items-center justify-end gap-x-2">
              <SecondaryButton
                onClick={() => setIsAddNewWorkplaceAreaShow(false)}
              >
                Cancel
              </SecondaryButton>

              <PrimaryButton onClick={handleAddNewWorkplace}>Save</PrimaryButton>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsAddNewWorkplaceAreaShow(true)}
            className="mt-2 flex items-center gap-x-2"
          >
            <div className="border-2 border-primary-button rounded-full">
              <FiPlus className="text-xl text-primary-button" />
            </div>
            <p className="text-lg text-primary-button">Add workplace</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkplaceDetailsPart;
