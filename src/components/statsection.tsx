const statsection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around text-center">
          <div className="w-full md:w-1/3 py-4">
            <h3 className="text-6xl font-bold text-blue-500">890</h3>
            <p className="text-xl font-semibold text-blue-500">
              Delivered Packages
            </p>
          </div>
          <div className="w-full md:w-1/3 py-4">
            <h3 className="text-6xl font-bold text-blue-500">137</h3>
            <p className="text-xl font-semibold text-blue-500">
              Countries Covered
            </p>
          </div>
          <div className="w-full md:w-1/3 py-4">
            <h3 className="text-6xl font-bold text-blue-500">740</h3>
            <p className="text-xl font-semibold text-blue-500">Tons of Goods</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default statsection;
