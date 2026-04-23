"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const categories = [
  {
    id: "ev",
    indexNumber: "01",
    label: "Kendaraan Listrik",
    tagline: "Bebas. Tanpa Batas.",
    description:
      "Jajaran Fox Series & G3, motor listrik bertenaga tinggi dengan teknologi Battery-as-a-Service revolusioner.",
    products: ["Fox 200", "Fox 350", "Fox 500", "G3 Series"],
    imageAlt:
      "Polytron Fox 500 electric motorbike dynamic action shot, matte black with electric blue accent lighting, rider on open highway at dusk, motion blur background",
    imageSrc: "/products/Fox500Electric_ElectricVehicle.png",
    badge: "Terlaris",
    large: true,
  },
  {
    id: "audio",
    indexNumber: "02",
    label: "TV & Audio",
    tagline: "Visual Imersif.",
    description:
      "Mini LED Gaming TV hingga 100 inci, speaker Audivo & Partymax Premium.",
    products: ['Mini LED 100"', "4K UHD TV", "Audivo", "Partymax"],
    imageAlt:
      "Polytron 100-inch Mini LED Gaming TV mounted in a dark, modern living room with vibrant game visuals",
    imageSrc: "/products/MiniLEDGaming_SmartTV.jpg",
    badge: "New",
    large: false,
  },
  {
    id: "home",
    indexNumber: "03",
    label: "Perabot Rumah",
    tagline: "Rumah Lebih Cerdas.",
    description:
      "Flexup Refrigerator, Zeromatic Washer, Neuva Pro Smart AC & Low Carbo Rice Cooker.",
    products: ["Flexup Kulkas", "Zeromatic", "Neuva Pro", "Low Carbo RC"],
    imageAlt:
      "Polytron Flexup side-by-side refrigerator in matte white finish placed in a sleek modern minimalist kitchen",
    imageSrc: "/products/Flexup_Side-by-Side_Refrigerator.jpg",
    badge: "Smart",
    large: false,
  },
  {
    id: "laptop",
    indexNumber: "04",
    label: "Laptop Luxia",
    tagline: "Produktivitas Tanpa Kompromi.",
    description:
      "Seri Luxia, laptop tipis berperforma tinggi untuk profesional dan kreator konten modern.",
    products: ["Luxia 14", "Luxia 15 Pro", "Luxia Ultra"],
    imageAlt:
      "Polytron Luxia laptop series open on a sleek desk, ultra-thin profile side view",
    imageSrc: "/products/Luxia15Pro_Laptop.png",
    badge: "Baru",
    large: false,
  },
];

function CategoryCard({ cat, index }: { cat: (typeof categories)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  if (cat.large) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-2 group relative bg-white border border-[#E8E8E8] rounded-none overflow-hidden cursor-pointer product-card-hover"
        style={{ minHeight: "420px" }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden">
          <img
            src={cat.imageSrc}
            alt={cat.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white" />
        </div>

        <div className="relative z-10 p-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-[#ED1C24] text-4xl leading-none opacity-80" style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}>{cat.indexNumber}</span>
              <span className="label-eyebrow">{cat.label}</span>
              <span className="ml-auto px-2.5 py-1 bg-[#ED1C24] text-white text-[10px] font-bold tracking-wider rounded-none">
                {cat.badge}
              </span>
            </div>
            <h3
              className="font-display text-[clamp(48px,6vw,80px)] leading-[0.9] text-[#0D0D0D] mb-4"
              style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
            >
              {cat.tagline}
            </h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-xs mb-8">
              {cat.description}
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {cat.products.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 text-[11px] font-medium text-[#4A4A4A] bg-[#F7F7F7] border border-[#E8E8E8] rounded-none"
                >
                  {p}
                </span>
              ))}
            </div>
            <a
              href={`#${cat.id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#ED1C24] hover:gap-3 transition-all duration-200"
            >
              Lihat Semua <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-[#E8E8E8] rounded-none overflow-hidden cursor-pointer product-card-hover"
      style={{ minHeight: "260px" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={cat.imageSrc}
          alt={cat.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-12"
          style={{ opacity: 0.12 }}
        />
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-[#ED1C24] text-4xl leading-none opacity-80" style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}>{cat.indexNumber}</span>
            <span className="px-2.5 py-1 text-[10px] font-bold text-[#ED1C24] bg-[#FFF0F0] border border-[#ED1C24]/20 rounded-none">
              {cat.badge}
            </span>
          </div>
          <p className="label-eyebrow mb-2">{cat.label}</p>
          <h3
            className="font-display text-[clamp(28px,3vw,40px)] leading-[0.9] text-[#0D0D0D] mb-3"
            style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
          >
            {cat.tagline}
          </h3>
          <p className="text-[#9E9E9E] text-xs leading-relaxed">{cat.description}</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cat.products.map((p) => (
              <span
                key={p}
                className="px-2.5 py-0.5 text-[10px] font-medium text-[#4A4A4A] bg-[#F7F7F7] border border-[#E8E8E8] rounded-none"
              >
                {p}
              </span>
            ))}
          </div>
          <a
            href={`#${cat.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ED1C24] hover:gap-2.5 transition-all duration-200"
          >
            Lihat Semua <ChevronRight size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ev" className="py-24 lg:py-32 bg-[#F0F0F0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex items-end justify-between mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="label-eyebrow mb-3"
            >
              Jelajahi Kategori
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[clamp(36px,5vw,60px)] leading-[1] text-[#0D0D0D]"
              style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
            >
              SATU BRAND,{" "}
              <span className="text-[#ED1C24]">SEGALA SOLUSI</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="#"
            className="hidden lg:flex items-center gap-1.5 text-[#4A4A4A] text-sm hover:text-[#0D0D0D] transition-colors"
          >
            Semua Kategori <ChevronRight size={15} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
