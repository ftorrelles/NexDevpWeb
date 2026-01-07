import styles from "./Problem.module.css";
import { FilterX, MessageSquareWarning, ClockAlert } from "lucide-react";

const Problem = () => {
  return (
    <section className={styles.section} id="problema">
      <div className={styles.container}>
        {/* Encabezado de la Sección */}
        <div className={styles.header}>
          <span className={styles.badge}>EL PROBLEMA</span>
          <h2 className={styles.title}>
            El Costo de la{" "}
            <span className={styles.highlight}>Ineficiencia</span>
          </h2>
          <p className={styles.subtitle}>
            Tu equipo comercial pierde horas valiosas en tareas que no generan
            cierre. Identifica dónde se está fugando tu dinero.
          </p>
        </div>

        {/* Grid de Tarjetas de Dolor */}
        <div className={styles.grid}>
          {/* Tarjeta 1: Filtrado de Curiosos */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FilterX size={32} />
            </div>
            <h3 className={styles.cardTitle}>Filtrado de Curiosos</h3>
            <p className={styles.cardText}>
              Tu equipo pierde tiempo filtrando personas que "solo estaban
              mirando" en lugar de enfocarse en cerrar ventas reales.
            </p>
          </div>

          {/* Tarjeta 2: Tareas Repetitivas*/}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <MessageSquareWarning size={32} />
            </div>
            <h3 className={styles.cardTitle}>Tareas Repetitivas</h3>
            <p className={styles.cardText}>
              Los agentes gastan su día respondiendo las mismas preguntas
              básicas sobre precio, ubicación y fotos una y otra vez.
            </p>
          </div>

          {/* Tarjeta 3: Abandono de Leads*/}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <ClockAlert size={32} />
            </div>
            <h3 className={styles.cardTitle}>Abandono de Leads</h3>
            <p className={styles.cardText}>
              Los leads que llegan por la noche o fines de semana quedan
              desatendidos, regalándole la venta a tu competencia más rápida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
