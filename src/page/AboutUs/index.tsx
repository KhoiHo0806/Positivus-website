import "./aboutUs.css";

export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-intro">
        <img src="aboutUs/introImage.png" alt="intro image" className="intro-img" />
        <div className="intro-content">
          <h1 className="header">Together for Success</h1>
          <p className="text">
            At Positivus, we help businesses grow by combining creativity,
            innovation, and data- driven strategies. Together, we build a future
            of shared success.
          </p>
        </div>
      </section>
    </div>
  );
};
