import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextFadeScroll from '../components/TextFadeScroll'
import project1Image from '../assets/website 1.png'
import project2Image from '../assets/website 2.png'
import project3Image from '../assets/desainmug.png'
import project4Image from '../assets/websitesejarah.png'

export default function WorksContentSection() {
  const navigate = useNavigate()
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 'paperplay-company-profile',
      title: 'Website Pertama Saya',
      image: project1Image
    },
    {
      id: 'smkn-8-graduation-website',
      title: 'Website Game Journal & Review',
      image: project2Image
    },
    {
      id: 'kelas-kita',
      title: 'Desain Mug',
      image: project3Image
    },
    {
      id: 'sis-absensi',
      title: 'Website Sejarah',
      image: project4Image
    }
  ]

  const handleProjectClick = (projectId) => {
    navigate(`/works/${projectId}`)
  }

  return (
    <section className="works-page">
      <div className="works-header">
        <h1 className="works-title">My Work</h1>
        <p className="works-description">
          Saya masih berusaha dalam mengembangkan hasil belajar saya ke dalam projek-projek yang saya buat dan saya akan berusaha untuk membuat projek lebih banyak ke depannya.
        </p>
      </div>

      <div className="works-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="work-item"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleProjectClick(project.id)}
          >
            {/* Marquee Text with Image on Hover */}
            {hoveredProject === project.id && (
              <div className="work-marquee">
                <div className="work-marquee-content">
                  <span className="marquee-text-item">
                    {project.title}
                    <img src={project.image} alt={project.title} className="marquee-image" />
                  </span>
                  <span className="marquee-text-item">
                    {project.title}
                    <img src={project.image} alt={project.title} className="marquee-image" />
                  </span>
                  <span className="marquee-text-item">
                    {project.title}
                    <img src={project.image} alt={project.title} className="marquee-image" />
                  </span>
                  <span className="marquee-text-item">
                    {project.title}
                    <img src={project.image} alt={project.title} className="marquee-image" />
                  </span>
                </div>
              </div>
            )}

            {/* Project Title */}
            <TextFadeScroll
              text={<h2 className="work-title">{project.title}</h2>}
              direction="Bottom → Top"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
