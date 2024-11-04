import React, { useState } from "react";
import liveVideoLogo from "/public/images/liveVideoLogo.png";
import galaryLogo from "/public/images/galaryLogo.png";
import feelingsLogo from "/public/images/feelingsLogo.png";
import PostCreateModal from "../../components/modal/PostCreateModal";
import { useSelector } from "react-redux";

const PostCreatePart = () => {
  const user = useSelector((activeUser) => activeUser.user.information);
  const [PostCreateModalShow, setPostCreateModalShow] = useState(false);

  return (
    <div className="w-full bg-white px-4 pt-4 pb-2 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="flex items-center gap-x-2.5 border-b-[2px] border-secondary-border pb-3">
        <div className="box-content w-[48px] aspect-square rounded-full overflow-hidden border border-border_color">
          <img
            src={user?.profilePicture}
            alt=""
            className="w-full"
          />
        </div>

        <div
          onClick={() => setPostCreateModalShow(true)}
          className="bg-[#f0f2f5] px-5 py-2.5 w-full rounded-[30px] cursor-pointer hover:bg-[#e4e6e9] transition-all duration-150 ease-in-out"
        >
          <p className="font-segoe-ui text-lg text-secondary-text font-medium">
            What's on your mind, {user?.firstName}?
          </p>
        </div>

        <PostCreateModal
          show={PostCreateModalShow}
          setShow={setPostCreateModalShow}
        />
      </div>

      <div className="mt-3 flex">
        <button className="w-1/3 flex justify-center items-center gap-x-2.5 py-2.5 hover:bg-[#f2f2f2] rounded-[6px] transition-all duration-200 ease-in-out">
          <div className="w-[23px] aspect-square">
            <img src={liveVideoLogo} alt="live-video-logo" className="w-full" />
          </div>

          <p className="text-secondary-text font-semibold font-segoe-ui text-[17px]">
            Live Video
          </p>
        </button>

        <button
          onClick={() => setPostCreateModalShow(true)}
          className="w-1/3 flex justify-center items-center gap-x-2.5 py-2.5 hover:bg-[#f2f2f2] rounded-[6px] transition-all duration-200 ease-in-out"
        >
          <div className="w-[23px] aspect-square">
            <img src={galaryLogo} alt="live-video-logo" className="w-full" />
          </div>

          <p className="text-secondary-text font-semibold font-segoe-ui text-[17px]">
            Photo/Video
          </p>
        </button>

        <button className="w-1/3 flex justify-center items-center gap-x-2.5 py-2.5 hover:bg-[#f2f2f2] rounded-[6px] transition-all duration-200 ease-in-out">
          <div className="w-[23px] aspect-square">
            <img src={feelingsLogo} alt="live-video-logo" className="w-full" />
          </div>

          <p className="text-secondary-text font-semibold font-segoe-ui text-[17px]">
            Feeling/activity
          </p>
        </button>
      </div>
    </div>
  );
};

export default PostCreatePart;
