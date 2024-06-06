import "./carousel.css";
const carousel = () => {
  const logos = [
    "logo1.jpg",
    "logo2.jpg",
    "logo3.jpg",
    "logo4.jpg",
    "logo5.jpg",
  ];
  return (
    <div className="logo-carousel">
      <div className="logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo} // Adjusted path
            alt={`Partner logo ${index}`}
            className="logo"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo} // Adjusted path
            alt={`Partner logo ${index}`}
            className="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default carousel;
