import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../../../public/logoNav.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSolutionPage = location.pathname === "/solutions";

  const phoneNumber = "573012632430";
  const message =
    "Hola NexDevp, me gustaría agendar una demo para conocer sus servicios.";

  useEffect(() => {
    const handleScroll = () => {
      // Cambio de color del navbar al bajar 50px
      setIsScrolled(window.scrollY > 50);

      // Lógica de Scroll Spy (Solo funciona si estamos en el Home)
      // Ahora solo rastreamos 'home' y 'contact' en la página principal
      if (isHomePage) {
        const sections = ["home", "contact"];
        sections.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Detecta si la sección está visible en pantalla
            if (rect.top >= -100 && rect.top <= 300) {
              setActiveSection(sectionId);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Función para determinar si lleva la clase "activeLink" (Línea Verde)
  const getLinkClass = (linkName) => {
    const baseClass = styles.link;
    const activeClass = `${styles.link} ${styles.activeLink}`;

    // 1. Lógica para "Soluciones"
    if (linkName === "solutions") {
      return isSolutionPage ? activeClass : baseClass;
    }

    // 2. Lógica para "Home" y "Contacto" (Solo activos si estamos en Home)
    if (isHomePage) {
      return activeSection === linkName ? activeClass : baseClass;
    }

    return baseClass;
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* 1. IZQUIERDA: Logo */}
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="NexDevp" className={styles.logo} />
          </Link>
        </div>

        {/* 2. CENTRO: Menú de Navegación */}
        <nav
          className={`${styles.navMenu} ${
            isMobileMenuOpen ? styles.mobileOpen : ""
          }`}
        >
          {/* LINK: HOME */}
          <Link
            to="/"
            className={getLinkClass("home")}
            onClick={() => {
              setIsMobileMenuOpen(false);
              // Si ya estamos en home, forzamos el scroll arriba
              if (isHomePage) window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>

          {/* LINK: SOLUCIONES */}
          <Link
            to="/solutions"
            className={getLinkClass("solutions")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Soluciones
          </Link>

          {/* LINK: CONTACTO */}
          <Link
            to="/contact"
            className={getLinkClass("contact")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contacto
          </Link>

          {/* Botón Móvil WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            Agendar Demo
          </a>
        </nav>

        {/* 3. DERECHA: Botón CTA Escritorio */}
        <div className={styles.ctaContainer}>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnCta}
            style={{ textDecoration: "none" }}
          >
            Agendar Demo
            <ArrowUpRight size={18} />
          </a>

          {/* Icono Hamburguesa */}
          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
