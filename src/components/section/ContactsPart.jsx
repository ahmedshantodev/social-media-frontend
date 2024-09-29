import React, { useState } from "react";
import ContactListItem from "../listItem/ContactListItem";
import { IoIosArrowDown } from "react-icons/io";

const ContactsPart = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p className="font-inter font-semibold text-lg text-secondary-text mb-3">
        Contacts
      </p>

      <div>
        <ContactListItem
          image={
            "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/291928883_3353675438189447_2298494768866597441_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4EzA7v1LrEoQ7kNvgGT10wl&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AFRRuefv0ro3AF6nKiKECnD&oh=00_AYDx5G0el2sQTGLw01s84zBEKwCU7B9OptBN8xwjw5tC8w&oe=66FE3AA8"
          }
          name={"Ashif Mahmud"}
        />
        <ContactListItem
          image={
            "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/460025155_1204060104249308_2825625522209760280_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SNsjc9wa1kEQ7kNvgFtx4NP&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AT1JjX0jpu57WASk_S1vDWU&oh=00_AYBHM_T3RE016VWRkK_DOrV9oisDzJUNms8puHcAJeGezQ&oe=66FCC6FE"
          }
          name={"Rayhan Ahmed Siam"}
        />
        <ContactListItem
          image={
            "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/435545735_964632115143688_8511688179507127314_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MO2b7n2fSfIQ7kNvgGwcTf8&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AiAZkeB8UMAAzN2duVQUs2Z&oh=00_AYDRVSpnSFdtQWxCgbFV0r5NwmDS5sdThlzE_zEjAAIeSw&oe=66FCA9BB"
          }
          name={"Forhad Hossain Mamun"}
        />
        <ContactListItem
          image={
            "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/291928883_3353675438189447_2298494768866597441_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4EzA7v1LrEoQ7kNvgGT10wl&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AFRRuefv0ro3AF6nKiKECnD&oh=00_AYDx5G0el2sQTGLw01s84zBEKwCU7B9OptBN8xwjw5tC8w&oe=66FE3AA8"
          }
          name={"Ashif Mahmud"}
        />
        <ContactListItem
          image={
            "https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/460025155_1204060104249308_2825625522209760280_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SNsjc9wa1kEQ7kNvgFtx4NP&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AT1JjX0jpu57WASk_S1vDWU&oh=00_AYBHM_T3RE016VWRkK_DOrV9oisDzJUNms8puHcAJeGezQ&oe=66FCC6FE"
          }
          name={"Rayhan Ahmed Siam"}
        />
        <ContactListItem
          image={
            "https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/435545735_964632115143688_8511688179507127314_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MO2b7n2fSfIQ7kNvgGwcTf8&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AiAZkeB8UMAAzN2duVQUs2Z&oh=00_AYDRVSpnSFdtQWxCgbFV0r5NwmDS5sdThlzE_zEjAAIeSw&oe=66FCA9BB"
          }
          name={"Forhad Hossain Mamun"}
        />
      </div>
    </div>
  );
};

export default ContactsPart;
