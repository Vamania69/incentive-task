import React, { useState } from "react";

export const SingleFAQCard = ({ faqQuestion, value }) => {
  const [showDetails, setShowDetails] = useState(false);
  const changeHandler = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className=" p-4 md:p-6 bg-[#1F1F1F]  rounded-lg">
        <div className="flex justify-between ">
          <h3 className="text-sm xs:text-lg sm:text-xl">{faqQuestion}</h3>
          <button className="text-xl" onClick={changeHandler}>
            {showDetails ? "-" : "+"}
          </button>
        </div>
        {
          // render full faq if showDetails is true
        }
        {showDetails ? (
          value ? (
            <p
              className={`text-[#BDBDBD] mt-4 text-sm sm:text-base max-w-[90%]`}
            >
              {value}
            </p>
          ) : null
        ) : null}
      </div>
    </>
  );
};
