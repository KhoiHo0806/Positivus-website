import styles from "./useCase.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const UseCases = () => {
  const featuredSuccessList = [
    { percent: "200%", content: "increase in organic traffic" },
    { percent: "150%", content: "rise in online sales" },
    { percent: "75%", content: "reduction in cost-per-click (CPC)" },
    { percent: "300%", content: "improvement in conversion rate" },
  ];

  const successStoriesList = [
    {
      name: "E-commerce Fashion Brand",
      content:
        "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
    },
    {
      name: "Local Restaurant Chain",
      content:
        "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
    },
    {
      name: "Healthcare Provider",
      content:
        "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
    },
    {
      name: "E-commerce Fashion Brand",
      content:
        "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
    },
    {
      name: "Local Restaurant Chain",
      content:
        "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
    },
    {
      name: "Healthcare Provider",
      content:
        "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
    },
  ];

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
    <div className={styles.useCasesContainer}>
      <section className={styles.introSection}>
        <img
          src="usecases/introImage.png"
          alt="intro section image"
          className={styles.introImage}
        />
        <div className={styles.introContent}>
          <h1 className="h1-text">Proven Success Stories</h1>
          <img
            src="usecases/introImgMobile.png"
            alt="intro section image"
            className={styles.introImageMobile}
          />
          <p className="p-text">
            See how our innovative digital marketing strategies have transformed
            businesses. Whether through SEO, PPC, social media, or web design,
            these use cases highlight the tangible impact of our work. Explore
            the successes and envision what we can achieve together.
          </p>
        </div>
      </section>

      <section className={styles.featuredSuccessSection}>
        <div className={styles.featureSectionLeft}>
          <h2 className="section-header">Featured Success Story</h2>
          <h3 className="h3-text">
            Scaling Success for a Leading E-Commerce Brand
          </h3>
          <p className="p-text">
            Through a comprehensive SEO and PPC strategy, we helped this
            e-commerce brand increase visibility, drive traffic, and boost
            sales.
          </p>
          <h4 className="h4-text">
            <img src="usecases/featureSuccessIcon.png" alt="Read icon" />
            Read
          </h4>
        </div>
        <div className={styles.featureSectionRight}>
          {featuredSuccessList.map((item, index) => {
            return (
              <div className={styles.featuredItem} key={index}>
                <h3 className="h3-text">{item.percent}</h3>
                <p className="p-text">{item.content}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.featuredSuccessSectionMobile}>
        <div className={styles.featureSectionLeft}>
          <img src="service/searchEngineIcon.png" alt=" feture success icon" />
        </div>
        <div className={styles.featureSectionRight}>
          <h2 className="section-header">Featured</h2>
          <h3 className="h3-text">
            Scaling Success for a Leading E-Commerce Brand
          </h3>
          <p className="p-text">
            Through a comprehensive SEO and PPC strategy, we helped this
            e-commerce brand increase visibility, drive traffic, and boost
            sales.
          </p>
          {featuredSuccessList.map((item, index) => {
            return (
              <div className={styles.featuredItem} key={index}>
                <h3 className="h3-text">{item.percent}</h3>
                <p className="p-text">{item.content}</p>
              </div>
            );
          })}
          <h4 className="h4-text">
            <img src="usecases/featureSuccessIcon.png" alt="Read icon" />
            Read
          </h4>
        </div>
      </section>

      <section className={styles.successStorySection}>
        <div className="section-header-container">
          <h2 className="section-header">All Success Stories</h2>
          <p className="p-text">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        <div className={styles.successStoriesList}>
          {successStoriesList.map((item, index) => {
            return (
              <div className={styles.successItem} key={index}>
                <h3 className="h3-text">{item.name}</h3>
                <p className="p-text">{item.content}</p>
                <h4 className="h4-text">
                  <img
                    src="usecases/successStotriesIcon.png"
                    alt="learn more icon"
                  />
                  Learn more
                </h4>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.testinmonialsSection}>
        <div className="section-header-container">
          <h2 className="section-header">Testimonials</h2>
          <p className="p-text">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>

        <div className={styles.homeTestimonialsCarousel}>
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

      <section className={styles.createSuccessStorySection}>
        <div className={styles.createSuccessContent}>
          <h3 className="h3-text">Let's Create Your Next Success Story</h3>
          <p className="p-text">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="button">Get your free proposal</button>
        </div>
        <img
          src="usecases\createSuccessStoryImg.png"
          alt="create our success story image "
          className={styles.createSuccessImg}
        />
      </section>
    </div>
  );
};
