"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Kendaraan Listrik", href: "#ev" },
  { label: "TV & Audio", href: "#audio" },
  { label: "Perabot Rumah", href: "#home" },
  { label: "Laptop", href: "#laptop" },
  { label: "Promo", href: "#promo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-[#E8E8E8] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <a href="/" className="flex items-center">
              <img src="/PolytronLogo.svg" alt="Polytron" className="h-6 w-auto" />
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setActiveLink(link.label)}
                  onMouseLeave={() => setActiveLink("")}
                  className="relative px-4 py-2 text-[13px] font-medium text-[#4A4A4A] hover:text-[#0D0D0D] transition-colors duration-200"
                >
                  {link.label}
                  {activeLink === link.label && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#ED1C24]"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button className="w-9 h-9 flex items-center justify-center text-[#9E9E9E] hover:text-[#0D0D0D] transition-colors">
                <Search size={17} />
              </button>
              <button className="relative w-9 h-9 flex items-center justify-center text-[#9E9E9E] hover:text-[#0D0D0D] transition-colors">
                <ShoppingCart size={17} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ED1C24] rounded-sm" />
              </button>
              <div className="w-px h-5 bg-[#E8E8E8] mx-1" />
              <a
                href="#"
                className="px-5 py-2 text-[13px] font-semibold text-white bg-[#ED1C24] rounded-none hover:bg-[#C8141B] transition-colors duration-200"
              >
                Beli Sekarang
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0D0D0D]"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#E8E8E8]"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-5 space-y-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-[#4A4A4A] hover:text-[#0D0D0D] hover:bg-[#F7F7F7] rounded-none transition-all"
                >
                  <span className="text-sm font-medium">{link.label}</span>
                  <span className="text-[#ED1C24] text-xs">→</span>
                </motion.a>
              ))}
              <div className="pt-3 pb-1">
                <a
                  href="#"
                  className="block w-full text-center py-3.5 bg-[#ED1C24] text-white font-semibold rounded-none text-sm hover:bg-[#C8141B] transition-colors"
                >
                  Beli Sekarang
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
