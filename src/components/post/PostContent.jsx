import React, { useState } from "react";

const PostContent = ({ post }) => {
  const [isSeeMore, setIsSeeMore] = useState(true);
  return (
    <div>
      {post.type === "text" ? (
        <div>
          <pre
            onClick={() => setIsSeeMore(!isSeeMore)}
            className={
              "text-[20px] font-segoe-ui px-4 pb-2 whitespace-pre-wrap"
            }
          >
            {post.text}
          </pre>
        </div>
      ) : post.type === "gif" ? (
        <di>
          <pre className="text-[20px] font-segoe-ui px-4 pb-2 whitespace-pre-wrap">
            {post.text}
          </pre>

          <div className="w-full flex items-center justify-center border-t border-primary-border/50">
            <img
              src={post.gif.url}
              alt={post.gif.description}
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
      ) : (
        <div>
          {post.text && (
            <pre className="text-[20px] font-segoe-ui px-4 pb-2 whitespace-pre-wrap">
              {post.text}
            </pre>
          )}

          {post.images.length <= 4 ? (
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
      )}
    </div>
  );
};

export default PostContent;
