"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Youtube, Twitter, ChevronRight } from "lucide-react";

const footerLinks = {
  Produk: [
    { label: "Kendaraan Listrik", href: "#ev" },
    { label: "TV & Audio", href: "#audio" },
    { label: "Kulkas & Freezer", href: "#" },
    { label: "AC Pintar", href: "#" },
    { label: "Mesin Cuci", href: "#" },
    { label: "Laptop Luxia", href: "#laptop" },
    { label: "Speaker Party", href: "#" },
  ],
  Layanan: [
    { label: "Service Center", href: "#" },
    { label: "Garansi Produk", href: "#" },
    { label: "Battery-as-a-Service", href: "#" },
    { label: "Cari Stasiun Swap", href: "#" },
    { label: "Unduh Katalog", href: "#" },
    { label: "Tanya Produk", href: "#" },
  ],
  Perusahaan: [
    { label: "Tentang Polytron", href: "#" },
    { label: "Sejarah Kami", href: "#" },
    { label: "Karier", href: "#" },
    { label: "Berita & Press", href: "#" },
    { label: "Tanggung Jawab Sosial", href: "#" },
    { label: "Investor Relations", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter/X" },
];

const serviceCenters = [
  { city: "Jakarta", count: "24 lokasi" },
  { city: "Surabaya", count: "12 lokasi" },
  { city: "Bandung", count: "8 lokasi" },
  { city: "Medan", count: "6 lokasi" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#0D0D0D] pt-20 pb-8 overflow-hidden">
      {/* Top border glow */}
      

      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle glow */}
      

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Newsletter bar */}
        <div
          className="relative rounded-none p-8 lg:p-10 mb-16 overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Decoration */}
          

          <div className="relative grid lg:grid-cols-[1fr_auto] items-center gap-8">
            <div>
              <p className="text-[#ED1C24] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                Newsletter
              </p>
              <h3
                className="font-display text-[clamp(24px,3vw,36px)] leading-[1] text-white mb-2"
                style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
              >
                DAPATKAN PENAWARAN EKSKLUSIF
              </h3>
              <p className="text-white/40 text-sm">
                Daftarkan email kamu dan jadilah yang pertama mengetahui promo, produk baru, dan berita terbaru Polytron.
              </p>
            </div>

            <div className="lg:w-[400px]">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 py-4 px-6 rounded-none bg-[#ED1C24]/10 border border-[#ED1C24]/20"
                >
                  <div className="w-5 h-5 rounded-none bg-[#ED1C24] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-[#ED1C24] text-sm font-medium">
                    Berhasil! Cek email kamu.
                  </span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="flex-1 relative">
                    
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@kamu.com"
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-none text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#ED1C24]/40 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-3 bg-[#ED1C24] text-black font-semibold text-sm rounded-none hover:bg-white transition-colors whitespace-nowrap"
                  >
                    Daftar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            {/* Logo */}
            <a href="/" className="flex items-center mb-6"><img src="/PolytronLogo.svg" alt="Polytron" className="h-6" style={{ filter: "brightness(0) invert(1)" }} /></a>

            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-[260px]">
              Lebih dari 40 tahun menghadirkan inovasi elektronik terpercaya
              untuk kehidupan modern Indonesia.
            </p>

            {/* Service info */}
            <div className="space-y-3 mb-7">
              <div className="flex items-center gap-3 text-white/40 text-xs">
                <span className="text-[#ED1C24] font-bold min-w-[16px]">T.</span>
                <span>0800-1-765-876 (Bebas Pulsa)</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-xs">
                <span className="text-[#ED1C24] font-bold min-w-[16px]">E.</span>
                <span>cs@polytron.co.id</span>
              </div>
              <div className="flex items-start gap-3 text-white/40 text-xs">
                <span className="text-[#ED1C24] font-bold min-w-[16px] mt-0.5">A.</span>
                <span>Jl. Raya Kudus-Demak KM 9, Kudus, Jawa Tengah</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-none border border-white/[0.08] flex items-center justify-center text-white/35 hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-all"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-xs tracking-[0.12em] uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/35 text-xs hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={10}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ED1C24]"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Center strip */}
        <div className="rounded-none bg-[#1A1A1A] border border-white/[0.05] p-5 mb-12">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white/50 text-xs font-semibold tracking-wide uppercase">
                Service Center Terdekat
              </span>
            </div>
            <div className="h-4 w-px bg-white/[0.08] hidden sm:block" />
            <div className="flex flex-wrap gap-4">
              {serviceCenters.map((sc) => (
                <div key={sc.city} className="flex items-center gap-1.5">
                  <span className="text-white text-xs font-medium">{sc.city}</span>
                  <span className="text-white/25 text-[10px]">{sc.count}</span>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="ml-auto flex items-center gap-1.5 text-[#ED1C24] text-xs font-semibold hover:underline"
            >
              Lihat Peta <ArrowRight size={11} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-white/20 text-[11px]">
            © {new Date().getFullYear()} PT Hartono Istana Teknologi. Semua Hak Dilindungi.
          </p>
          <div className="flex items-center gap-5">
            {["Kebijakan Privasi", "Syarat & Ketentuan", "Cookie"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/20 text-[11px] hover:text-white/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
