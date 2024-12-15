import React from "react";
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
  const [updateUserInformation, { isLoading }] = useUpdateUserInformationMutation();

  const handleUpdateInformation = async () => {
    try {
      const response = await updateUserInformation({ id: user.id , details: details });
      console.log(response);
      if (response?.data?.message === "success") {
        setIsEditModalShow(false)
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
        <EducationDetailsPart details={details} setDetails={setDetails} />

        <WorkplaceDetailsPart details={details} setDetails={setDetails} />

        <CityHomeTownPart details={details} setDetails={setDetails} />

        <SocialMediaPart details={details} setDetails={setDetails} />

        <WebsitePart details={details} setDetails={setDetails} />

        <RelationshipPart details={details} setDetails={setDetails} />
      </div>

      <div className="w-full flex gap-x-2 px-6 py-5 border-t border-primary-border/90">
        <SecondaryButton
          onClick={() => setIsEditModalShow(false)}
          className={`w-1/2`}
        >
          Cancel
        </SecondaryButton>

        <PrimaryButton
          onClick={handleUpdateInformation}
          className={`w-1/2 flex items-center justify-center`}
          isLoading={isLoading}
        >
          Update
        </PrimaryButton>
      </div>
    </Modal>
  );
};

export default EditDetailsModal;
