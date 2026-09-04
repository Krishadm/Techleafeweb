import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/BlogData";
import Footer from "../component/Footer";

export default function BlogDetail() {
  const { slug } = useParams();

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    return (
      <>
        <main className="blog-not-found">
          <span className="blog-not-found-code">
            404
          </span>

          <h1>Article not found</h1>

          <p>
            The article you are looking for is not available.
          </p>

          <Link
            to="/blog"
            className="blog-not-found-link"
          >
            Browse all insights
            <span aria-hidden="true">↗</span>
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="official-blog-detail">
        <article className="official-blog-container">

          {/* TOP NAVIGATION */}
          <nav
            className="official-blog-nav"
            aria-label="Blog navigation"
          >
            <Link
              to="/blog"
              className="official-back-button"
            >
              <span aria-hidden="true">←</span>
              All Insights
            </Link>

            <span className="official-nav-category">
              {post.category}
            </span>
          </nav>


          {/* HERO */}
          <header className="official-blog-hero">

            <div className="official-blog-hero-copy">

              <div className="official-blog-meta">
                <span>{post.category}</span>
                <span aria-hidden="true">•</span>
                <span>Insight</span>
              </div>

              <span className="official-blog-kicker">
                Tech Leafe Insights
              </span>

              <h1>
                {post.title}
              </h1>

            </div>


            {/* FEATURE IMAGE */}
            <div className="official-blog-image">

              <img
                src={post.image}
                alt={post.title}
                loading="eager"
              />

            </div>

          </header>


          {/* ARTICLE BODY */}
          <div className="official-article-content">

            {post.sections.map(
              (section, index) => (
                <section
                  className="official-article-section"
                  key={`${post.slug}-${index}`}
                >

                  {/* SECTION NUMBER */}
                  <div className="official-section-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>


                  {/* SECTION CONTENT */}
                  <div className="official-section-content">

                    {section.heading && (
                      <header className="official-section-header">

                        <span className="official-section-label">
                          Insight
                        </span>

                        <h2>
                          {section.heading}
                        </h2>

                      </header>
                    )}


                    {section.paragraphs?.map(
                      (
                        paragraph,
                        paragraphIndex
                      ) => (
                        <p key={paragraphIndex}>
                          {paragraph}
                        </p>
                      )
                    )}


                    {section.bullets && (
                      <ul>
                        {section.bullets.map(
                          (
                            item,
                            itemIndex
                          ) => (
                            <li key={itemIndex}>
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    )}


                    {section.numbered && (
                      <ol>
                        {section.numbered.map(
                          (
                            item,
                            itemIndex
                          ) => (
                            <li key={itemIndex}>
                              {item}
                            </li>
                          )
                        )}
                      </ol>
                    )}

                  </div>

                </section>
              )
            )}


            {/* CONCLUSION */}
            {post.conclusion && (
              <section className="official-conclusion">

                <span className="official-conclusion-label">
                  Final Perspective
                </span>

                <h2>
                  Conclusion
                </h2>

                <p>
                  {post.conclusion}
                </p>

              </section>
            )}

          </div>

        </article>
      </main>

      <Footer />
    </>
  );
}