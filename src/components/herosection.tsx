import React from "react";

const herosection = () => {
  return (
    <section className="hero relative">
      <div className="container mx-auto flex items-center justify-between py-10">
        <div className="hero-text ml-32 bg-[white] relative z-10 p-6">
          <h2 className="text-4xl font-bold">
            Logistic
            <br />
            <br />
            <span className="text-black-400">Best Shipping</span>
            <br />
            <span className="text-yellow-400">Partner</span>
          </h2>
          <p className="mt-4">
            We are a global shipping company who supply quality products all
            over the world!
          </p>
          <a
            href="#"
            className="mt-4 inline-block bg-[yellow] text-black py-2 px-4 hover:bg-yellow-300"
          >
            Discover More
          </a>
        </div>
        <div className="hero-image ">
          <img
            src="/harbour.png"
            className="w-full max-w-[1000px] mr-12 "
            style={{ transform: "translateX(-180px)" }}
            alt="Harbour"
          />
        </div>
      </div>
    </section>
  );
};

export default herosection;
