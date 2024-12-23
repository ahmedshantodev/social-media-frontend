import React, { useEffect, useState } from "react";
import Modal from "../../../../../../components/layout/Modal";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";
import EducationDetailsPart from "./EducationDetailsPart";
import WorkplaceDetailsPart from "./WorkplaceDetailsPart";
import CityHomeTownPart from "./CityHomeTownPart";
import RelationshipPart from "./RelationshipPart";
import SocialMediaPart from "./SocialMediaPart";
import WebsitePart from "./WebsitePart";
import { useUpdateUserInformationMutation } from "../../../../../../redux/api/userApi";

const EditDetailsModal = ({
  user,
  details,
  setDetails,
  isEditModalShow,
  setIsEditModalShow,
}) => {
  const [information, setInformation] = useState({});

  useEffect(() => {
    if (details) {
      setInformation({
        bio: details.bio,
        otherName: details.otherName,
        education: details.education,
        workplace: details.workplace,
        currentCity: details.currentCity,
        hometown: details.hometown,
        socialMedia: details.socialMedia,
        website: details.website,
        relationship: details.relationship,
      });
    }
  }, [details]);
  
  // api call
  const [updateUserInformation, { isLoading }] = useUpdateUserInformationMutation();

  const handleUpdateInformation = async () => {
    try {
      const response = await updateUserInformation({
        id: user.id,
        details: information,
      });
      if (response?.data?.message === "success") {
        setDetails(information)
        setIsEditModalShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      show={isEditModalShow}
      setShow={setIsEditModalShow}
      className={`w-[700px]`}
    >
      <p className="text-center text-primary-text font-inter font-semibold text-2xl border-b border-primary-border/90 pb-3 pt-4">
        Edit details
      </p>

      <div className="max-h-[500px] overflow-y-auto pr-1 ml-6 mr-5 py-5">
        <EducationDetailsPart
          information={information}
          setInformation={setInformation}
        />

        <WorkplaceDetailsPart
          information={information}
          setInformation={setInformation}
        />

        <CityHomeTownPart
          information={information}
          setInformation={setInformation}
        />

        <SocialMediaPart
          information={information}
          setInformation={setInformation}
        />

        <WebsitePart
          information={information}
          setInformation={setInformation}
        />

        <RelationshipPart
          information={information}
          setInformation={setInformation}
        />
      </div>

      <div className="w-full flex gap-x-2 px-6 py-5 border-t border-primary-border/90">
        <SecondaryButton
          className={`w-1/2`}
          onClick={() => setIsEditModalShow(false)}
        >
          Cancel
        </SecondaryButton>

        <PrimaryButton
          className={`w-1/2`}
          isLoading={isLoading}
          onClick={handleUpdateInformation}
        >
          Update
        </PrimaryButton>
      </div>
    </Modal>
  );
};

export default EditDetailsModal;
