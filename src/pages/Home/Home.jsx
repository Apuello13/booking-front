import Hero from "../../components/Hero/Hero";
import video from "../../assets/videos/presentation_video.mp4";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Hero />
      </div>
      <div className="text-center mt-4">
        <h2 className="title">
          Why <span className="text-primary">choose us?</span>
        </h2>
        <p className="text-secondary">
          We have it that you looking for and good prices
        </p>
      </div>
      <section className="text-center mt-5 mb-5">
        <h3 className="title">
          Only <span className="text-warning">three</span> steps
        </h3>
        <ul className="steps">
          <li>
            <h2>1</h2> Book
          </li>
          <li>
            <h2>2</h2> Pay
          </li>
          <li>
            <h2>3</h2> Enjoy
          </li>
        </ul>
      </section>
      <section className="container mb-3">
        <p className="title">
          A little about us <span className="text-primary">.</span>
        </p>
        <video src={video} width="100%" controls="true"></video>
      </section>
      <section className="container">
        <p className="title text-end">
          We are located <span className="text-warning">here.</span>
        </p>
      </section>
    </>
  );
};
export default Home;
