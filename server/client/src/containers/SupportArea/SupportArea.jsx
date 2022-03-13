import React from "react";
import supportOne from "../../assets/images/support-1.png";
import supportTwo from "../../assets/images/support-2.png";
import supportThree from "../../assets/images/support-3.png";
import supportFour from "../../assets/images/support-4.png";

const SupportArea = () => {
  const supportData = [
    {
      id: 1,
      title: "Free Shipping",
      desc: "Free shipping on all order",
      img: supportOne,
    },
    {
      id: 2,
      title: "Support 24/7",
      desc: "Free shipping on all order",
      img: supportTwo,
    },
    {
      id: 3,
      title: "Money Return",
      desc: "Free shipping on all order",
      img: supportThree,
    },
    {
      id: 4,
      title: "Order Discount",
      desc: "Free shipping on all order",
      img: supportFour,
    },
  ];
  return (
    <section className="support section container-div">
      <div className="support__area grid">
        {supportData.map(({ id, title, desc, img }) => (
          <div key={id} className="support__area__item">
            <img className="support__area__item-img" src={img} alt="" />
            <div className="support__area__item__desc">
              <h4 className="support__area__item__desc-title">{title}</h4>
              <div className="support__area__item__desc-text">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportArea;
