import { useState, useEffect } from "react";

const images = [
  "src/images/banner 1.jpg",
  "src/images/banner2.jpg",
  "src/images/banner3.jpg",
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl mb-8 shadow-sm">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full shrink-0">
            <img
              src={src}
              alt="cartflow banner"
              className="w-full h-56 md:h-72 lg:h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === i ? "bg-blue-600" : "bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Prev + Next controls */}
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>

      <button
        onClick={() =>
          setIndex((prev) => (prev + 1) % images.length)
        }
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}
