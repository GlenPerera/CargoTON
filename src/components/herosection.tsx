import React from "react";

const herosection = () => {
  return (
    <section className="hero relative">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-10 px-4 md:px-0 mt-16">
        <div className="hero-text md:ml-32 bg-white relative z-10 p-6 animate-fadeInUp">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="font-quantico">Logistic</span>
            <br />
            <br />
            <span className="text-black-400">Best Shipping</span>
            <br />
            <span className="text-yellow-400">Partner</span>
          </h2>
          <p className="text-lg md:text-xl mt-4 md:mt-6 mb-8 md:mb-12">
            We are a global shipping company who supply quality products all
            over the world!
          </p>
          <a
            href="#"
            className="inline-block bg-[yellow] hover:bg-yellow-500 text-black py-2 px-6 md:px-8 rounded-lg text-lg font-semibold transition duration-300"
          >
            Discover More
          </a>
        </div>
        <div className="hero-image w-full mr-4 md:w-auto animate-slideInRight sm:ml-8 flex justify-center">
          <img
            src="/harbour.png"
            className="max-w-full max-w-[1000px]"
            style={{
              maxWidth: "100%",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)", // Center the image horizontally
            }}
            alt="Harbour"
          />
        </div>
      </div>
    </section>
  );
};

export default herosection;
