import "./aboutUs.css";

export const AboutUs = () => {
  const impactList = [
    { number: "8+", content: "Years of Experience" },
    { number: "50+", content: "Experts" },
    { number: "100+", content: "Successful Campaigns" },
    { number: "20+", content: "Industry Awards" },
    { number: "500%", content: "ROI for our clients" },
  ];

  const journeyList = [
    {
      year: "2019",
      header: "The Beginning",
      content:
        "Positivus was founded to help businesses navigate the digital world and achieve online success.",
    },
    {
      year: "2021",
      header: "Industry Recognition",
      content:
        "Positivus was named among the top 50 global digital agencies, affirming our leadership.",
    },
    {
      year: "2023",
      header: "Innovation and Growth",
      content:
        "With over 50 experts, we continue to deliver cutting- edge solutions to help businesses thrive.",
    },
    {
      year: "2024",
      header: "Leading the Future",
      content:
        "This year, Positivus is pioneering the use of Al and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing.",
    },
  ];

  const coreValueList = [
    {
      header: "Client Success First",
      content:
        "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.",
      image: "",
    },
    {
      header: "Innovation",
      content: "We constantly strive to stay ahead of industry trends.",
      image: "aboutUs/innovationImg.png",
    },
    {
      header: "Collaboration",
      content: "We believe in the power of teamwork and partnership.",
      image: "aboutUs/collaboration.png",
    },
    {
      header: "Transparency",
      content:
        "Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity.",
      image: "",
    },
  ];

  return (
    <div className="about-us-container">
      <section className="about-us-intro">
        <img
          src="aboutUs/introImage.png"
          alt="intro image"
          className="intro-img"
        />
        <div className="intro-content">
          <h1 className="h1-text">Together for Success</h1>
          <p className="h4-text">
            At Positivus, we help businesses grow by combining creativity,
            innovation, and data- driven strategies. Together, we build a future
            of shared success.
          </p>
        </div>
      </section>

      <section className="our-impact-section">
        <div className="section-header-container">
          <h2 className="section-header">Our Impact in Numbers</h2>
          <p className="p-text">
            A snapshot of the milestones and achievements that drive our success
          </p>
        </div>

        <div className="impact-number-list">
          {impactList.map((item, index) => {
            return (
              <div className="impact-item" key={index}>
                <div className="h2-text">{item.number}</div>
                <p className="p-text">{item.content}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="our-journey-section">
        <div className="section-header-container">
          <h2 className="section-header">Our Journey</h2>
          <p className="p-text">
            From humble beginnings to industry leaders, discover how Positivus
            has evolved to drive success for businesses worldwide.
          </p>
        </div>
        <div className="our-jounrey-list">
          {journeyList.map((item, index) => {
            return (
              <div
                className="journey-item-container"
                key={index}
                style={{ justifyContent: index % 2 === 0 ? "start" : "end" }}
              >
                <h2 className="h2-text">{item.year}</h2>
                <div className="journey-item">
                  <h3
                    className="h3-text"
                    style={{ color: "white", zIndex: "10" }}
                  >
                    {item.header}
                  </h3>
                  <p
                    className="p-text"
                    style={{ color: "white", zIndex: "10" }}
                  >
                    {item.content}
                  </p>
                  <div
                    className="journey-pseudo-item"
                    style={
                      index % 2 === 0 ? { left: "11.225%" } : { right: "90%" }
                    }
                  >
                    <img
                      className={`pseudo-icon${index + 1}`}
                      src="aboutUs/journeyIcon.png"
                      alt="pseudo icon"
                      style={
                        index % 2 === 0
                          ? { left: "0", zIndex: "10" }
                          : { right: "0", zIndex: "10" }
                      }
                    />
                    <div className="border-hider"></div>
                  </div>
                </div>
                {(index === 1 || index === 2) && (
                  <img
                    src="aboutUs/journeyImg.png"
                    alt="journey image"
                    className={`image${index}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-us-core-value-section">
        <div className="section-header-container">
          <h2 className="section-header">Core values</h2>
          <p className="p-text">
            At the heart of everything we do are our core value
          </p>
        </div>

        <div className="core-value-list">
          {coreValueList.map((item, index) => {
            return (
              <div className="core-value-item" key={index}>
                <div
                  className="core-value-content"
                  style={
                    item.image === ""
                      ? {}
                      : { marginRight: "10%", width: "50%" }
                  }
                >
                  <h3 className="h3-text">{item.header}</h3>
                  <p className="p-text">{item.content}</p>
                </div>
                {item.image !== "" && (
                  <img
                    src={item.image}
                    alt="core value image"
                    className={`image${index}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
