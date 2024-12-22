import styles from "./pricing.module.css";

export const Pricing = () => {
  const pricingPlanList = [
    {
      name: "Basic Plan",
      price: "$500",
      content: [
        "Website optimization",
        "Social media setup and",
        "management (1 platform)",
        "Monthly progress report",
        "Email support",
        "Basic competitor analysis",
        "Initial SEO audit",
      ],
    },
    {
      name: "Pro Plan",
      price: "$1000",
      content: [
        "Includes all from the Basic Plan",
        "Social media setup and management (up to 3 platforms)",
        "PPC ad campaign management",
        "Email and phone support",
        "On-page SEO improvements",
        "Monthly content recommendations",
      ],
    },
    {
      name: "Elite Plan",
      price: "$2000",
      content: [
        "Includes all from the Pro Plan",
        "Website design and development",
        "Comprehensive SEO strategy",
        "Social media setup and management (up to 5 platforms)",
        "Content marketing strategy and implementation",
        "In-depth analytics and reporting",
      ],
    },
  ];

  return (
    <div className={styles.pricingPageContainer}>
      <section className={styles.pricingIntroSection}>
        <h1 className="h1-text">Pricing</h1>
        <p className="p-text">
          Elevate Your Online Presence: Competitive Pricing for Exceptional
          Results
        </p>

        <div className={styles.inTroPriceList}>
          {pricingPlanList.map((item, index) => {
            return (
              <div className={styles.pricingItem} key={index}>
                <h3 className="h3-text">
                  {item.name}
                  {index === 1 && (
                    <img src="pricing/popularIcon.png" alt="popular icon" />
                  )}
                </h3>
                <p className="p-text">
                  <h2 className="h2-text">{item.price}</h2> /month
                </p>
                <div className={styles.pricingItemButtons}>
                  <button className="button">Get Started</button>
                  <button className="button">Request a quote</button>
                </div>
                <div className={styles.itemFeatureList}>
                  {item.content.map((feature, subIndex) => {
                    return (
                      <div className={styles.featureItem} key={subIndex}>
                        <img
                          src={`pricing/tickIcon${index === 1 ? "Black" : "White"}.png`}
                          alt=""
                        />
                        <p className="p-text">{feature}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
