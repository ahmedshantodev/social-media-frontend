import React from "react";

const PostContent = ({ post }) => {
  return (
    <div>
      {post.type === "text" ? (
        <div
          id="post-content"
          className="px-5 pb-4"
          dangerouslySetInnerHTML={{ __html: post.text }}
        />
      ) : post.type === "gif" ? (
        <div className="w-full flex items-center justify-center">
          <img
            src={post.gif.url}
            alt={post.gif.description}
            className="max-w-full object-contain"
          />
        </div>
      ) : post.type === "background" ? (
        <div
          className="w-full h-[450px] flex items-center justify-center"
          style={{
            background: `url(${post.background.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p
            style={{ color: post.background.textColor }}
            className="text-5xl font-inter text-center leading-[50px] mx-8"
          >
            {post.text}
          </p>
        </div>
      ) : (
        <div>
          {post.text && (
            <div
              id="post-content"
              className="px-5 pb-4"
              dangerouslySetInnerHTML={{ __html: post.text }}
            />
          )}

          {post.images.length <= 4 ? (
            <div
              className={
                post.images.length === 1
                  ? "w-full overflow-hidden border-t border-[#ced0d4]/50"
                  : post.images.length === 2
                  ? "w-full overflow-hidden flex gap-x-[2px] border-t border-[#ced0d4]/50"
                  : post.images.length === 3
                  ? "w-full h-[300px]s overflow-hidden flex gap-x-[2px] border-t border-[#ced0d4]/50"
                  : post.images.length === 4
                  ? "w-full overflow-hidden flex gap-[2px] flex-wrap border-t border-[#ced0d4]/50"
                  : post.images.length > 4 &&
                    "w-full overflow-hidden flex gap-[2px] flex-wrap border-t border-[#ced0d4]/50"
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
      )}
    </div>
  );
};

export default PostContent;
