import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">GANESH SAI</h1>
      <ul className="nav-links">
        <li><a href="#home"><span className="hash">#</span>home</a></li>
        <li><a href="#projects"><span className="hash">#</span>projects</a></li>
        <li><a href="#skills"><span className="hash">#</span>skills</a></li>
        <li><a href="#experience"><span className="hash">#</span>experience</a></li>
        <li><a href="#contact"><span className="hash">#</span>contact</a></li>
      </ul>
    </nav>
  );
}
