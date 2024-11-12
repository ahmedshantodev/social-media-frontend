import React, { useState } from "react";
import SecondaryButton from "../../components/layout/SecondaryButton";
import education from "../../../public/images/user-info-icon/education.png";
import homeTown from "../../../public/images/user-info-icon/home-town.png";
import home from "../../../public/images/user-info-icon/home.png";
import job from "../../../public/images/user-info-icon/job.png";
import website from "../../../public/images/user-info-icon/website.png";
import PrimaryButton from "../../components/layout/PrimaryButton";

import linkedin from "../../../public/images/user-info-icon/linkedin.png";
import instagram from "../../../public/images/user-info-icon/ig.png";
import x from "../../../public/images/user-info-icon/x.png";
import skype from "../../../public/images/user-info-icon/skype.png";
import github from "../../../public/images/user-info-icon/github.png";

import relationship from "../../../public/images/user-info-icon/relationship.png";

const ProfileBio = ({ visitor }) => {
  const [isEditShow, setIsEditShow] = useState(false);
  const [remainingCharacters, setRemainingCharacters] = useState(110);
  const [details, setDetails] = useState({
    bio:
      '"সে কী পেল, যে আল্লাহ হারালো?\n' +
      'আর সে কি হারালো, যে আল্লাহকে পেল?"\n' +
      "\n" +
      "Blood Group:O+\n" +
      "Last Donate:01/10/24",
    otherName: "Mute",

    education: [
      {
        type: "College",
        institute: "Shyampur Govt Model School and College",
        current: false,
      },
      {
        type: "School",
        institute: "Creative it institute",
        current: false,
      },
      {
        type: "School",
        institute: "Bakchor primary school",
        current: false,
      },
    ],
    workplace: [
      { position: "Developer", company: "Creative IT", current: true },
      { position: "Manager", company: "One Year", current: false },
    ],
    currentCity: "Dhaka",
    hometown: "Chandpur",
    relationship: "Single",
    socialMedia: [
      { name: "instagram", link: "https://www.instagram.com" },
      { name: "x", link: "https://www.instagram.com" },
      { name: "skype", link: "https://www.instagram.com" },
      { name: "github", link: "https://www.instagram.com" },
      { name: "linkedin", link: "https://www.instagram.com" },
    ],
    website: [
      { domain: "www.ahmedshantodev.com", link: "https://www.instagram.com" },
      { domain: "www.ripple.com", link: "https://www.instagram.com" },
    ],
  });

  const handleChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      bio: e.target.value,
    }));

    setRemainingCharacters(110 - e.target.value.length);
  };

  return (
    <div className="w-full bg-white px-4 pt-4 pb-4 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div>
        <p className="font-poppins text-xl font-medium">Intro</p>

        {isEditShow ? (
          <div>
            <textarea
              id="bio"
              name="bio"
              maxLength={"110"}
              value={details?.bio}
              onChange={handleChange}
              placeholder="Describe who you are"
              className="w-full min-h-[150px] resize-none border border-primary-border mt-2 rounded-md p-2 outline-none text-center font-inter tracking-[0.40px]"
            />

            <div className="flex items-center justify-between">
              <p className="text-secondary-text">
                {remainingCharacters} characters remaining
              </p>

              <div className="space-x-2">
                <SecondaryButton onClick={() => setIsEditShow(false)}>
                  Cancel
                </SecondaryButton>

                <PrimaryButton onClick={() => setIsEditShow(false)}>
                  Save
                </PrimaryButton>
              </div>
            </div>
          </div>
        ) : (
          <div className="border-bs border-primary-border pb-3">
            <pre
              className={
                visitor
                  ? "whitespace-pre-wrap font-inter tracking-[0.40px] text-center mt-2"
                  : "whitespace-pre-wrap font-inter tracking-[0.40px] text-center mt-2 pb-3 border-b border-primary-border"
              }
            >
              {details?.bio}
            </pre>

            {visitor && (
              <SecondaryButton
                onClick={() => setIsEditShow(true)}
                className={`w-full mt-3`}
              >
                Edit bio
              </SecondaryButton>
            )}
          </div>
        )}
      </div>

      <div className={visitor && "mt-1"}>
        {details?.education &&
          details?.education.map((item, index) => (
            <div key={index} className="py-2 flex items-center gap-x-2.5">
              <div className="w-[20px] aspect-square">
                <img
                  src={education}
                  alt="education-icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-secondary-text text-lgs font-inter">
                Studied at{" "}
                <span className="text-black font-medium">{item.institute}</span>
              </p>
            </div>
          ))}

        {details?.workplace &&
          details?.workplace.map((item, index) => (
            <div key={index} className="py-2 flex items-center gap-x-2.5">
              <div className="w-[20px] aspect-square">
                <img
                  src={job}
                  alt="education-icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-secondary-text text-lgs font-inter">
                {item.position} at{" "}
                <span className="text-black font-medium">{item.company}</span>
              </p>
            </div>
          ))}

        {details?.currentCity && (
          <div className="py-2 flex items-center gap-x-2.5">
            <div className="w-[20px] aspect-square">
              <img
                src={homeTown}
                alt="education-icon"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-secondary-text  font-inter">
              Lives in{" "}
              <span className="text-black font-medium">
                {details?.currentCity}
              </span>
            </p>
          </div>
        )}

        {details?.hometown && (
          <div className="py-2 flex items-center gap-x-2.5">
            <div className="w-[20px] aspect-square">
              <img
                src={home}
                alt="education-icon"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-secondary-text text-lgs font-inter">
              From{" "}
              <span className="text-black font-medium">
                {details?.hometown}
              </span>
            </p>
          </div>
        )}

        {details?.socialMedia &&
          details?.socialMedia.map((item, index) => (
            <div key={index} className="py-2 flex items-center gap-x-2.5">
              <div className="w-[20px] aspect-square">
                <img
                  src={
                    item.name === "instagram"
                      ? instagram
                      : item.name === "x"
                      ? x
                      : item.name === "skype"
                      ? skype
                      : item.name === "linkedin"
                      ? linkedin
                      : github
                  }
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <a
                target="_blank"
                href={item.link}
                className="text-[#0064d1] font-medium font-inter hover:underline"
              >
                {item.name}
              </a>
            </div>
          ))}

        {details?.website &&
          details?.website.map((item, index) => (
            <div key={index} className="py-2 flex items-center gap-x-2.5">
              <div className="w-[20px] aspect-square">
                <img
                  src={website}
                  alt="education-icon"
                  className="w-full h-full object-cover"
                />
              </div>

              <a
                target="_blank"
                href={item.link}
                className="text-[#0064d1] font-medium font-inter hover:underline"
              >
                {item.domain}
              </a>
            </div>
          ))}

        {details?.relationship && (
          <div className="py-2 flex items-center gap-x-2.5">
            <div className="w-[20px] aspect-square">
              <img
                src={relationship}
                alt="education-icon"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-secondary-text font-medium">
              {details?.relationship}
            </p>
          </div>
        )}

        {visitor && (
          <SecondaryButton className={`w-full mt-4`}>
            Edit details
          </SecondaryButton>
        )}
      </div>

      <div className={visitor ? "mt-4" : "mt-2"}>
        <div className="flex gap-x-2">
          <div className="w-1/3">
            <div className="group w-full h-[230px] rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/public/remove/userOne.png"
                alt=""
                className="w-full h-[230px] object-cover group-hover:scale-[1.02] transition-all duration-150"
              />
            </div>

            <p className="font-inter text-center font-medium mt-1">
              Collection
            </p>
          </div>

          <div className="w-1/3">
            <div className="group w-full h-[230px] rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/public/remove/userOne.png"
                alt=""
                className="w-full h-[230px] object-cover group-hover:scale-[1.02] transition-all duration-150"
              />
            </div>

            <p className="font-inter text-center font-medium mt-1">
              Collection
            </p>
          </div>

          <div className="w-1/3">
            <div className="group w-full h-[230px] rounded-lg overflow-hidden cursor-pointer">
              <img
                src="/public/remove/userOne.png"
                alt=""
                className="w-full h-[230px] object-cover group-hover:scale-[1.02] transition-all duration-150"
              />
            </div>

            <p className="font-inter text-center font-medium mt-1">
              Collection
            </p>
          </div>
        </div>

        {visitor && (
          <SecondaryButton className={`w-full mt-4`}>
            Add featured
          </SecondaryButton>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
