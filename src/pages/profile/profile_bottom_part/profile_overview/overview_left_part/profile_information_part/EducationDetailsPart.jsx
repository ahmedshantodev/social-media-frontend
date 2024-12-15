import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";
import EducationDetailsItem from "./EducationDetailsItem";
import ProfileInfoInput from "./ProfileInfoInput";

const EducationDetailsPart = ({ details, setDetails }) => {
  const [isAddNewEducationAreaShow, setIsAddNewEducationAreaShow] = useState(false);
  const [institute, setInstitute] = useState("");
  const [subject, setSubject] = useState("");

  const addNewEducationItem = () => {
    if (institute === "") {
      alert("please enter your instiute name");
    } else {
      setDetails((prev) => ({
        ...prev,
        education: [
          ...prev.education,
          {
            type: "College",
            subject: subject,
            institute: institute,
            current: true,
          },
        ],
      }));

      setInstitute("");
      setSubject("");
      setIsAddNewEducationAreaShow(false);
    }
  };

  return (
    <div>
      <p className="text-primary-text font-segoe-ui font-semibold text-xl mb-4">
        Education:
      </p>

      <div>
        {details?.education?.map((item, index) => (
          <EducationDetailsItem
            key={index}
            index={index}
            details={details}
            setDetails={setDetails}
            subject={item.subject}
            institute={item.institute}
          />
        ))}
      </div>

      <div className="mt-2">
        {isAddNewEducationAreaShow && (
          <div>
            <ProfileInfoInput
              id="subject"
              type={"text"}
              label={"Subject (optional)"}
              placeholder="Describe"
              onChange={(e) => setSubject(e.target.value)}
              className="mb-2"
            />

            <ProfileInfoInput
              id={"Insitute"}
              type={"text"}
              label={"Insitute name :"}
              placeholder="Enter your institute name"
              onChange={(e) => setInstitute(e.target.value)}
              className="mb-2"
            />

            <div className="mt-2 flex items-center justify-end gap-x-2">
              <SecondaryButton
                onClick={() => setIsAddNewEducationAreaShow(false)}
              >
                Cancel
              </SecondaryButton>

              <PrimaryButton 
                isLoading={false}
                onClick={addNewEducationItem}
              >
                Save
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>

      {!isAddNewEducationAreaShow && (
        <button
          onClick={() => setIsAddNewEducationAreaShow(true)}
          className="mt-2 flex items-center gap-x-2"
        >
          <div className="border-2 border-primary-button rounded-full">
            <FiPlus className="text-xl text-primary-button" />
          </div>
          <p className="text-lg text-primary-button">Add school or college</p>
        </button>
      )}
    </div>
  );
};

export default EducationDetailsPart;
