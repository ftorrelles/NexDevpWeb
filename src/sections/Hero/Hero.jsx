import styles from "./Hero.module.css";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const phoneNumber = "573012632430";
  const message =
    "Hola NexDevp, quiero llevar mi negocio al siguiente nivel. Me interesa cotizar mi proyecto.";
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            ¿Cuánto dinero dejas sobre la mesa por <br />
            <span className={styles.highlight}>no responder rápido?</span>
          </h1>

          <p className={styles.description}>
            Implementamos <strong>Ingeniería de Ventas con IA</strong>. Nuestro
            sistema contacta, cualifica y agenda tus leads en menos de{" "}
            <strong>60 segundos</strong>, eliminando el trabajo manual.
          </p>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
            style={{
              textDecoration: "none",
            }}
          >
            Cotizar mi Proyecto
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
