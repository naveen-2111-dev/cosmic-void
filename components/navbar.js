export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">My Logo</div>
        <ul className="navbar__links">
          <li className="navbar__link">Home</li>
          <li className="navbar__link">About</li>
          <li className="navbar__link">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
