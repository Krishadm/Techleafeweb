import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export default function BlogDetail() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="blog-not-found">
        <h1>Article not found</h1>

        <Link to="/blog">
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="blog-detail-page">
      <article className="blog-detail-container">
        <Link to="/blog" className="blog-back">
          ← Back to Blog
        </Link>

        <header className="blog-detail-header">
          <span className="blog-detail-category">
            {post.category}
          </span>

          <h1>{post.title}</h1>
        </header>

        <div className="blog-detail-image">
          <img src={post.image} alt="" />
        </div>

        <div className="blog-article-content">
          {post.sections.map((section, index) => (
            <section
              className="blog-article-section"
              key={`${post.slug}-${index}`}
            >
              {section.heading && (
                <h2>{section.heading}</h2>
              )}

              {section.paragraphs?.map(
                (paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph}
                  </p>
                )
              )}

              {section.bullets && (
                <ul>
                  {section.bullets.map(
                    (item, itemIndex) => (
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
                    (item, itemIndex) => (
                      <li key={itemIndex}>
                        {item}
                      </li>
                    )
                  )}
                </ol>
              )}
            </section>
          ))}

          {post.conclusion && (
            <section className="blog-article-section">
              <h2>Conclusion</h2>

              <p>{post.conclusion}</p>
            </section>
          )}

          {post.companyText && (
            <p className="blog-company-text">
              {post.companyText}
            </p>
          )}

          {post.cta && (
            <div className="blog-bottom-cta">
              <p>{post.cta}</p>

              <Link to="/contact">
                Let's Talk
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}