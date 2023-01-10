import React from "react";
import './Offer.css'
import im1 from "../../../assets/images/offer-images/img-1.png";
import im2 from "../../../assets/images/offer-images/img-2.png";
import im3 from "../../../assets/images/offer-images/img-3.png";
const Offers = () => {
  const offers = [
    {
      _id: 1,
      img: im1,
      title: "Customised Curriculum",
      details:
        "Customised sessions and module for Basic, Intermediate and Advanced learners.",
    },
    {
      _id: 2,
      img: im2,
      title: "Experimental Learning ",
      details:
        "Do not study English, rather consume and use it.",
    },
    {
      _id: 3,
      img: im3,
      title: "Shadowing Method",
      details:
        "Think and speak in English rather than translating it from mother tongue.",
    },
  ];
  return (
    <div className="mt-28 px-20 md:px-16 xl:px-[120px]">
      <h1
        className="text-center text-4xl font-semibold mb-9"
        style={{ color: "#001F27" }}
      >
        What we offer?
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div style={{backgroundImage: offer.img}} key={offer._id} className="card shadow-xl relative h-[400px]">
            <figure className="h-full rounded-lg">
              <img className=" h-full w-full rounded-lg" src={offer.img} alt="Offer Img" />
            </figure>
            <div className="p-2 card-bg h-1/3 absolute bottom-0 rounded-bl-lg rounded-br-lg w-full">
              <h2 className="color-primary text-[12px]">{offer.title}</h2>
              <p className="text-white text-[16px]">{offer.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
