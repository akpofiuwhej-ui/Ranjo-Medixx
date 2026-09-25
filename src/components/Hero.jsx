const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full">
      
      {/* Background Image */}
      <img
        src="images/picture1.jpg"
        alt="lab"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-3xl text-white">
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Premium Chemical Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            High-quality reagents and laboratory products for professionals.
          </p>

          <button className="mt-8 bg-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-600 transition">
            Browse Products
          </button>

        </div>
      </div>

    </div>
  );
};

export default Hero;