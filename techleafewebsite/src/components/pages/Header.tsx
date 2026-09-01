export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Tech Leafe home">
        Tech Leafe
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#expertise">Expertise</a>
        <a href="#impact">Impact</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
