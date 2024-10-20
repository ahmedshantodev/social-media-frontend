import React from "react";
import OnlineListItem from "../listItem/OnlineListItem";
import { onlineList } from "../../data/onlineList";

const OnlinePart = () => {
  return (
    <div className="pb-3">
      <p className="font-segoe-ui font-semibold text-lg text-secondary-text mb-3">
        Online
      </p>

      <div>
        {onlineList.map((item , index) => (
          <OnlineListItem 
            key={index}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlinePart;
