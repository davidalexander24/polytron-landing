"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Heart, Star, ArrowLeft, ArrowRight, Tag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Flexup Side-by-Side",
    category: "Refrigerator",
    subcategory: "Kulkas",
    price: "Rp 8.499.000",
    originalPrice: "Rp 11.200.000",
    discount: 24,
    rating: 4.8,
    reviews: 1247,
    tags: ["No Frost", "Twin Cooling"],
    badge: "HEMAT",
    imageSrc: "/products/Flexup_Side-by-Side_Refrigerator.jpg",
    imageAlt:
      "Polytron Flexup Side-by-Side refrigerator, matte white finish with chrome handle, modern kitchen background",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Neuva Pro Inverter",
    category: "Smart AC",
    subcategory: "AC Pintar",
    price: "Rp 5.199.000",
    originalPrice: "Rp 6.700.000",
    discount: 22,
    rating: 4.9,
    reviews: 893,
    tags: ["WiFi Control", "Inverter"],
    badge: "HEMAT",
    imageSrc: "/products/NeuvaProInverter_Smart AC.jpg",
    imageAlt:
      "Polytron Neuva Pro Smart AC wall unit, clean white design with subtle LED status indicator",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Partymax 500W",
    category: "Party Speaker",
    subcategory: "Speaker",
    price: "Rp 3.299.000",
    originalPrice: "Rp 4.500.000",
    discount: 27,
    rating: 4.7,
    reviews: 2104,
    tags: ["500W RMS", "Bluetooth 5.2"],
    badge: "HEMAT",
    imageSrc: "/products/Partymax500W_Party Speaker.png",
    imageAlt:
      "Polytron Partymax 500W portable party speaker with glowing LED ring, large cylindrical shape",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: '100" Mini LED Gaming',
    category: "Smart TV",
    subcategory: "TV Gaming",
    price: "Rp 42.999.000",
    originalPrice: "Rp 55.000.000",
    discount: 22,
    rating: 4.9,
    reviews: 421,
    tags: ["4K 144Hz", "Mini LED"],
    badge: "PROMO",
    imageSrc: "/products/MiniLEDGaming_SmartTV.jpg",
    imageAlt:
      "Polytron 100-inch Mini LED Gaming Smart TV showing a vivid game scene with HDR highlights",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Fox 500 Electric",
    category: "Electric Vehicle",
    subcategory: "Motor Listrik",
    price: "Rp 24.999.000",
    originalPrice: "Rp 28.500.000",
    discount: 12,
    rating: 4.8,
    reviews: 685,
    tags: ["200km", "Fast Charge"],
    badge: "UNGGULAN",
    imageSrc: "/products/Fox500Electric_ElectricVehicle.png",
    imageAlt:
      "Polytron Fox 500 electric motorbike, 3/4 front view, gloss black, parked in urban environment",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 6,
    name: "Luxia 15 Pro",
    category: "Laptop",
    subcategory: "Laptop",
    price: "Rp 12.499.000",
    originalPrice: "Rp 15.000.000",
    discount: 17,
    rating: 4.6,
    reviews: 334,
    tags: ["Intel i7", "16GB RAM"],
    badge: "HEMAT",
    imageSrc: "/products/Luxia15Pro_Laptop.png",
    imageAlt:
      "Polytron Luxia 15 Pro laptop open showing thin aluminum chassis, backlit keyboard",
    isNew: true,
    isBestseller: false,
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? "text-[#ED1C24]" : "text-[#E8E8E8]"}
          fill={s <= Math.round(rating) ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-none w-[272px] rounded-none bg-white border border-[#E8E8E8] overflow-hidden group product-card-hover"
    >
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2 py-1 rounded-none text-[10px] font-bold bg-[#ED1C24] text-white">
        <Tag size={9} />
        {product.badge} {product.discount}%
      </div>

      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="absolute top-3 right-3 z-20 w-7 h-7 rounded-none bg-white border border-[#E8E8E8] flex items-center justify-center hover:border-[#ED1C24]/30 transition-all"
      >
        <Heart
          size={12}
          className={wishlisted ? "text-[#ED1C24]" : "text-[#9E9E9E]"}
          fill={wishlisted ? "currentColor" : "none"}
        />
      </button>

      <div className="relative h-[196px] bg-[#F7F7F7] overflow-hidden">
        <p
          className="absolute bottom-2 right-3 font-display text-[40px] leading-none text-[#E8E8E8] pointer-events-none select-none"
          style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
        >
          {product.subcategory.toUpperCase()}
        </p>
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
        />
        {(product.isNew || product.isBestseller) && (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {product.isNew && (
              <span className="px-2 py-0.5 rounded-none text-[9px] font-bold bg-[#0D0D0D] text-white">
                BARU
              </span>
            )}
            {product.isBestseller && (
              <span className="px-2 py-0.5 rounded-none text-[9px] font-bold bg-[#F7F7F7] text-[#4A4A4A] border border-[#E8E8E8]">
                TERLARIS
              </span>
            )}
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="label-eyebrow mb-1.5">{product.category}</p>
        <h3 className="text-[#0D0D0D] font-semibold text-sm mb-2 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-[#9E9E9E] text-[10px]">
            {product.rating} ({product.reviews.toLocaleString("id-ID")} ulasan)
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-none text-[9px] text-[#4A4A4A] bg-[#F7F7F7] border border-[#E8E8E8]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[#9E9E9E] text-[11px] line-through leading-none mb-0.5">
              {product.originalPrice}
            </p>
            <p className="text-[#0D0D0D] font-bold text-sm">{product.price}</p>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-none text-[11px] font-bold text-white bg-[#ED1C24] hover:bg-[#C8141B] transition-colors duration-200">
            <ShoppingCart size={11} />
            Beli
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -580 : 580, behavior: "smooth" });
  };

  return (
    <section id="home" className="py-24 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex items-end justify-between mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="label-eyebrow mb-3"
            >
              Produk Unggulan
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[clamp(36px,5vw,60px)] leading-[1] text-[#0D0D0D]"
              style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
            >
              PILIHAN <span className="text-[#ED1C24]">TERBAIK</span> KAMI
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center gap-2"
          >
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-none border border-[#E8E8E8] flex items-center justify-center text-[#9E9E9E] hover:text-[#0D0D0D] hover:border-[#1A1A1A] transition-all"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-none border border-[#E8E8E8] flex items-center justify-center text-[#9E9E9E] hover:text-[#0D0D0D] hover:border-[#1A1A1A] transition-all"
            >
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-6 lg:px-10 pb-4"
      >
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-sm font-medium rounded-none hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 group"
          >
            Lihat Semua Produk
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
