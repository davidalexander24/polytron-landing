"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ChevronRight, Wifi, Thermometer, Wind, Shield, Leaf, Zap } from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const duration = 1800;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(start + (target - start) * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const baasFeatures = [
  {
    num: "01", title: "Swap Baterai Instan", desc: "Ganti baterai dalam hitungan menit di 500+ stasiun swap Polytron di seluruh Indonesia.",
  },
  {
    num: "02", title: "500+ Stasiun Swap", desc: "Jaringan stasiun penukaran baterai terluas di Indonesia, terus berkembang setiap harinya.",
  },
  {
    num: "03", title: "Layanan 24 Jam", desc: "Operasional 24/7 memastikan kamu tidak pernah berhenti, kapanpun perjalananmu dimulai.",
  },
  {
    num: "04", title: "Siklus Tanpa Batas", desc: "Tidak ada biaya penggantian baterai, cukup bayar per swap sesuai kebutuhan perjalananmu.",
  },
];

const ecoFeatures = [
  { num: "01", label: "Kontrol WiFi", sub: "Neuva Pro AC", icon: Wifi },
  { num: "02", label: "Sensor Suhu", sub: "Smart Home", icon: Thermometer },
  { num: "03", label: "Inverter Tech", sub: "Hemat Energi", icon: Wind },
  { num: "04", label: "Garansi 3 Tahun", sub: "Terpercaya", icon: Shield },
  { num: "05", label: "Eco Mode", sub: "Ramah Lingkungan", icon: Leaf },
  { num: "06", label: "Fast Charging", sub: "EV Series", icon: Zap },
];

const stats = [
  { value: 40, suffix: "+", label: "Tahun Inovasi", desc: "Berdiri sejak 1975" },
  {
    value: 500,
    suffix: "+",
    label: "Stasiun BaaS",
    desc: "Di seluruh Indonesia",
  },
  {
    value: 5,
    suffix: " Juta+",
    label: "Pengguna Aktif",
    desc: "Rumah tangga Indonesia",
  },
  { value: 80, suffix: "%", label: "Hemat Emisi CO₂", desc: "Dibanding BBM" },
];

export default function LifestyleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="promo" className="relative py-20 lg:py-32 overflow-hidden bg-[#F7F7F7]">
      {/* Background */}



      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* ——— BaaS Section ——— */}
        <div className="mb-5">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-none border border-[#E8E8E8] bg-white">
              <span className="text-[#ED1C24] text-xs font-semibold tracking-[0.15em] uppercase">
                Battery As A Service
              </span>
            </div>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[#ED1C24]/30 to-transparent" />
          </motion.div>

          {/* Asymmetric layout: left text + right visual */}
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center mb-16">
            {/* Left text */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display leading-[1] text-[#0D0D0D] mb-6"
                style={{
                  fontFamily: "var(--font-bebas), Impact, sans-serif",
                  fontSize: "clamp(40px, 6vw, 76px)",
                }}
              >
                BERKENDARA
                <br />
                <span
                  style={{
                    color: "#ED1C24",

                  }}
                >
                  LEBIH BEBAS
                </span>
                <br />
                LEBIH HIJAU
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-[#4A4A4A] text-base leading-relaxed mb-8 max-w-md"
              >
                Program Battery-as-a-Service Polytron memungkinkan kamu menukar
                baterai habis dengan yang penuh dalam hitungan menit. Tanpa menunggu
                charging. Tanpa kekhawatiran jarak tempuh.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center gap-4"
              >
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 bg-[#ED1C24] text-white font-semibold text-sm rounded-none hover:bg-[#C8141B] transition-colors"
                >
                  Cari Stasiun Swap
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#4A4A4A] text-sm hover:text-[#0D0D0D] transition-colors group"
                >
                  Pelajari BaaS
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            </div>

            {/* Right: BaaS visual card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-none overflow-hidden border border-[#E8E8E8]" style={{ height: "360px" }}>
                <img
                  src="/products/Polytron_Battery-as-a-Service_swapstation.jpg"
                  alt="Polytron Battery-as-a-Service swap station, modern kiosk with glowing Polytron branding, person swapping battery module from a Fox 500 motorbike, futuristic charging bay environment at night"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent" />

                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[#4A4A4A] text-xs mb-1">Waktu Swap Rata-rata</p>
                      <p
                        className="font-display text-[#ED1C24] text-4xl"
                        style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
                      >
                        &lt; 3 MENIT
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#4A4A4A] text-xs mb-1">Tersedia Di</p>
                      <p className="text-[#0D0D0D] font-semibold text-sm">32 Kota</p>
                    </div>
                  </div>
                </div>

                {/* Glow edge */}
                <div className="absolute inset-0 rounded-none border border-[#ED1C24]/15 pointer-events-none" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-5 -right-5 bg-white shadow-sm rounded-none p-4 border border-[#E8E8E8]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col justify-center">
                    <span className="font-display text-[#ED1C24] text-2xl leading-none" style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}>CO₂</span>
                  </div>
                  <div>
                    <p className="text-[#4A4A4A] text-[9px] mb-0.5">CO₂ Dihemat</p>
                    <p className="text-[#0D0D0D] font-bold text-sm">1.2 Ton/Tahun</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* BaaS feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {baasFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group rounded-none bg-white border border-[#E8E8E8] p-5 hover:border-[#E8E8E8] transition-all duration-300"
              >
                <div className="mb-3"><span className="font-display text-[#ED1C24] text-4xl leading-none opacity-80" style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}>{feature.num}</span></div>
                <h4 className="text-[#0D0D0D] font-semibold text-sm mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-[#4A4A4A] text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ——— Stats Band ——— */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-none overflow-hidden mb-24"
          style={{
            background: "#FFFFFF", border: "1px solid #E8E8E8",
          }}
        >
          {/* Glow */}



          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E8E8E8]">
            {stats.map((stat, i) => (
              <div key={stat.label} className="px-6 py-8 lg:px-10 lg:py-10 text-center">
                <p
                  className="font-display leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-bebas), Impact, sans-serif",
                    fontSize: "clamp(36px, 5vw, 60px)",
                    color: "#ED1C24",

                  }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-[#0D0D0D] font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-[#9E9E9E] text-[11px]">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ——— Smart Home Eco Section ——— */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-none border border-[#E8E8E8] bg-white">
              <span className="text-[#ED1C24] text-xs font-semibold tracking-[0.15em] uppercase">
                Smart & Eco Living
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-none overflow-hidden border border-[#E8E8E8]" style={{ height: "420px" }}>
                <img
                  src="/products/SmarthomeinteriorsceneshowingaPolytronNeuvaProAC.jpg"
                  alt="Smart home interior scene showing a Polytron Neuva Pro AC, Flexup refrigerator, and smart TV all connected via Polytron app on a smartphone, modern Indonesian living room with warm ambient lighting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D0D]/60" />
              </div>

              {/* Eco chip overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 left-8 bg-white shadow-sm rounded-none p-4 border border-[#ED1C24]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-none bg-[#ED1C24] flex items-center justify-center">
                      <span className="font-display text-white text-xl leading-none" style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}>ECO</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#0D0D0D] font-semibold text-xs">Hemat Listrik</p>
                    <p className="text-[#ED1C24] font-bold text-lg leading-none">
                      50%<span className="text-xs font-normal text-[#4A4A4A] ml-1">per bulan</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right text + eco feature grid */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display leading-[1] text-[#0D0D0D] mb-6"
                style={{
                  fontFamily: "var(--font-bebas), Impact, sans-serif",
                  fontSize: "clamp(36px, 4.5vw, 60px)",
                }}
              >
                RUMAH CERDAS
                <br />
                <span
                  style={{
                    color: "#ED1C24",

                  }}
                >
                  MASA DEPAN
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[#4A4A4A] text-sm leading-relaxed mb-8"
              >
                Dari AC yang belajar kebiasaanmu hingga kulkas yang mengelola stok makananmu. Ekosistem Smart Home Polytron menghubungkan seluruh perangkat dalam satu aplikasi cerdas.
              </motion.p>

              {/* Feature pills grid */}
              <div className="grid grid-cols-2 gap-3">
                {ecoFeatures.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-none bg-white border border-[#E8E8E8] hover:border-[#E8E8E8] transition-all"
                  >
                    <div className="flex-none"><f.icon size={16} className="text-[#9E9E9E]" /></div>
                    <div>
                      <p className="text-[#0D0D0D] text-xs font-semibold">{f.label}</p>
                      <p className="text-[#9E9E9E] text-[10px]">{f.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
