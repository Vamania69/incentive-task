import React from "react";
import { SingleFAQCard } from "./SingleFAQCard";

export const FAQ = () => {
  const FAQData = [
    { faq: "What is an ESOP?", value: null },
    {
      faq: "How does the calculator determine ESOP outcomes??",
      value:
        "The calculator estimates ESOP outcomes based on several factors, including the number of ESOP shares allocated, the company's stock performance, and the vesting period. It may also consider your contribution to the ESOP plan.",
    },
    { faq: "What is the 'Vesting Period' in an ESOP?", value: null },
    {
      faq: "Can I use this calculator for any type of ESOP plan?",
      value: null,
    },
  ];
  return (
    <>
      <section className="about-section m-6 p-2 md:m-8">
        <h3>Terms you should know</h3>
        <div className="list-container mt-5 space-y-5">
          {FAQData.map((item, i) => {
            return (
              <SingleFAQCard
                index={i}
                faqQuestion={item.faq}
                value={item.value}
              />
            );
          })}
        </div>
        <img
          src="/assets/explore calculator wider.png"
          alt=""
          className=" hidden min-w-full mt-10 md:block"
        />
        <img
          src="/assets/explore calculator mobile.png"
          alt=""
          className=" block min-w-full mt-10 md:hidden"
        />
      </section>
    </>
  );
};
