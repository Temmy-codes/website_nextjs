export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
      <p>© {year} Mary Esso</p>
    </footer>
  );
}

