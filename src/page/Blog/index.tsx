import styles from "./blog.module.css";

export const Blog = () => {
  const moreInsightsList = [
    {
      name: "10 SEO Myths You Need to Stop Believing",
      content:
        "Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.",
    },
    {
      name: "Maximizing ROI with Social Media Advertising",
      content:
        "Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns that engage audiences and deliver measurable returns.",
    },
    {
      name: "How Content Marketing Fuels Long-Term Growth",
      content:
        "Content isn't just king-it's the foundation of sustainable business growth. Find out how blogs, videos, and more can build trust and drive conversions.",
    },
    {
      name: "The Art of A/B Testing: Perfecting Your Campaigns",
      content:
        "From headlines to call-to- actions, small tweaks can make a big difference. Learn how to use A/B testing to refine your marketing strategies.",
    },
    {
      name: "Understanding Google's Latest Algorithm Update",
      content:
        "Search rankings change constantly-stay ahead by learning about the latest Google update and its impact on your SEO strategy.",
    },
    {
      name: "5 Ways Al is Changing Digital Marketing",
      content:
        "Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage Al to stay competitive.",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <section className={styles.blogIntroSection}>
        <img
          src="Home/intro/homeIntroImage.png"
          alt="intro image"
          className={styles.introImg}
        />
        <div className={styles.introContent}>
          <img
            src="blog/introSticker.png"
            alt="intro sticker"
            className={styles.introSticker}
          />
          <h1 className="h1-text">
            PPC vs. Organic Marketing: Which One Is Right for Your Business?
          </h1>
          <p className="p-text">
            PPC and organic marketing each offer unique benefits for driving
            traffic and growing your business. Discover which strategy aligns
            best with your goals and how to strike the perfect balance.
          </p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className={styles.blogSectionAuthor}>
          <div className={styles.authorHeaderContainer}>
            <div className={styles.author}>
              <img
                src="blog/authorImg.png"
                alt="author image"
                className={styles.authorImg}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p className="p-text" style={{ fontWeight: "bold" }}>
                  Sarah Kim
                </p>
                <p className="p-text">Content Creator</p>
              </div>
            </div>
            <img
              src="blog/authorSticker.png"
              alt="author sticker"
              className={styles.authorSticker}
            />
          </div>

          <article className={styles.blogContent}>
            <h4 className="h4-text" style={{ margin: "5rem 0" }}>
              In the ever-evolving digital landscape, businesses are faced with
              an important question: should they invest in pay-per-click (PPC)
              advertising or focus on organic marketing strategies? While both
              approaches have their merits, choosing the right one depends on
              your goals, budget, and timeline. Let's dive into the strengths,
              challenges, and real-world applications of PPC and organic
              marketing to help you make an informed decision.
            </h4>

            <h2 className="h2-text">The Challenge of Standing Out Online</h2>
            <p className="p-text" style={{ margin: "2rem 0 5rem 0" }}>
              Every day, millions of businesses compete for visibility online,
              making it increasingly difficult to capture the attention of
              potential customers. Organic search results are highly sought
              after, but earning a top spot on Google takes time and consistent
              effort. Meanwhile, PPC ads promise instant visibility but can
              quickly drain your budget if not executed effectively. For small
              businesses with limited resources, this dilemma can feel like an
              impossible balancing act. Do you play the long game with organic
              strategies or opt for quick wins with PPC?
            </p>

            <h2 className="h2-text">Comparing PPC and Organic Marketing</h2>
            <p className="p-text" style={{ margin: "2rem 0 1.5rem 0" }}>
              Pay-per-click (PPC) and organic marketing each offer distinct
              advantages and challenges, making them effective for different
              business needs. PPC is designed to deliver immediate results by
              securing top placements on search engines or social media
              platforms, providing businesses with instant visibility. It allows
              for precise targeting based on factors like demographics,
              behavior, and location, offering flexibility to start small and
              scale as needed. However, PPC can become expensive quickly,
              particularly in competitive industries, and its results are
              short-lived since traffic stops when the campaign ends.
            </p>
            <p className="p-text" style={{ marginBottom: "5rem" }}>
              In contrast, organic marketing focuses on building a strong,
              sustainable presence through strategies like search engine
              optimization (SEO) and content creation. This approach builds
              trust and credibility over time, delivering consistent traffic
              without the need for ongoing ad spend. While the results can take
              longer to materialize and are less immediate than PPC, organic
              marketing provides long-term benefits that make it a valuable
              strategy for sustained growth.
            </p>

            <h2 className="h2-text">Striking the Right Balance</h2>
            <h3
              className="h3-text"
              style={{
                borderLeft: "5px solid var(--green)",
                paddingLeft: "3rem",
                margin: "3rem 0",
              }}
            >
              "PPC and organic marketing aren't rivals-they're teammates. The
              best strategies combine both to create a holistic approach to
              growth," says a digital marketing expert.
            </h3>
            <p className="p-text">
              For instance, a business might use PPC to generate quick traffic
              for a new product launch while building long-term organic
              authority through SEO and blogging. Combining these strategies
              ensures you're reaching your audience now while laying the
              groundwork for future success.
            </p>
            <p className="p-text" style={{ margin: "1.5rem 0 5rem 0" }}>
              For small businesses with limited resources, this dilemma can feel
              like an impossible balancing act. Do you play the long game with
              organic strategies or opt for quick wins with PPC?
            </p>

            <h2 className="h2-text">
              By the Numbers: Facts About PPC and Organic Marketing
            </h2>

            <div className={styles.blogGridContainer}>
              <div className={`${styles.gridItem} ${styles.item1}`}>
                <p className="p-text">Businesses earn an average of</p>
                <h3 className="h3-text">$2 for every $1 spent</h3>
                <p className="p-text">on PPC advertising.</p>
              </div>
              <div className={`${styles.gridItem} ${styles.item2}`}>
                <h3 className="h3-text">41% of clicks</h3>
                <p className="p-text">
                  on search engines go to the top three organic results, showing
                  the importance of ranking highly.
                </p>
              </div>
              <div className={`${styles.gridItem} ${styles.item3}`}>
                <p className="p-text">
                  Content marketing costs
                  <h3 className="h3-text" style={{ display: "inline" }}>
                    {" "}
                    62% less than paid ads
                  </h3>
                </p>
                <p className="p-text">
                  but generates
                  <h3 className="h3-text" style={{ display: "inline" }}>
                    {" "}
                    3x as many leads
                  </h3>
                </p>
              </div>
              <div className={`${styles.gridItem} ${styles.item4}`}>
                <p className="p-text">Organic search drives</p>
                <h3 className="h3-text">
                  <span style={{ color: "var(--green)" }}>53%</span> of all
                  website traffic,
                </h3>
                <p className="p-text">
                  making it the largest single source of traffic.
                </p>
              </div>
            </div>
            <h2 className="h2-text" style={{ margin: "5rem 0 2rem 0" }}>
              Real-World Examples
            </h2>
            <p className="p-text">
              PPC and organic marketing have proven effective in different
              scenarios, and real-world examples highlight their impact. A local
              restaurant, for instance, leveraged Google Ads to target the
              search term "best Italian food near me," which led to a remarkable
              120% increase in reservations within just two weeks. Similarly, a
              B2B SaaS company focused on organic marketing by investing in SEO
              and blog content. This strategic approach helped them rank for
              competitive keywords and boosted their website traffic by 200%
              over six months. Some businesses find success by combining both
              strategies, like an e-commerce retailer that launched a targeted
              PPC campaign for seasonal sales while simultaneously optimizing
              product pages for organic search. This hybrid approach resulted in
              a 30% higher return on investment compared to relying solely on
              PPC advertising.
            </p>

            <h2 className="h2-text" style={{ margin: "5rem 0 2rem 0" }}>
              Key Takeaways for Your Marketing Strategy
            </h2>
            <ul>
              <li>
                <p className="p-text">
                  PPC is ideal for short-term goals, like promoting sales,
                  events, or new products.
                </p>
              </li>
              <li>
                <p className="p-text">
                  {" "}
                  Organic marketing is better for long-term growth, building
                  trust, and creating lasting customer relationships.
                </p>
              </li>
              <li>
                <p className="p-text">
                  A hybrid approach offers the best of both worlds, balancing
                  quick wins with sustainable development.
                </p>
              </li>
            </ul>
            <h2 className="h2-text" style={{ margin: " 5rem 0 2rem 0" }}>
              Choosing the Best Strategy for Your Business
            </h2>
            <p className="p-text">
              Ultimately, the choice between PPC and organic marketing depends
              on your specific needs. If you're working with a tight deadline or
              launching a new service, PPC can deliver immediate results. On the
              other hand, if you're focused on building a loyal audience and
              maintaining a steady flow of leads, organic marketing is your best
              bet.
            </p>
            <p className="p-text" style={{ margin: "1.5rem 0 3rem 0" }}>
              By understanding the strengths and limitations of both strategies,
              you can create a marketing plan that aligns with your goals,
              budget, and target audience. Ready to take your next step? Start
              building a strategy that drives results today.
            </p>

            <div className={styles.blogIconContainer}>
              <img
                src="blog/blogIcon.png"
                alt="blog icon"
                className={styles.blogIcon}
              />
            </div>
          </article>
        </div>
      </section>

      <section className={styles.exploreSection}>
        <div className="section-header-container">
          <h2 className="section-header">Explore More Insights</h2>
          <p className="p-text">
            Discover expert tips, strategies, and stories to keep you ahead in
            the digital landscape.
          </p>
        </div>
        <div className={styles.moreInsightsList}>
          {moreInsightsList.map((item, index) => {
            return (
              <div className={styles.insightItem} key={index}>
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
    </div>
  );
};
