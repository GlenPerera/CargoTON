const solution = () => {
  return (
    <div>
      <header className="text-center py-8">
        <h1 className="text-green-500 text-lg font-bold">
          Real Solution Real Fast
        </h1>
        <h2 className="text-4xl font-quantico font-bold mt-2">
          Best Global Logistic Solutions
        </h2>
      </header>

      <main className="container mx-auto px-4">
        <div className="bg-white shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="animate-fadeInUp">
              <img
                src="flight.png"
                alt="Air Freight"
                className="w-full h-48 object-cover"
                style={{ imageRendering: "auto" }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Air Freight Services</h3>
                <p className="mt-2 text-gray-600">
                  At our auto service garage, we fully appreciate how people
                  find difficult.
                </p>
                <a
                  href="#"
                  className="text-green-500 font-semibold mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <img
                src="ship.png"
                alt="Drone Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Drone Services</h3>
                <p className="mt-2 text-gray-600">
                  At our auto service garage, we fully appreciate how people
                  find difficult.
                </p>
                <a
                  href="#"
                  className="text-green-500 font-semibold mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8">
        <p className="text-lg">
          Logistic & Transport Solutions Save Your Time.{" "}
          <span className="font-bold">Find your solution.</span>
        </p>
      </footer>
    </div>
  );
};

export default solution;
