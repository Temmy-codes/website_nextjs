import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero / Intro */}
        <section className="section">
          <h1 className="title">MARY ESSO</h1>
          <img
            src="https://media.journoportfolio.com/users/427887/images/profiles/3d58cf0b-37c9-440b-8528-c7f5b00100b6.jpg"
            alt="Profile"
            className="profileImage"
          />
          <p className="text">
            Medical Biochemist | Frontend Developer | Yoga Instructor | Content Creator
          </p>
        </section>

        {/* About */}
        <section id="about" className="section">
          <h2 className="heading">About Me</h2>
          <div className="text">
            <p>
              My name is Mary Esso, I am a passionate professional with a unique blend of
              expertise in health, wellness, technology, and content creation.
            </p>
            <p>
              With a strong foundation in Medical Biochemistry and over two years of
              experience as a Laboratory Scientist, I bring analytical and scientific
              rigor to all my work. My role involves collecting blood samples, analyzing
              blood, tissue, and other samples with precision, using sophisticated
              equipment to detect abnormalities and ensure accurate results.
            </p>
            <p>
              As a Yoga Instructor, I guide individuals on their journey to physical and
              mental well-being. My practice focuses on creating a balanced environment
              where students can explore the connection between body and mind through
              breath and movement. I specialize in customizing sessions to meet the
              unique needs of each student, whether they seek relaxation, flexibility, or
              strength.
            </p>
            <p>
              My goal is to cultivate a space of mindfulness and inner peace, helping
              others embrace the transformative power of yoga in their daily lives.
            </p>
            <p>
              Additionally, as a Front-end Developer, I create dynamic, user-friendly
              websites, bridging the gap between health, wellness, and technology.
            </p>
            <p>
              Beyond that, I am also a skilled video editor and content creator,
              producing engaging reels, shorts, and videos in both short-form and
              long-form formats.
            </p>
            <p>So yeah, that’s a brief summary about me 😊</p>
          </div>
        </section>

         <section className="connect">
  <h2>Connect with Me</h2>
  <div className="social-links">
    <a href="https://tiktok.com/@temmy.___" target="_blank" rel="noopener noreferrer">
      <div className="social-item">
        <img 
          src="https://media.journoportfolio.com/users/427887/images/04f10bf2-ebfd-46f4-a945-8c8c272fa8d5_max-600.jpeg" 
          alt="TikTok" 
        />
        <p>TikTok</p>
      </div>
    </a>

    <a href="https://instagram.com/temmy.___" target="_blank" rel="noopener noreferrer">
      <div className="social-item">
        <img 
          src="https://media.journoportfolio.com/users/427887/images/97be6e1c-a656-4b3e-9ef2-d7c97692beb7_max-600.jpg" 
          alt="Instagram" 
        />
        <p>Instagram</p>
      </div>
    </a>

    <a href="https://linkedin.com/in/maryesso" target="_blank" rel="noopener noreferrer">
      <div className="social-item">
        <img 
          src="https://media.journoportfolio.com/users/427887/images/69e26a20-1aea-4b32-9828-e03ce1995789_max-600.jpeg" 
          alt="LinkedIn" 
        />
        <p>LinkedIn</p>
      </div>
    </a>

    <a href="https://youtube.com/@maryesso" target="_blank" rel="noopener noreferrer">
      <div className="social-item">
        <img 
          src="https://media.journoportfolio.com/users/427887/images/d8457a21-9e2f-43e9-8ea6-b33a205df853_max-600.jpeg" 
          alt="YouTube" 
        />
        <p>YouTube</p>
      </div>
    </a>

    <a href="https://github.com/Temmy-codes" target="_blank" rel="noopener noreferrer">
      <div className="social-item">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small_2x/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg" 
          alt="Github" 
        />
        <p>Github</p>
      </div>
    </a>
  </div>
</section>


        {/* Projects */}
        <section id="projects" className="section">
          <h2 className="heading">Projects</h2>
          <ProjectCard
            title="Portfolio Website"
            description="A portfolio website built with Next JS."
          />

          <ProjectCard
           title="Portfolio Website"
           description= "A portfolio website built with HTML, CSS and Javascript."
           link= "https://github.com/Temmy-codes/Portfolio-Website"
           />

          <ProjectCard
            title="Yoga Class Registration"
            description="A simple form site for student registration."
            link="https://temmyyogaclass.netlify.app/"

          />
          <ProjectCard
            title="User-profile Directory"
            description="A React based application that fetches and displays user profiles dynamically.
            It includes live search, city-based filtering, and a clean card-based UI."
            link="https://user-profile-directory.netlify.app/"
          />

          <p style={{ marginTop: "1rem" }}>
            View More on{" "}
            <a
              href="https://github.com/Temmy-codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h2 className="heading">Contact</h2>
          <p className="text">
            Reach me at{" "}
            <a href="mailto:essomary49@email.com">essomary49@email.com</a>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
