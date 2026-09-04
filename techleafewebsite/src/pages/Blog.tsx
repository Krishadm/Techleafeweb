import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/BlogData";
import Footer from "../component/Footer";

export default function Blog() {
  return (
    <>
      <main className="blog-page">
        {/* BLOG HERO */}
        <section
          className="blog-hero blog-entry-animation"
          style={
            {
              "--blog-delay": "0.15s",
            } as CSSProperties
          }
        >
          <span className="blog-eyebrow">
            Insights & Articles
          </span>

          <h1>
            Ideas, Insights &{" "}
            <span>Technology</span>
          </h1>

          <p>
            Explore practical insights on blockchain,
            artificial intelligence, web development,
            application engineering and modern digital
            technologies.
          </p>
        </section>

        <section
          className="blog-list"
          aria-label="Blog articles"
        >
          {blogPosts.map((post, index) => (
            <article
              className="blog-card blog-entry-animation"
              key={post.slug}
              style={
                {
                  "--blog-delay": `${0.35 + index * 0.18}s`,
                } as CSSProperties
              }
            >
              <Link
                to={`/blog/${post.slug}`}
                className="blog-card-image"
                aria-label={`Read ${post.title}`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />

                <div
                  className="blog-image-overlay"
                  aria-hidden="true"
                />
              </Link>

              <div className="blog-card-content">
                <span className="blog-category">
                  {post.category}
                </span>

                <h2>{post.title}</h2>

                <p>{post.excerpt}</p>

                <div className="blog-card-footer">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-view-more-btn"
                  >
                    <span>View More</span>

                    <span
                      className="blog-button-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}