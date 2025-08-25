export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
      <p>© {year} Mary Esso</p>
      <nav>
        <a href="https://github.com/Temmy-codes" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://linkedin.com/in/maryesso" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://instagram.com/temmy.___" target="_blank" rel="noopener noreferrer">Instagram</a> |
        <a href="https://tiktok.com/@temmy.___" target="_blank" rel="noopener noreferrer">TikTok</a> |
        <a href="https://youtube.com/@maryesso_" target="_blank" rel="noopener noreferrer">YouTube</a>
      </nav>
    </footer>
  );
}

