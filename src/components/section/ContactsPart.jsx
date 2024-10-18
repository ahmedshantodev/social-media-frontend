import React, { useState } from "react";
import ContactListItem from "../listItem/ContactListItem";
import { IoIosArrowDown } from "react-icons/io";
import { contactList } from "../../data/contactList";

const ContactsPart = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p className="font-segoe-ui font-semibold text-lg text-secondary-text mb-3">
        Contacts
      </p>

      <div>
        {contactList.map((item , index) => (
          <ContactListItem 
            key={index}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsPart;
