import "./Hero.css";
const Hero = () => {
  return (
    <div className="d-flex justify-content-around align-items-center pb-5 shadow-sm">
      <div className="hero-text">
        <h3 className="mb-3">We come to reform the vacations</h3>
        <div className="hr mb-2"></div>
        <p>Reserve without so much return and easy</p>
        <button className="btn btn-primary">Book now</button>
      </div>
      <div className="hero-image"></div>
    </div>
  );
};
export default Hero;
