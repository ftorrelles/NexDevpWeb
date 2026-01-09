import styles from "./WebDev.module.css";
import { Monitor, ShoppingBag, Code2, ArrowRight } from "lucide-react";

// --- IMÁGENES ---
const bgWeb = "/bgweb.webp";
// "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop";
const bgEcommerce = "/bgecommerce.webp";
// "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920&auto=format&fit=crop";
const bgSoftware = "/bgsoftware.webp";
// "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop";

// 1. NÚMERO DE WHATSAPP
const phoneNumber = "573012632430";

const servicesData = [
  {
    id: 1,
    title: "Web & Landings",
    description:
      "Sitios corporativos y páginas de aterrizaje diseñadas para la velocidad. Estructura SEO optimizada y carga instantánea que convierte visitantes en leads.",
    technologies: ["React", "Javascript", "Wordpress"],
    icon: <Monitor size={40} />,
    ctaText: "Cotizar Web",
    backgroundImage: bgWeb,
    message:
      "Hola NexDevp, estoy interesado en cotizar un sitio Web / Landing Page.",
  },
  {
    id: 2,
    title: "E-Commerce",
    description:
      "Tiendas online robustas que facturan 24/7. Implementamos pasarelas de pago seguras, gestión de inventarios y experiencias de compra fluidas sin fricción.",
    technologies: ["Shopify", "WooCommerce", "React", "Node.js", "Python"],
    icon: <ShoppingBag size={40} />,
    ctaText: "Cotizar E-Commerce",
    backgroundImage: bgEcommerce,
    message:
      "Hola NexDevp, quiero llevar mi tienda al siguiente nivel. Me interesa cotizar un E-Commerce.",
  },
  {
    id: 3,
    title: "Software de Control",
    description:
      "Sistemas a medida para necesidades complejas: paneles administrativos (dashboards), CRMs internos, y plataformas SaaS escalables. Tu lógica de negocio hecha código.",
    technologies: ["React", "Javascript", "Node.js", "Python", "MySQL"],
    icon: <Code2 size={40} />,
    ctaText: "Cotizar Sistema",
    backgroundImage: bgSoftware,
    message:
      "Hola NexDevp, requiero una solución a medida. Me interesa cotizar un Software de Control.",
  },
];

const WebDev = () => {
  return (
    <section className={styles.section} id="desarrollo">
      <div className={styles.introHeader}>
        <div className={styles.container}>
          <span className={styles.badge}>INGENIERÍA DE SOFTWARE</span>
          <h2 className={styles.introTitle}>
            Desarrollo puro para <br />
            <span className={styles.highlight}>proyectos exigentes</span>
          </h2>
          <p className={styles.introDescription}>
            Cuando las herramientas "no-code" se quedan cortas, entramos
            nosotros. Arquitectura sólida y código limpio para escalar tu
            visión.
          </p>
        </div>
      </div>

      <div className={styles.parallaxContainer}>
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={styles.parallaxBlock}
            style={{ backgroundImage: `url(${service.backgroundImage})` }}
          >
            <div className={styles.overlay}>
              <div className={styles.blockContent}>
                <div className={styles.iconWrapper}>{service.icon}</div>

                <h3 className={styles.blockTitle}>{service.title}</h3>

                <p className={styles.blockDescription}>{service.description}</p>

                <div className={styles.techStack}>
                  {service.technologies.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    service.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                  style={{ textDecoration: "none" }}
                >
                  {service.ctaText} <ArrowRight size={18} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDev;
