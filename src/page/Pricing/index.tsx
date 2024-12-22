import styles from "./pricing.module.css";
import { useState } from "react";

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

  const workingProcessList = [
    {
      name: "Are there any additional fees or charges that may apply?",
      content:
        "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
    },
    {
      name: "Can I change or cancel my plan at any time?",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Do you offer a free trial or consultation?",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "How do you bill and invoice your clients?",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Are your services guaranteed to deliver results?",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      name: "Do you offer contract-based or monthly retainer-based pricing?",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
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

      <section className={styles.questionSection}>
        <h2 className="section-header">Frequently Asked Questions</h2>

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
    </div>
  );
};
