import TextFadeScroll from '../components/TextFadeScroll'
import project1Image from '../assets/website 1.png'
import project2Image from '../assets/website 2.png'
import project3Image from '../assets/desainmug.png'
import project4Image from '../assets/websitesejarah.png'

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <TextFadeScroll
          text={
            <h2 className="projects-title">
              Jelajahi projek saya yang terbaru dan yang lainnya..
            </h2>
          }
          direction="Bottom → Top"
        />
      </div>

      <div className="projects-grid">
        {/* Project 1 - Large */}
        <div className="project-card project-large">
          <span className="project-category">WEBSITE PERTAMA</span>
          <div className="project-image-wrapper">
            <img 
              src={project1Image}
              alt="Project 1"
              className="project-image"
            />
          </div>
        </div>

        {/* Project 2 - Large */}
        <div className="project-card project-large">
          <span className="project-category">WEBSITE GAME JOURNAL & REVIEW</span>
          <div className="project-image-wrapper">
            <img 
              src={project2Image}
              alt="Project 2"
              className="project-image"
            />
          </div>
        </div>

        {/* Project 3 - Small */}
        <div className="project-card project-small">
          <span className="project-category">DESAIN MUG</span>
          <div className="project-image-wrapper">
            <img 
              src={project3Image}
              alt="Project 3"
              className="project-image"
            />
          </div>
        </div>

        {/* Project 4 - Small */}
        <div className="project-card project-small">
          <span className="project-category">WEBSITE SEJARAH</span>
          <div className="project-image-wrapper">
            <img 
              src={project4Image}
              alt="Project 4"
              className="project-image"
            />
          </div>
        </div>
      </div>

      {/* View All Projects Button */}
      <div className="projects-actions">
        <a href="/works" className="projects-btn">all projects</a>
        <a href="/works" className="projects-arrow-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
