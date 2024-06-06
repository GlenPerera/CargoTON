const news = () => {
  return (
    <div>
      <br />

      <header className="text-center py-8">
        <h2 className="text-4xl font-quantico font-bold mt-2">Latest News</h2>
      </header>

      <main className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="flight.png"
              alt="Air Freight"
              className="w-full h-48 object-cover"
              style={{ imageRendering: "auto" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Air Freight Services</h3>
              <p className="mt-2 text-gray-600">
                At our auto service garage, we fully appreciate how people find
                difficult.
              </p>
              <a
                href="#"
                className="text-green-500 font-semibold mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="ship.png"
              alt="Drone Services"
              className="w-full h-48 object-cover"
              style={{ imageRendering: "auto" }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Drone Services</h3>
              <p className="mt-2 text-gray-600">
                At our auto service garage, we fully appreciate how people find
                difficult.
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
      </main>
    </div>
  );
};

export default news;
