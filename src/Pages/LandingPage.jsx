import ImageIllustration from "../Components/ImageIllustration";
import "../Styles/landingpage.css";

const LandingPage = () => {
  return (
    <>
      <section className="hero-section">
        <header>
          <div className="header-container">
            <img src="./photoverse.png" alt="" />
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="abs circle"></div>
        </header>
        <h1>Never Lose Life's Best Memories</h1>
        <h2>A cloud based storage that helps rediscover your best photos</h2>
        <ImageIllustration />
      </section>
      <section className="features-section">
      </section>
    </>
  );
};

export default LandingPage;
