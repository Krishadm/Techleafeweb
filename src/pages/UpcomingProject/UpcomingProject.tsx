import "./UpcomingProject.css";

const UpcomingProject = () => {
  return (
    <main className="upcoming-page">

      {/* ================= HERO ================= */}
      <section className="upcoming-hero">

        <div className="hero-left">

          <div className="project-label">
            <span className="status-dot"></span>
            A NEW PROJECT BY TECH LEAFE
          </div>

          <h1>
            Something
            <br />
            <span>bigger</span> is coming.
          </h1>

          <p className="hero-copy">
            We've been building something quietly.
            <br />
            You won't see everything yet.
          </p>

          <a href="#clues" className="hero-button">
            DISCOVER THE CLUES
            <span>↓</span>
          </a>

        </div>


        {/* Hero visual */}
        <div className="hero-visual">

          <div className="hero-ring ring-1"></div>
          <div className="hero-ring ring-2"></div>
          <div className="hero-ring ring-3"></div>

          <div className="hero-core">
            <span>?</span>
          </div>

          <div className="hero-node hero-node-1">
            <span>01</span>
            DISCOVER
          </div>

          <div className="hero-node hero-node-2">
            <span>02</span>
            ACCESS
          </div>

          <div className="hero-node hero-node-3">
            <span>03</span>
            CONNECT
          </div>

          <div className="hero-node hero-node-4">
            <span>04</span>
            EXPERIENCE
          </div>

        </div>

      </section>


      {/* ================= CLUES ================= */}
      <section className="clues-section" id="clues">

        <div className="section-heading">

          <div className="section-label">
            THE FIRST CLUES
          </div>

          <h2>
            Can you
            <span> figure it out?</span>
          </h2>

        </div>


        <div className="clues-grid">

          <div className="clue-card">

            <div className="clue-top">
              <span>01</span>
              <strong>+</strong>
            </div>

            <h3>
              More together.
            </h3>

            <p>
              Different needs.
              <br />
              One connected experience.
            </p>

          </div>


          <div className="clue-card active">

            <div className="clue-top">
              <span>02</span>
              <strong>◈</strong>
            </div>

            <h3>
              One place.
            </h3>

            <p>
              Less switching.
              <br />
              More possibilities.
            </p>

          </div>


          <div className="clue-card">

            <div className="clue-top">
              <span>03</span>
              <strong>?</strong>
            </div>

            <h3>
              Not just one thing.
            </h3>

            <p>
              And that's all we're
              <br />
              revealing for now.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONNECTION ================= */}
      <section className="connection-section">

        <div className="connection-heading">

          <div className="section-label">
            SOMETHING IS CONNECTING
          </div>

          <h2>
            More than
            <span> one thing.</span>
          </h2>

        </div>


        <div className="connection-visual">

          <div className="connection-line line-a"></div>
          <div className="connection-line line-b"></div>
          <div className="connection-line line-c"></div>
          <div className="connection-line line-d"></div>

          <div className="connection-item item-a">
            <small>01</small>
            <strong>DISCOVER</strong>
          </div>

          <div className="connection-item item-b">
            <small>02</small>
            <strong>ACCESS</strong>
          </div>

          <div className="connection-item item-c">
            <small>03</small>
            <strong>CONNECT</strong>
          </div>

          <div className="connection-item item-d">
            <small>04</small>
            <strong>EXPERIENCE</strong>
          </div>

          <div className="connection-center">
            <span>TL</span>
          </div>

        </div>

      </section>


      {/* ================= GUESS ================= */}
      <section className="guess-section">

        <div className="section-label">
          YOUR TURN
        </div>

        <h2>
          What do you
          <span> think it is?</span>
        </h2>


        <div className="guess-grid">

          <div className="guess-card">

            <span>01</span>

            <div className="guess-icon">
              ◫
            </div>

            <h3>
              A PLATFORM
            </h3>

            <p>
              Maybe...
            </p>

          </div>


          <div className="guess-card">

            <span>02</span>

            <div className="guess-icon">
              ◇
            </div>

            <h3>
              A MARKETPLACE
            </h3>

            <p>
              Could be.
            </p>

          </div>


          <div className="guess-card mystery">

            <span>03</span>

            <div className="guess-icon">
              ?
            </div>

            <h3>
              SOMETHING ELSE
            </h3>

            <p>
              Closer.
            </p>

          </div>

        </div>


        <p className="guess-bottom">
          Interesting guess.
          <br />
          But you haven't seen the whole picture.
        </p>

      </section>


      {/* ================= PRODUCT PREVIEW ================= */}
      <section className="preview-section">

        <div className="preview-copy">

          <div className="section-label">
            STILL UNDER WRAPS
          </div>

          <h2>
            The picture isn't
            <span> complete yet.</span>
          </h2>

          <p>
            We've left a few things visible.
            The rest comes later.
          </p>

        </div>


        <div className="product-window">

          <div className="window-header">

            <span>TECH LEAFE / PROJECT</span>

            <div className="window-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>

          </div>


          <div className="window-content">

            <div className="window-sidebar">

              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>


            <div className="window-main">

              <div className="window-title"></div>

              <div className="window-subtitle"></div>

              <div className="window-cards">

                <div></div>
                <div></div>
                <div className="mystery-box">
                  ?
                </div>

              </div>

            </div>

          </div>


          <div className="window-overlay">

            <strong>
              DETAILS REDACTED
            </strong>

            <span>
              The rest comes later.
            </span>

          </div>

        </div>

      </section>


      {/* ================= FINAL ================= */}
      <section className="final-section">

        <div className="final-status">
          <span className="status-dot"></span>
          IN DEVELOPMENT
        </div>

        <div className="section-label">
          TECH LEAFE TECHNOLOGIES
        </div>

        <h2>
          One place.
          <br />
          <span>More than you expect.</span>
        </h2>

        <p>
          We're getting closer.
          <br />
          You'll see the rest soon.
        </p>

        <div className="coming-badge">
          <small>PROJECT</small>
          <strong>COMING SOON</strong>
        </div>

      </section>

    </main>
  );
};

export default UpcomingProject;