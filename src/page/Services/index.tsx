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
            {seoProcessList.map((item,index) =>{
                return(
                    <div className={styles.processItem}>

                    </div>
                )
            })}
        </div>
      </section>
    </div>
  );
};
