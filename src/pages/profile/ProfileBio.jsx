import React, { useState } from "react";
import SecondaryButton from "../../components/layout/SecondaryButton";
import education from "../../../public/images/user-info-icon/education.png";
import homeTown from "../../../public/images/user-info-icon/home-town.png";
import home from "../../../public/images/user-info-icon/home.png";

const ProfileBio = () => {
  const [first, setFirst] = useState(
    '"সে কী পেল, যে আল্লাহ হারালো?\n' +
      'আর সে কি হারালো, যে আল্লাহকে পেল?"\n' +
      "\n" +
      "Blood Group:O+\n" +
      "Last Donate:01/10/24"
  );
  return (
    <div className="w-full bg-white px-4 pt-4 pb-4 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div>
        <p className="font-poppins text-xl font-medium">
          Intro
        </p>

        <div className="border-bs border-primary-border pb-3">
          <pre className=" whitespace-pre-wrap font-segoe-ui tracking-[0.45px] text-center mt-2">
            {first}
          </pre>

          <SecondaryButton className={`w-full mt-3`}>
            Edit bio
          </SecondaryButton>
        </div>
      </div>

      <div className="mt-3">
        <div className="py-2 flex items-center gap-x-2.5">
          <div className="w-[20px] aspect-square">
            <img
              src={education}
              alt="education-icon"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-secondary-text text-lgs font-inter">
            Studied at{" "}
            <span className="text-black font-medium">
              Shyampur Govt Model School and College
            </span>
          </p>
        </div>

        <div className="py-2 flex items-center gap-x-2.5">
          <div className="w-[20px] aspect-square">
            <img
              src={homeTown}
              alt="education-icon"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-secondary-text text-lgs font-inter">
            Lives in{" "}
            <span className="text-black font-medium">Dhaka, Bangladesh</span>
          </p>
        </div>

        <div className="py-2 flex items-center gap-x-2.5">
          <div className="w-[20px] aspect-square">
            <img
              src={home}
              alt="education-icon"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-secondary-text text-lgs font-inter">
            Studied at{" "}
            <span className="text-black font-medium">
              Shyampur Govt Model School and College
            </span>
          </p>
        </div>

        <SecondaryButton className={`w-full mt-4`}>
          Edit details
        </SecondaryButton>
      </div>

      <div className="mt-4">
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

        <SecondaryButton className={`w-full mt-4`}>
          Add featured
        </SecondaryButton>
      </div>
    </div>
  );
};

export default ProfileBio;
