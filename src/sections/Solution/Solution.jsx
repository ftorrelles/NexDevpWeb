import styles from "./Solution.module.css";
import { Megaphone, LayoutTemplate, Bot, Workflow } from "lucide-react";

const Solution = () => {
  return (
    <section className={styles.section} id="solucion">
      <div className={styles.container}>
        {/* Cabecera: Título y Subtítulo */}
        <div className={styles.header}>
          <span className={styles.badge}>LA SOLUCIÓN</span>
          <h2 className={styles.title}>
            Todo tu ecosistema digital <br />
            <span className={styles.highlight}>en un solo lugar</span>
          </h2>
          <p className={styles.description}>
            No somos solo una agencia de ads ni una fábrica de software. Somos
            tu socio tecnológico integral que conecta{" "}
            <strong>Marketing, Desarrollo e IA</strong> para generar ventas
            reales.
          </p>
        </div>

        {/* El Grid Tecnológico (Bento Box Style) */}
        <div className={styles.grid}>
          {/* Pilar 1: Captación */}
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Megaphone size={28} />
            </div>
            <h3 className={styles.cardTitle}>Estrategia de Captación</h3>
            <p className={styles.cardText}>
              Gestionamos tus campañas en <strong>Meta Ads</strong> (Facebook &
              Instagram) con segmentación avanzada para atraer solo tráfico
              cualificado, no curiosos.
            </p>
          </div>

          {/* Pilar 2: Web */}
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <LayoutTemplate size={28} />
            </div>
            <h3 className={styles.cardTitle}>Web de Conversión</h3>
            <p className={styles.cardText}>
              Desarrollamos o auditamos landing pages veloces con{" "}
              <strong>formularios optimizados</strong> diseñados específicamente
              para acelerar el contacto inicial.
            </p>
          </div>

          {/* Pilar 3: IA SDR (Destacado) */}
          <div className={`${styles.card} ${styles.cardFeatured}`}>
            <div className={styles.iconBoxFeatured}>
              <Bot size={28} />
            </div>
            <h3 className={styles.cardTitle}>
              SDR con Inteligencia Artificial
            </h3>
            <p className={styles.cardText}>
              Un agente de IA entrenado actúa como tu mejor prospectador.
              <strong>Entrevista, cualifica y detecta urgencia</strong> las 24
              horas del día por WhatsApp.
            </p>
          </div>

          {/* Pilar 4: Integración */}
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <Workflow size={28} />
            </div>
            <h3 className={styles.cardTitle}>Integración Total</h3>
            <p className={styles.cardText}>
              Sincronización automática con tu CRM (Tokko, Salesforce, HubSpot).
              Cada lead y conversación queda registrada sin que muevas un dedo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
