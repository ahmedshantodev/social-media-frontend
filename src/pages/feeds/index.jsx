import React from "react";
import { Helmet } from "react-helmet-async";
import PostCreatePart from "../../components/post/post_create_part";
import StoriesPart from "./StoriesPart";
import PostPart from "./PostPart";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import { useSendFriendRequstMutation } from "../../redux/api/friendsApi";

const Feeds = () => {
  const [sendFriendRequst] = useSendFriendRequstMutation()

  const handleClick = async () => {
    const response = await sendFriendRequst({
      senderId: "6746a0e595e06258d6d1287a",
      reciverId: "6746a0e595e06258d6d1287a"
    })
    console.log(response);
  }
  return (
    <>
      <Helmet>
        <title>Ripple</title>
      </Helmet>

      <section className="w-full h-full">
        <div className="flex w-full h-full overflow-y-auto">
          <div className="scrollbar-parent w-[22%] h-full sticky top-0 left-0">
            <LeftPart />
          </div>

          <div className="w-[56%] pt-5">
            <div className="w-[700px] mx-auto pb-1">
              <PostCreatePart />
              <StoriesPart />
              <PostPart />

              <button onClick={handleClick}>
                click
              </button>
            </div>
          </div>

          <div className="scrollbar-parent w-[22%] h-full sticky top-0 left-0 pr-1">
            <RightPart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feeds;
