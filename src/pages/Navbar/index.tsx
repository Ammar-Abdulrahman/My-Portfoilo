import { useEffect, useState } from "react";
import ammar from "@Assets/images/carton6.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import PreferenceControls from "@Components/PreferenceControls";
import "./index.css";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#education", label: t("nav.education") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#services", label: t("nav.services") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "skills",
        "services",
        "projects",
        "contact",
      ];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActive(`#${id}`);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setActive(href === "#" ? "#home" : href);
    setOpen(false);
  };

  return (
    <header className={`navbar__des ${scrolled ? "navbar__des--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          onClick={() => handleNav("#home")}
        >
          <div className="navbar__avatar">
            <img src={ammar} alt={t("nav.brand")} />
          </div>
          <span>{t("nav.brand")}</span>
        </a>

        <nav aria-label="Primary" className="navbar__links">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? "active" : ""}
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <div className="navbar__prefs-desktop">
            <PreferenceControls />
          </div>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className={open ? "is-open" : ""} />
            <span className={open ? "is-open" : ""} />
            <span className={open ? "is-open" : ""} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile"
          >
            <PreferenceControls />
            <ul>
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  <a
                    href={link.href}
                    className={active === link.href ? "active" : ""}
                    onClick={() => handleNav(link.href)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
