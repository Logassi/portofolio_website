"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectImagesSection({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="w-full max-w-4xl px-4 py-8 mx-auto text-white">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            fill
            className={`object-contain transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
