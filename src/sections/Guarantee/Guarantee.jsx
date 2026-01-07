import styles from "./Guarantee.module.css";
import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className={styles.section} id="garantia">
      <div className={styles.container}>
        {/* --- PARTE 1: LA GARANTÍA DE RIESGO CERO (Del PDF) --- */}
        <div className={styles.guaranteeBox}>
          <div className={styles.iconWrapper}>
            <ShieldCheck size={40} strokeWidth={2} />
          </div>
          <div className={styles.guaranteeContent}>
            <h3 className={styles.guaranteeTitle}>
              Garantía de Funcionamiento 30 Días
            </h3>
            <p className={styles.guaranteeText}>
              La tecnología debe ser una solución, no un problema. Si en el
              primer mes el sistema no opera al{" "}
              <strong>100% de su capacidad</strong>, realizamos todos los
              ajustes necesarios sin costo adicional hasta que funcione
              perfectamente para tu operación.
            </p>
          </div>
        </div>

        {/* --- PARTE 2: LAS ESTADÍSTICAS (Tus textos exactos) --- */}
        <div className={styles.statsGrid}>
          {/* Stat 1 */}
          <div className={styles.statItem}>
            <div className={styles.number}>03+</div>
            <div className={styles.separator}></div>
            <h4 className={styles.statLabel}>AÑOS DE COMPROMISO</h4>
            <p className={styles.statDesc}>
              Construyendo proyectos con dedicación y resultados reales.
            </p>
          </div>

          {/* Stat 2 */}
          <div className={styles.statItem}>
            <div className={styles.number}>100+</div>
            <div className={styles.separator}></div>
            <h4 className={styles.statLabel}>PROYECTOS ENTREGADOS</h4>
            <p className={styles.statDesc}>
              Soluciones hechas a medida para cada cliente.
            </p>
          </div>

          {/* Stat 3 */}
          <div className={styles.statItem}>
            <div className={styles.number}>100%</div>
            <div className={styles.separator}></div>
            <h4 className={styles.statLabel}>DEDICACIÓN</h4>
            <p className={styles.statDesc}>
              Nos eligen por cercanía, calidad y compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
