export default function Banner() {
  return (
    <div
      className="rounded-2xl mb-8 shadow-sm w-full h-52 md:h-64 lg:h-72 bg-no-repeat bg-center bg-contain bg-white relative"
      style={{
        backgroundImage: `url("src/images/Banner-image.png")`,
      }}
    >
      {/* OPTIONAL small tag — remove if you don't want it */}
      <div className="absolute top-3 left-3 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow">
        20% OFF Today
      </div>
    </div>
  );
}
