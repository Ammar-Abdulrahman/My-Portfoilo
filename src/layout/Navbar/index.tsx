import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useEffect, useState } from "react";
import "./index.css";

const navItems = [
  { href: "#home", icon: AiOutlineHome, id: "home" },
  { href: "#about", icon: AiOutlineUser, id: "about" },
  { href: "#experience", icon: GiAchievement, id: "experience" },
  { href: "#services", icon: MdOutlineMiscellaneousServices, id: "services" },
  { href: "#projects", icon: GrProjects, id: "projects" },
  { href: "#contact", icon: BiMessageSquareDetail, id: "contact" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY + 140 >= el.offsetTop) {
          setActiveNav(item.href);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar" aria-label="Quick navigation">
      {navItems.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? "active" : ""}
          aria-label={href.replace("#", "")}
        >
          <Icon />
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
