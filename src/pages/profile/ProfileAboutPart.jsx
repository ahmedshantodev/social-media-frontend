import React, { useState } from "react";
import education from "../../../public/images/user-info-icon/education.png";
import homeTown from "../../../public/images/user-info-icon/home-town.png";
import home from "../../../public/images/user-info-icon/home.png";
import job from "../../../public/images/user-info-icon/job.png";
import website from "../../../public/images/user-info-icon/website.png";
import linkedin from "../../../public/images/user-info-icon/linkedin.png";
import instagram from "../../../public/images/user-info-icon/ig.png";
import x from "../../../public/images/user-info-icon/x.png";
import skype from "../../../public/images/user-info-icon/skype.png";
import github from "../../../public/images/user-info-icon/github.png";

const ProfileAboutPart = () => {
  let menu = [
    "Overview",
    "Education",
    "Workplace",
    "Places lived",
    "Contact info",
  ];
  const [selectedItem, setSelectedItem] = useState(menu[0]);

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
        type: "High School",
        institute: "Creative it institute",
        current: false,
      },
      {
        type: "High School",
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

  return (
    <div className="w-full bg-white flex mb-10 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="w-[30%] border-r-2 border-primary-border/70 px-3 py-4">
        <p className="font-poppins text-xl font-medium px-2">About</p>

        <div className="mt-4">
          {menu.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              className={
                item === selectedItem
                  ? "w-full text-start text-primary-button text-[17px] font-medium font-inter bg-[#ebf5ff] py-2 px-2.5 rounded-md mb-2"
                  : "w-full text-start text-secondary-text text-[17px] font-medium font-inter hover:bg-[#f2f2f2] py-2 px-2.5 rounded-md transition-all mb-2"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="w-[70%] px-6 pt-10 pb-4">
        {selectedItem === "Overview" ? (
          <div>
            {details?.education &&
              details?.education.map((item, index) => (
                <div key={index} className="flex items-center gap-x-2.5 mb-5">
                  <div className="w-[23px] aspect-square">
                    <img
                      src={education}
                      alt="education-icon"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-[17px] tracking-[0.40px] text-secondary-text">
                    Studied at{" "}
                    <span className="text-black font-medium">
                      {item.institute}
                    </span>
                  </p>
                </div>
              ))}

            {details?.workplace &&
              details?.workplace.map((item, index) => (
                <div key={index} className="flex items-center gap-x-2.5 mb-5">
                  <div className="w-[23px] aspect-square">
                    <img
                      src={job}
                      alt="education-icon"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-[17px] tracking-[0.40px] text-secondary-text">
                    {item.position} at{" "}
                    <span className="text-black font-medium">
                      {item.company}
                    </span>
                  </p>
                </div>
              ))}

            {details?.currentCity && (
              <div className="flex items-center gap-x-2.5 mb-5">
                <div className="w-[23px] aspect-square">
                  <img
                    src={homeTown}
                    alt="education-icon"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[17px] tracking-[0.40px] text-secondary-text">
                  Lives in{" "}
                  <span className="text-black font-medium">
                    {details?.currentCity}
                  </span>
                </p>
              </div>
            )}

            {details?.hometown && (
              <div className="flex items-center gap-x-2.5 mb-3">
                <div className="w-[23px] aspect-square">
                  <img
                    src={home}
                    alt="education-icon"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[17px] tracking-[0.40px] text-secondary-text">
                  From{" "}
                  <span className="text-black font-medium">
                    {details?.hometown}
                  </span>
                </p>
              </div>
            )}
          </div>
        ) : selectedItem === "Education" ? (
          <div>
            {details?.education &&
              details?.education.map((item, index) => (
                <div key={index} className="flex items-center gap-x-2.5 mb-5">
                  <div className="w-[23px] aspect-square">
                    <img
                      src={education}
                      alt="education-icon"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-[17px] tracking-[0.40px] text-secondary-text">
                    Studied at{" "}
                    <span className="text-black font-medium">
                      {item.institute}
                    </span>
                  </p>
                </div>
              ))}
          </div>
        ) : selectedItem === "Workplace" ? (
          <div>
            {details?.workplace &&
              details?.workplace.map((item, index) => (
                <div key={index} className="flex items-center gap-x-2.5 mb-5">
                  <div className="w-[23px] aspect-square">
                    <img
                      src={job}
                      alt="education-icon"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-[17px] tracking-[0.40px] text-secondary-text">
                    {item.position} at{" "}
                    <span className="text-black font-medium">
                      {item.company}
                    </span>
                  </p>
                </div>
              ))}
          </div>
        ) : selectedItem === "Places lived" ? (
          <div>
            {details?.currentCity && (
              <div className="flex items-center gap-x-2.5 mb-5">
                <div className="w-[23px] aspect-square">
                  <img
                    src={homeTown}
                    alt="education-icon"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[17px] tracking-[0.40px] text-secondary-text">
                  Lives in{" "}
                  <span className="text-black font-medium">
                    {details?.currentCity}
                  </span>
                </p>
              </div>
            )}

            {details?.hometown && (
              <div className="flex items-center gap-x-2.5 mb-3">
                <div className="w-[23px] aspect-square">
                  <img
                    src={home}
                    alt="education-icon"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[17px] tracking-[0.40px] text-secondary-text">
                  From{" "}
                  <span className="text-black font-medium">
                    {details?.hometown}
                  </span>
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            {details?.socialMedia &&
              details?.socialMedia.map((item, index) => (
                <div key={index} className="flex items-center gap-x-2.5 mb-5">
                  <div className="w-[23px] aspect-square">
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
                      alt="education-icon"
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
                <div key={index} className="flex items-center gap-x-2.5 pb-5">
                  <div className="w-[23px] aspect-square">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAboutPart;
