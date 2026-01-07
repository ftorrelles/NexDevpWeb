import styles from "./Projects.module.css";
import { ArrowUpRight } from "lucide-react";

// DATA: Agregamos la propiedad 'size' para controlar el tamaño en el grid
const projects = [
  {
    id: 1,
    title: "Inmobiliaria Elite",
    category: "Automatización IA",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    size: "large", // Ocupa 2x2 (El protagonista)
  },
  {
    id: 2,
    title: "FinTech Dashboard",
    category: "SaaS / Web App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    size: "normal", // 1x1
  },
  {
    id: 3,
    title: "Shopify Moda",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    size: "normal", // 1x1
  },
  {
    id: 4,
    title: "App Médica",
    category: "Software a Medida",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    size: "wide", // Ocupa 2 columnas a lo ancho
  },
  {
    id: 5,
    title: "Lead Magnet System",
    category: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    size: "normal", // 1x1
  },
];

const Projects = () => {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Nuestros <span className={styles.highlight}>Casos de Éxito</span>
          </h2>
          <p className={styles.subtitle}>
            Innovación aplicada a resultados reales.
          </p>
        </div>

        {/* El Grid Mágico */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${styles[project.size]}`} // Aplica clase según tamaño
            >
              <img
                src={project.image}
                alt={project.title}
                className={styles.img}
              />

              {/* Overlay con información */}
              <div className={styles.overlay}>
                <div className={styles.info}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <button className={styles.iconBtn}>
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
