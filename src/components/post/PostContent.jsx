import React, { useState } from "react";
import PostText from "./PostText";

const PostContent = ({ post }) => {
  const [isSeeMore, setIsSeeMore] = useState(true);
  return (
    <div>
      {post.type === "text" ? (
        <div>
          <PostText text={post.text} />
        </div>
      ) : post.type === "gif" ? (
        <di>
          {post.text && <PostText text={post.text} />}

          <div className="w-full flex items-center justify-center border-t border-primary-border/50">
            <img
              src={post?.gif.url}
              alt={post?.gif.description}
              className="max-w-full object-contain"
            />
          </div>
        </di>
      ) : post.type === "background" ? (
        <div
          className="w-full h-[450px] flex items-center justify-center"
          style={{
            background: `url(${post.background.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <pre
            style={{ color: post.background.textColor }}
            className="text-5xl font-inter text-center leading-[50px] mx-8 whitespace-pre-wrap"
          >
            {post.text}
          </pre>
        </div>
      ) : post.type === "images" ? (
        <div>
          {post.text && <PostText text={post.text} />}

          {post.images.length === 3 ? (
            <div className="flex gap-x-1 h-[450px] w-full">
              <div className="w-[50%]">
                <img
                  src={post.images[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-[50%] h-full flex flex-col justify-between">
                <img
                  src={post.images[1]}
                  alt=""
                  className="w-full h-[49.5%] object-cover"
                />

                <img
                  src={post.images[2]}
                  alt=""
                  className="w-full h-[49.5%] object-cover"
                />
              </div>
            </div>
          ) : post.images.length <= 4 ? (
            <div
              className={
                post.images.length === 1
                  ? "w-full overflow-hidden border-t border-primary-border/50"
                  : post.images.length === 2
                  ? "w-full overflow-hidden flex gap-x-[2px] border-t border-primary-border/50"
                  : post.images.length === 3
                  ? "w-full h-[300px]s overflow-hidden flex gap-x-[2px] border-t border-primary-border/50"
                  : post.images.length === 4
                  ? "w-full overflow-hidden flex gap-[2px] flex-wrap border-t border-primary-border/50"
                  : post.images.length > 4 &&
                    "w-full overflow-hidden flex gap-[2px] flex-wrap border-t border-primary-border/50"
              }
            >
              {post.images.map(
                (item, index) =>
                  index <= 3 && (
                    <img
                      key={index}
                      src={item}
                      alt=""
                      className={
                        post.images.length === 1
                          ? "w-full object-cover"
                          : post.images.length === 2
                          ? "w-1/2 aspect-square object-cover"
                          : post.images.length === 3
                          ? "w-1/3 aspect-square object-cover"
                          : post.images.length === 4
                          ? "w-[calc(50%-1px)] aspect-square object-cover"
                          : "w-[calc(50%-1px)] aspect-square object-cover"
                      }
                    />
                  )
              )}
            </div>
          ) : (
            <div className="w-full overflow-hidden flex justify-between gap-[2px] flex-wrap border-t border-[#ced0d4]/50">
              {post.images.map((item, index) =>
                index < 3 ? (
                  <img
                    key={index}
                    src={item}
                    alt=""
                    className={
                      post.images.length === 1
                        ? "w-full object-cover border"
                        : post.images.length === 2
                        ? "w-1/2 aspect-square object-cover"
                        : post.images.length === 3
                        ? "w-1/3 aspect-square object-cove"
                        : post.images.length === 4
                        ? "w-[calc(50%-1px)] aspect-square object-cover"
                        : "w-[calc(50%-1px)] aspect-square object-cover"
                    }
                  />
                ) : (
                  index == 3 && (
                    <div className="w-[calc(50%-1px)] relative">
                      <img
                        key={index}
                        src={item}
                        alt=""
                        className="w-full aspect-square object-cover"
                      />

                      <div className="w-full h-full bg-gray-600/50 absolute top-0 left-0 flex items-center justify-center">
                        <p className="text-4xl font-semibold text-white font-segoe-ui">
                          +{post.images.length - 4}
                        </p>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          )}
        </div>
      ) : post.type === "coverPhoto" ? (
        <div className="w-full overflow-hidden border-t border-primary-border/50">
          <img
            src={post?.images}
            alt={post?.username}
            className={"w-full min-h-[400px] object-cover"}
          />
        </div>
      ) : (
        post.type === "profilePicture" && (
          <div className="pb-[240px]">
            <div className="relative">
              <div className="w-full h-[260px]">
                <img
                  src={
                    post?.user?.coverPhoto ||
                    "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/341375218_559369716327248_6327505305866836115_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=xkuChejXRbEQ7kNvgFcmgpB&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AYUcwdKak3Kc-bSUiNCS-0k&oh=00_AYD316-6H0mAeWls7Gu1O-hnT_79uKLRkroYtua18YT1dQ&oe=67372520"
                  }
                  alt="cover photo"
                  className="w-full h-full object-cover rounded-b-[16px]"
                />
              </div>

              <div className="w-[400px] absolute bottom-0 translate-y-2/4 left-2/4 -translate-x-2/4 aspect-square rounded-full overflow-hidden border-4 border-white">
                <img
                  src={post?.images}
                  alt="hojo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PostContent;
