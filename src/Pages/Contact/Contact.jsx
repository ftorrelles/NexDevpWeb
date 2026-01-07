import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import logo from "../../../public/logoNav.png";
import {
  MessageCircle,
  Linkedin,
  Mail,
  ArrowLeft,
  Instagram,
  Facebook,
} from "lucide-react";

const Contact = () => {
  // Datos de contacto
  const phoneNumber = "573012632430";
  const whatsappMessage = "Hola NexDevp, estoy listo para empezar. Hablemos.";

  // TUS ENLACES REALES
  const linkedinUrl = "https://www.linkedin.com/company/nexdevp/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61584595883696";
  const instagramUrl = "https://www.instagram.com/nevdevp/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.pageContainer}>
      <div className={styles.card}>
        <img src={logo} alt="NexDevp" className={styles.logo} />

        <h1 className={styles.title}>
          Conecta con el <span className={styles.highlight}>Futuro</span>
        </h1>
        <p className={styles.text}>
          Elimina la fricción. Escala tu negocio.
          <br />
          Elige tu canal directo con nosotros.
        </p>

        <div className={styles.buttonStack}>
          {/* 1. WhatsApp (PRINCIPAL - VERDE) */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.primaryBtn}`}
          >
            <MessageCircle size={22} />
            Hablar por WhatsApp Ahora
          </a>

          {/* 2. LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.secondaryBtn}`}
          >
            <Linkedin size={22} />
            Conectar en LinkedIn
          </a>

          {/* 3. Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.secondaryBtn}`}
          >
            <Instagram size={22} />
            Síguenos en Instagram
          </a>

          {/* 4. Facebook */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.secondaryBtn}`}
          >
            <Facebook size={22} />
            Síguenos en Facebook
          </a>
        </div>

        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={16} style={{ marginRight: "6px" }} />
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
};

export default Contact;
