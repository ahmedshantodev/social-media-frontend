import React, { useState } from "react";
import currentCityIcon from "/public/images/user-info-icon/home-town.png";
import homeTownIcon from "/public/images/user-info-icon/home.png";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import SecondaryButton from "../../../../../../components/layout/SecondaryButton";
import PrimaryButton from "../../../../../../components/layout/PrimaryButton";

const CityHomeTownPart = ({ information, setInformation }) => {
  const [currentCityName, setCurrentCityName] = useState("");
  const [editedCity, setEditedCity] = useState(information?.currentCity)
  const [isCityEditShow, setIsCityEditShow] = useState(false);
  const [isCityAddAreaShow, setIsCityAddAreaShow] = useState(false);

  const [homeTownName, setHomeTownName] = useState("");
  const [editedHomeTown, setEditedHomeTown] = useState(information?.hometown)
  const [isHomeTownAddAreaShow, setIsHomeTownAddAreaShow] = useState(false);
  const [isHomeTownEditShow, setIsHomeTownEditShow] = useState(false);

  const handleAddCity = () => {
    if (currentCityName === "") {
      alert("please enter your city name");
    } else {
      setInformation((prev) => ({
        ...prev,
        currentCity: currentCityName,
      }));

      setCurrentCityName("");
      setEditedCity(currentCityName)
      setIsCityAddAreaShow(false);
    }
  };

  const handleEditCity = () => {
    if (editedCity === "") {
      alert("please enter your city name");
    } else {
      setInformation((prev) => ({
        ...prev,
        currentCity: editedCity,
      }));

      setIsCityEditShow(false);
    }
  };
  

  const handleDeleteCity = () => {
    setInformation((prev) => ({
      ...prev,
      currentCity: "",
    }));
  };

  const handleAddHomeTown = () => {
    if (homeTownName === "") {
      alert("please enter your Home town");
    } else {
      setInformation((prev) => ({
        ...prev,
        hometown: homeTownName,
      }));

      setHomeTownName("");
      setEditedHomeTown(homeTownName)
      setIsHomeTownAddAreaShow(false);
    }
  };

  const handleEditHomeTown = () => {
    if (editedHomeTown === "") {
      alert("please enter your Home town");
    } else {
      setInformation((prev) => ({
        ...prev,
        hometown: editedHomeTown,
      }));

      setIsHomeTownEditShow(false);
    }
  };
  

  const handleDeleteHomeTown = () => {
    setInformation((prev) => ({
      ...prev,
      hometown: "",
    }));
  };

  return (
    <div className="mt-5 mb-5">
      <p className="text-primary-text font-segoe-ui font-semibold text-xl mb-4">
        Places lived:
      </p>

      {information?.currentCity ? (
        isCityEditShow ? (
          <div>
            <div>
              <label htmlFor="edit-city" className="block mb-2 font-inter">
                City
              </label>

              <input
                type="text"
                id="edit-city"
                maxLength={50}
                value={editedCity}
                placeholder="Enter your current city name"
                onChange={(e) => setEditedCity(e.target.value)}
                className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
              />
            </div>

            <div className="mt-2 flex items-center justify-end gap-x-2">
              <SecondaryButton onClick={() => setIsCityEditShow(false)}>
                Cancel
              </SecondaryButton>

              <PrimaryButton onClick={handleEditCity}>Save</PrimaryButton>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2.5 mb-3">
              <div className="w-[22px] aspect-square">
                <img
                  src={currentCityIcon}
                  alt="job-icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-secondary-text text-lg font-inter">
                Lives in{" "}
                <span className="text-black font-medium">
                  {information?.currentCity}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-x-1">
              <FiEdit
                title="edit"
                onClick={() => setIsCityEditShow(true)}
                className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
              />

              <AiOutlineDelete
                title="delete"
                onClick={handleDeleteCity}
                className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
              />
            </div>
          </div>
        )
      ) : isCityAddAreaShow ? (
        <div>
          <div>
            <label htmlFor="city" className="block mb-2 font-inter">
              City
            </label>

            <input
              type="text"
              id="city"
              maxLength={50}
              placeholder="Enter your current city name"
              onChange={(e) => setCurrentCityName(e.target.value)}
              className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
            />
          </div>

          <div className="mt-2 flex items-center justify-end gap-x-2">
            <SecondaryButton onClick={() => setIsCityAddAreaShow(false)}>
              Cancel
            </SecondaryButton>

            <PrimaryButton onClick={handleAddCity}>Save</PrimaryButton>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsCityAddAreaShow(true)}
          className="mt-2 mb-3 flex items-center gap-x-2"
        >
          <div className="border-2 border-primary-button rounded-full">
            <FiPlus className="text-xl text-primary-button" />
          </div>
          <p className="text-lg text-primary-button">Add city</p>
        </button>
      )}

      {information?.hometown ? (
        isHomeTownEditShow ? (
          <div>
            <div>
              <label htmlFor="edit-hometown" className="block mb-2 font-inter">
                Hometown
              </label>

              <input
                type="text"
                id="edit-hometown"
                maxLength={50}
                value={editedHomeTown}
                placeholder="Enter your current city name"
                onChange={(e) => setEditedHomeTown(e.target.value)}
                className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
              />
            </div>

            <div className="mt-2 flex items-center justify-end gap-x-2">
              <SecondaryButton onClick={() => setIsHomeTownEditShow(false)}>
                Cancel
              </SecondaryButton>

              <PrimaryButton onClick={handleEditHomeTown}>Save</PrimaryButton>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2.5 mb-3">
              <div className="w-[22px] aspect-square">
                <img
                  src={homeTownIcon}
                  alt="job-icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-secondary-text text-lg font-inter">
                From{" "}
                <span className="text-black font-medium">
                  {information?.hometown}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-x-1">
              <FiEdit
                title="edit"
                onClick={() => setIsHomeTownEditShow(true)}
                className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
              />

              <AiOutlineDelete
                title="delete"
                onClick={handleDeleteHomeTown}
                className="text-xl text-secondary-text cursor-pointer hover:bg-secondary-bg transition-all box-content p-1 rounded-md"
              />
            </div>
          </div>
        )
      ) : isHomeTownAddAreaShow ? (
        <div>
          <div>
            <label htmlFor="hometown" className="block mb-2 font-inter">
              Home town
            </label>

            <input
              type="text"
              id="hometown"
              maxLength={50}
              placeholder="Enter your hometown"
              onChange={(e) => setHomeTownName(e.target.value)}
              className="w-full border border-primary-border py-2.5 px-5 rounded-md outline-none"
            />
          </div>

          <div className="mt-2 flex items-center justify-end gap-x-2">
            <SecondaryButton onClick={() => setIsHomeTownAddAreaShow(false)}>
              Cancel
            </SecondaryButton>

            <PrimaryButton onClick={handleAddHomeTown}>Save</PrimaryButton>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsHomeTownAddAreaShow(true)}
          className="mt-2 flex items-center gap-x-2"
        >
          <div className="border-2 border-primary-button rounded-full">
            <FiPlus className="text-xl text-primary-button" />
          </div>
          <p className="text-lg text-primary-button">Add hometown</p>
        </button>
      )}
    </div>
  );
};

export default CityHomeTownPart;
