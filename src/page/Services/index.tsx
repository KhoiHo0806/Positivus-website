import styles from "./service.module.css";

export const Services = () => {
  const seoProcessList = [
    {
      name: "Website Audit & Analysis",
      content:
        "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
    },
    {
      name: "Keyword Research & Strategy",
      content:
        "Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.",
    },
    {
      name: "On-Page Optimization",
      content:
        "We optimize your website's structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.",
    },
    {
      name: "Content Creation & Optimization",
      content:
        "High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.",
    },
    {
      name: "Link Building",
      content:
        "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.",
    },
    {
      name: "Monitoring & Reporting",
      content:
        "We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.",
    },
  ];

  const useCasesList = [
    {
      name: "E-commerce Fashion Brand",
      content:
        "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
    },
    {
      name: "Local Restaurant Chain",
      content:
        "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility. driving a 300% boost in online reservations and foot traffic.",
    },
    {
      name: "Healthcare Provider",
      content:
        "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
    },
  ];

  const otherServiceList = [
    {
      name: "Pay-per-click advertising",
      image: "Home/services/servicesImage2.png",
    },
    {
      name: "Social Media Marketing",
      image: "Home/services/servicesImage3.png",
    },
    { name: "Email Marketing", image: "Home/services/servicesImage4.png" },
    { name: "Content Creation", image: "Home/services/servicesImage5.png" },
    {
      name: "Analytics and Tracking",
      image: "Home/services/servicesImage6.png",
    },
    {
      name: "Search Engine Optimization",
      image: "Home/services/servicesImage1.png",
    },
  ];

  return (
    <div className={styles.serviceContainer}>
      <section className={styles.serviceIntroSection}>
        <img
          src="service/serviceIntroImg.png"
          alt="service intro image"
          className={styles.serviceIntroSectionImage}
        />
        <div className={styles.introContent}>
          <h1 className="h1-text">Expert Digital Marketing Services</h1>
          <p className="p-text">
            Unlock your business's full potential with tailored strategies
            designed to drive growth and deliver results.
          </p>
        </div>
      </section>

      <img
        src="service/backImg.png"
        alt="back image"
        className={styles.backImg}
      />

      <section className={styles.serachEngineSection}>
        <img
          src="service/searchEngineIcon.png"
          alt="search engine icon"
          className={styles.icon}
        />
        <h2 className="section-header">Search engine optimization</h2>
        <div className={styles.content}>
          <p className="p-text">
            SEO is the process of improving your website's visibility on search
            engines like Google. By optimizing your content and site structure,
            we help your business rank higher in search results, driving more
            organic traffic and potential customers.
          </p>
          <button className="button">Boost My Rankings</button>
        </div>
      </section>

      <section className={styles.howWeWorkSection}>
        <div className="section-header-container">
          <h2 className="section-header">How We Work: SEO Process</h2>
          <p className="p-text">
            Our step-by-step SEO process ensures your website ranks higher,
            attracts more traffic, and drives lasting results.
          </p>
        </div>

        <div className={styles.seoProcessList}>
          {seoProcessList.map((item, index) => {
            return (
              <div className={styles.processItem} key={index}>
                <img
                  src={`service/seoProcess${index + 1}.png`}
                  alt="seo process image"
                  className={styles.itemImage}
                />
                <div className={styles.itemContent}>
                  <h3 className="h3-text">{item.name}</h3>
                  <p className="p-text">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.useCaseSection}>
        <div className="section-header-container">
          <h2 className="section-header">Use Cases</h2>
          <p className="p-text">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className={styles.useCaseSectionList}>
          {useCasesList.map((item, index) => {
            return (
              <div className={styles.useCaseItem} key={index}>
                <h3 className="h3-text">{item.name}</h3>
                <p className="p-text">{item.content}</p>
                <h4 className="h4-text">
                  Learn more
                  <img
                    src="Home/services/learnMoreIcon1.png"
                    alt="learn more icon"
                  />
                </h4>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.otherSerivceSection}>
        <div className="section-header-container">
          <h2 className="section-header">Our Other Services</h2>
          <p className="p-text">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className={styles.otherServiceList}>
          {otherServiceList.map((item, index) => {
            return (
              <div className={styles.otherServiceItem} key={index}>
                <div className={styles.itemText}>
                  <h3 className="h3-text">{item.name}</h3>
                  <h4 className="h4-text">
                    <img
                      src="Home/services/learnMoreIcon1.png"
                      alt="learn more icon"
                    />
                    Learn more
                  </h4>
                </div>
                <img
                  src={item.image}
                  alt="service image"
                  className={styles.itemImg}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.startSeoSection}>
        <div className={styles.startSeoSectionContent}>
          <h3 className="h3-text">Ready to Elevate Your Search Rankings?</h3>
          <p className="p-text">
            Our proven SEO strategies are designed to help your business achieve
            long-lasting success in search engines. Whether you want to boost
            organic traffic, improve keyword rankings, or increase conversions,
            we're here to make it happen.
          </p>
          <h4 className="h4-text">
            Let's work together to grow your online presence.
          </h4>
          <button className="button">Start My SEO Journey</button>
        </div>
        <img
          src="service/startSeoImg.png"
          alt="section image"
          className={styles.startSeoSectionImg}
        />
      </section>
    </div>
  );
};
