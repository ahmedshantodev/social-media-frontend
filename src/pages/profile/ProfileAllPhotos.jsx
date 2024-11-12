import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SecondaryButton from "../../components/layout/SecondaryButton";

const ProfileAllPhotos = ({ data, isLoading, setMenuActiveItem }) => {
  return (
    <div className="w-full bg-white px-4 pt-4 pb-4 mt-4 rounded-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <p className="font-poppins text-xl font-medium">Photos</p>

      {isLoading ? (
        <Skeleton containerClassName="flex-1" width={"100%"} height={"350px"} />
      ) : (
        <div className="flex flex-wrap mt-4 overflow-hidden gap-[6px]">
          {data?.images?.resources.length >= 1 &&
            data?.images?.resources.map(
              (item, index) =>
                index <= 5 && (
                  <div key={item.asset_id} className="w-[32.5%] aspect-square">
                    <img
                      src={item.secure_url}
                      alt={item.filename}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                )
            )}
        </div>
      )}

      <SecondaryButton
        onClick={() => setMenuActiveItem("photos")}
        className={`w-full mt-3`}
      >
        See all
      </SecondaryButton>
    </div>
  );
};

export default ProfileAllPhotos;
