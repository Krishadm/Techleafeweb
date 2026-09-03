import { Link } from "react-router-dom";
import { blogPosts } from "../data/BlogData";
import Footer from "../component/Footer";


export default function Blog() {
  return (
    <>
    <main className="blog-page">
      <section className="blog-hero">
        <span className="blog-eyebrow">Insights & Articles</span>

        <h1>Blog / Article</h1>

        <p>
          Explore insights on blockchain, artificial intelligence,
          web development and modern application engineering.
        </p>
      </section>

      <section className="blog-list">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <div className="blog-card-image">
              <img src={post.image} alt="" />
            </div>

            <div className="blog-card-content">
              <span className="blog-category">{post.category}</span>

              <h2>{post.title}</h2>

              <p>{post.excerpt}</p>

              <Link
                to={`/blog/${post.slug}`}
                className="blog-view-more"
              >
                View more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
    <Footer/>
    </>
  );
}