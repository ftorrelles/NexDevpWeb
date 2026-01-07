import styles from "./Workflow.module.css";
import { MousePointerClick, Bot, CalendarCheck } from "lucide-react";

const Workflow = () => {
  return (
    <section className={styles.section} id="como-funciona">
      <div className={styles.container}>
        {/* Cabecera */}
        <div className={styles.header}>
          <span className={styles.badge}>CÓMO FUNCIONA</span>
          <h2 className={styles.title}>
            De desconocido a cliente <br />
            <span className={styles.highlight}>en 3 pasos simples</span>
          </h2>
        </div>

        {/* Línea de Tiempo (Timeline) */}
        <div className={styles.timeline}>
          {/* PASO 1 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.iconCircle}>
              <MousePointerClick size={32} />
            </div>
            <h3 className={styles.stepTitle}>Entrada de Leads</h3>
            <p className={styles.stepText}>
              El prospecto se registra desde tus campañas de Facebook Ads,
              Instagram o tu sitio web.
            </p>
          </div>

          {/* CONECTOR (Flecha) */}
          <div className={styles.connector}></div>

          {/* PASO 2 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.iconCircle}>
              <Bot size={32} />
            </div>
            <h3 className={styles.stepTitle}>Cualificación IA</h3>
            <p className={styles.stepText}>
              Nuestra IA contacta al lead por WhatsApp{" "}
              <strong>al instante</strong>, lo entrevista y detecta si es un
              comprador real.
            </p>
          </div>

          {/* CONECTOR (Flecha) */}
          <div className={styles.connector}></div>

          {/* PASO 3 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.iconCircle}>
              <CalendarCheck size={32} />
            </div>
            <h3 className={styles.stepTitle}>Cierre Humano</h3>
            <p className={styles.stepText}>
              Tu agente recibe una notificación con la{" "}
              <strong>cita ya agendada</strong> en su calendario. Solo debe
              asistir y cerrar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
