import React from "react";

const herosection = () => {
  return (
    <section className="hero">
      <div className="container mx-auto flex items-center justify-between py-10">
        <div className="hero-text ml-12">
          <h2 className="text-4xl font-bold">
            Logistic
            <span className="text-yellow-400">Best Shipping Partner</span>
          </h2>
          <p className="mt-4">
            We are a global shipping company who supply quality products all
            over the world!
          </p>
          <a
            href="#"
            className="mt-4 inline-block bg-yellow-400 text-black py-2 px-4 rounded"
          >
            Discover More
          </a>
        </div>
        <div className="hero-image">
          <img
            src="/harbour.png"
            className="w-full max-w-[500px] mr-12"
            alt="Harbour"
          />
        </div>
      </div>
    </section>
  );
};

export default herosection;
