export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#7B3F00", borderBottom: "1px solid",}}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
