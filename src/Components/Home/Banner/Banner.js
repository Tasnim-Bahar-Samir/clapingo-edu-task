import React from "react";
import bannerImg from '../../../assets/images/banner.jpg'
const Banner = () => {
  return (
    <div className="flex gap-1 md:flex-row flex-col-reverse px-10 md:px-20 xl:px-[120px] mt-14">
      <div>
        <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold">
          Hone your english <br /> speaking skills over{" "} <br />
          <span className="" style={{ color: "#319b8e" }}>
            one-on-one
          </span>{" "}
          video call
        </h1>
        <p className="mt-6">
          Practice english conversation with excellent communuicators across the
          country and speak like a PRO 😎.
        </p>
        <div className="mt-12 flex gap-8">
            <button className="secondary-bg py-[15px] px-[32px] rounded-[80px] text-white">Book a trial</button>
            <button className="py-[15px] px-[32px] rounded-[80px] border hover:bg-orange-600 hover:text-white color-secondary" style={{}}>Download our app</button>
        </div>
      </div>
      <div>
            <img className="w-[800px] rounded-lg" src={bannerImg} alt="" />
        </div>
    </div>
  );
};

export default Banner;
