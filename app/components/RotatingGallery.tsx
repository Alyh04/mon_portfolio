"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/profil.png", alt: "Lorniot Marcel" },
  { src: "/projet_1.png", alt: "Projet" },
  { src: "/main.jpg", alt: "Espace de travail" },
  { src: "/Mada.jpg", alt: "Madagascar" },
  { src: "/ordi.jpg", alt: "Poste de travail" },
  { src: "/html.jpg", alt: "Développement" },
];

export default function RotatingGallery() {
  const [pair, setPair] = useState({ current: 0, prev: -1 });
  const indexRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const prev = indexRef.current;
      indexRef.current = (prev + 1) % images.length;
      setPair({ current: indexRef.current, prev });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const currentImg = images[pair.current];
  const prevImg = pair.prev >= 0 ? images[pair.prev] : null;

  return (
    <div className="relative w-full flex items-center justify-center min-h-[400px] md:min-h-[500px]">
      <div
        className="relative rounded-[30px] overflow-hidden border border-border shadow-xl bg-card"
        style={{ width: "min(70vw, 380px)", height: "min(70vw, 380px)" }}
      >
        {prevImg && (
          <motion.div
            key={pair.prev}
            className="absolute inset-0"
            initial={{ filter: "blur(0px)", opacity: 1 }}
            animate={{ filter: "blur(8px)", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={prevImg.src}
              alt={prevImg.alt}
              fill
              className="object-cover"
              sizes="380px"
            />
          </motion.div>
        )}

        <motion.div
          key={pair.current}
          className="absolute inset-0"
          initial={{ filter: "blur(8px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={currentImg.src}
            alt={currentImg.alt}
            fill
            className="object-cover"
            sizes="380px"
          />
        </motion.div>
      </div>
    </div>
  );
}
