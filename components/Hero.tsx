"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "40+", label: "Tahun Inovasi" },
  { value: "5M+", label: "Pelanggan Setia" },
  { value: "200+", label: "Service Center" },
  { value: "12", label: "Kategori Produk" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F7F7]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4D4D4 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-4">
          <motion.div style={{ y: textY, opacity }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="label-eyebrow mb-5"
            >
              New: Fox Series 2025 Kini Tersedia
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="origin-left w-12 h-[3px] bg-[#ED1C24] mb-8"
            />

            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(56px,8vw,112px)] leading-[0.88] text-[#0D0D0D]"
                style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
              >
                MASA
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(56px,8vw,112px)] leading-[0.88] text-[#ED1C24]"
                style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
              >
                DEPAN
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(56px,8vw,112px)] leading-[0.88] text-[#D4D4D4]"
                style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
              >
                BERGERAK
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-[#4A4A4A] text-base lg:text-lg leading-relaxed max-w-[400px] mb-6"
            >
              Polytron Fox 500, motor listrik terkuat kami. Jelajahi Indonesia
              tanpa batas dengan teknologi Battery-as-a-Service terdepan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a
                href="#"
                className="flex items-center gap-2 px-7 py-3.5 bg-[#ED1C24] text-white font-semibold text-sm rounded-none hover:bg-[#C8141B] transition-colors duration-200"
              >
                Beli Sekarang <ArrowRight size={15} />
              </a>
              <a
                href="#ev"
                className="flex items-center gap-2 px-7 py-3.5 border border-[#1A1A1A] text-[#1A1A1A] font-medium text-sm rounded-none hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
              >
                Eksplorasi Produk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-8 pt-6 border-t border-[#E8E8E8]"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-display text-2xl lg:text-3xl text-[#0D0D0D] leading-none"
                    style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[#9E9E9E] text-[11px] mt-1 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute top-4 left-0 lg:left-8 z-20 bg-white border border-[#E8E8E8] rounded-none p-4"
            >
              <p className="text-[10px] text-[#9E9E9E] mb-0.5 tracking-widest uppercase">
                Model Unggulan
              </p>
              <p
                className="font-display text-xl text-[#0D0D0D]"
                style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
              >
                FOX 500
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] text-[#9E9E9E] line-through">Rp 28.500.000</span>
                <span className="text-[11px] text-[#ED1C24] font-bold">Rp 24.999.000</span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[600px]"
            >
              <img
                src="/products/Fox500Electric_ElectricVehicle.png"
                alt="Polytron Fox 500 Electric Motorbike — side profile, clean white studio background"
                className="w-full object-contain"
                style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute bottom-8 right-0 lg:right-4 bg-[#ED1C24] text-white rounded-none px-4 py-3"
            >
              <p className="text-[10px] font-semibold tracking-wider uppercase opacity-80 mb-0.5">Range</p>
              <p
                className="font-display text-2xl leading-none"
                style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
              >
                200 KM
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
