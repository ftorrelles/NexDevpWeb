import styles from "./SolutionHero.module.css";

const SolutionsHero = () => {
  return (
    <section className={styles.hero}>
      {/* Capa de superposición para oscurecer la imagen */}
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.badge}>NUESTRA EXPERIENCIA</span>
        <h1 className={styles.title}>
          Soluciones que <span className={styles.highlight}>Escalan</span>
        </h1>
        <p className={styles.description}>
          No entregamos solo código o campañas. Entregamos ecosistemas digitales
          diseñados para facturar, automatizar y liderar el mercado.
        </p>
      </div>
    </section>
  );
};

export default SolutionsHero;
