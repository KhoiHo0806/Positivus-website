import "./home.css";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  const servicesItemList = [
    {
      title: "Search engine optimization",
      titleBackground: "#B9FF66",
      background: "#F3F3F3",
    },
    {
      title: "Pay-per-click advertising",
      titleBackground: "#FFFFFF",
      background: "#B9FF66",
    },
    {
      title: "Social Media Marketing",
      titleBackground: "#FFFFFF",
      background: "#191A23",
    },
    {
      title: "Email Maketing",
      titleBackground: "#B9FF66",
      background: "#F3F3F3",
    },
    {
      title: "Content Creation",
      titleBackground: "#FFFFFF",
      background: "#B9FF66",
    },
    {
      title: "Analytics and Tracking",
      titleBackground: "#B9FF66",
      background: "#191A23",
    },
  ];

  const caseStudiesList = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  ];

  const workingProcessList = [
    {
      name: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Research and Strategy Development",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Implementation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Monitoring and Optimization",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Reporting and Communication",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Continual Improvement",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];

  const teamList = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      experience:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      experience:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      experience:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      experience:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      experience:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      experience:
        "2+ years of experience in writing and editing \nSkilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  const [expandIndexes, setExpandIndexes] = useState<number[]>([]);

  const listExpandHandler = (index: number) => {
    setExpandIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // Remove index if it's already in the list
          : [...prevIndexes, index] // Add index if it's not in the list
    );
  };

  const customPrevArrow = (
    clickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => (
    <button
      type="button"
      onClick={clickHandler}
      disabled={!hasPrev} // Disable when no previous slide
      className={`custom-arrow custom-prev-arrow ${!hasPrev ? "disabled" : ""}`}
      aria-label={label}
    >
      <img src="Home/testimonial/arrowLeftIcon.png" alt="carousel left arow" />
    </button>
  );

  const customNextArrow = (
    clickHandler: () => void,
    hasNext: boolean,
    label: string
  ) => (
    <button
      type="button"
      onClick={clickHandler}
      disabled={!hasNext} // Disable when no next slide
      className={`custom-arrow custom-next-arrow ${!hasNext ? "disabled" : ""}`}
      aria-label={label}
    >
      <img
        src="Home/testimonial/arrowRightIcon.png"
        alt="carousel right arow"
      />
    </button>
  );

  const dotIcon = "Home/testimonial/dotIcon.png";
  const dotIconActive = "Home/testimonial/dotIconActive.png";

  return (
    <div className="home-page-container">
      <section className="home-intro-section">
        <div className="text-and-image">
          <div className="intro-section-text">
            <h1 className="intro-section-text-header">
              Navigating the digital landscape for success
            </h1>
            <p className="intro-section-text-content">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="intro-section-text-button">
              Book a consultation
            </button>
          </div>
          <img
            src="Home/intro/homeIntroImage.png"
            alt="intro image"
            className="intro-section-image"
          />
        </div>
      </section>

      <img
        src="Home/intro/homeBrandLogo.png"
        alt="brand logo"
        className="home-brand-logo"
      />

      <section className="home-services-section">
        <div className="services-header">
          <h2 className="services-header-main-text">Services</h2>
          <div className="services-header-sub-text">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </div>
        </div>
        <div className="home-services-item-list">
          {servicesItemList.map((item, index) => {
            return (
              <div
                className="home-services-item"
                key={index}
                style={{ backgroundColor: `${item.background}` }}
              >
                <div className="home-services-item-left">
                  <h3
                    className="title"
                    style={{ backgroundColor: `${item.titleBackground}` }}
                  >
                    {item.title}
                  </h3>
                  <div className="learn-more">
                    <img
                      src={`Home/services/learnMoreIcon${
                        item.background === "#191A23" ? "2" : "1"
                      }.png`}
                      alt="learn more icon"
                    />
                    <p
                      style={{
                        color: `${
                          item.background === "#191A23" ? "white" : "black"
                        }`,
                      }}
                    >
                      Learn more
                    </p>
                  </div>
                </div>
                <div className="home-services-item-right">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={`Home/services/servicesImage${index + 1}.png`}
                    alt="service image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-contact-section">
        <div className="home-contact-left">
          <h3 className="title">Let’s make things happen</h3>
          <p className="text">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="button">Get your free proposal</button>
        </div>
        <div className="home-contact-right">
          <img
            style={{ width: "100%", height: "100%" }}
            src="Home/contact/contactImage.png"
            alt="contact-image"
          />
        </div>
      </section>

      <section className="home-case-studies-section">
        <div className="home-case-studies-header">
          <h2 className="header">Case Studies</h2>
          <p className="text">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="home-case-studies-content">
          {caseStudiesList.map((caseStudy, index) => {
            return (
              <div className="caseStudy-item" key={index}>
                <p className="case-study-text">{caseStudy}</p>
                <div className="learn-more">
                  <p> Learn more</p>
                  <img
                    src="Home/services/learnMoreIcon1.png"
                    alt="learn more icon"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-working-process-section">
        <div className="home-working-process-header">
          <h2 className="header">Our Working Process</h2>
          <p className="text">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="home-woking-process-list">
          {workingProcessList.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  height: expandIndexes.includes(index)
                    ? "279px"
                    : "calc((279px / 2) - 1px)",
                  borderRadius: "45px",
                  borderBottom: "5px solid black",
                  overflow: "hidden",
                  transition: "height 0.3s ease",
                }}
              >
                <div
                  className="working-process-item"
                  style={{
                    backgroundColor: expandIndexes.includes(index)
                      ? "#b9ff66"
                      : "#F3F3F3",
                    transition: "background-color 0.5s ease",
                  }}
                >
                  <div className="working-process-item-upper">
                    <div className="header-and-index">
                      <p className="item-index">0{index + 1}</p>
                      <p className="item-header">{item.name}</p>
                    </div>
                    <img
                      onClick={() => {
                        listExpandHandler(index);
                      }}
                      src={`Home/workingProcess/${
                        expandIndexes.includes(index)
                          ? "shrinkIcon"
                          : "expandIcon"
                      }.png`}
                      alt="working process icon"
                    />
                  </div>
                  <p className="working-process-item-lower">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="home-team-section">
        <div className="team-section-header">
          <h2 className="header">Team</h2>
          <p className="text">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="home-team-list">
          {teamList.map((item, index) => {
            return (
              <div className="team-list-item" key={index}>
                <div className="team-list-item-upper">
                  <img
                    src={`Home/team/pfp${index + 1}.png`}
                    alt=""
                    className="pfp"
                  />
                  <div className="name-and-position">
                    <h4 className="name"> {item.name}</h4>
                    <p className="position">{item.position}</p>
                  </div>
                  <img
                    src="Home/team/icon.png"
                    alt="in icon"
                    className="icon"
                  />
                </div>
                <p className="team-list-item-lower">{item.experience}</p>
              </div>
            );
          })}
        </div>
        <div className="home-team-button-container">
          <button className="home-team-button">See all team</button>
        </div>
      </section>

      <section className="home-testimonials-section">
        <div className="home-testimonials-header">
          <h2 className="header">Testimonials</h2>
          <p className="text">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
        <div className="home-testimonials-carousel">
          <Carousel
            showThumbs={false}
            renderArrowPrev={customPrevArrow}
            renderArrowNext={customNextArrow}
            renderIndicator={(onClickHandler, isSelected, index) => {
              const dotStyle = {
                margin: "0 8px",
                cursor: "pointer",
                width: "16px",
                height: "16px",
                opacity: isSelected ? 1 : 0.5, // Change opacity for inactive dots
              };

              return (
                <img
                  key={index}
                  src={isSelected ? dotIconActive : dotIcon}
                  onClick={onClickHandler}
                  alt={`Dot ${index + 1}`}
                  style={dotStyle}
                  role="button"
                  aria-label={`Select slide ${index + 1}`}
                />
              );
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                <img
                  src="Home/testimonial/carousel.png"
                  alt={`Slide ${i + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="home-contact-us-section">
        <div className="home-contact-us-header">
          <h2 className="header">Contact Us</h2>
          <p className="text">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        <form action="" className="home-contac-us-form">
          <div className="form-inputs">
            <label>
              <input type="checkbox" name="sayHi" value="newsletter" />{" "}
              Say Hi
            </label>
            <label>
              <input type="checkbox" name="GetAQuote" value="newsletter" />{" "}
              Get a Quote
            </label>
          </div>
          <div className="form-image">
            <img src="Home/contactUsForm/formImage.png" alt="form image" />
          </div>
        </form>
      </section>
    </div>
  );
};
