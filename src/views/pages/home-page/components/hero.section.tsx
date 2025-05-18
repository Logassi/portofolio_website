export default function HeroSection() {
  return (
    <article className="flex items-center justify-center text-center w-full h-dvh">
      <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left w-full max-w-6xl px-4">
        {/* Text on the left */}
        <div className="flex flex-col gap-2 text-xl md:text-2xl w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl font-bold">
            Hi, I am Lomona Gagasi Pasaribu
          </h1>
          <h2 className="text-xl md:text-2xl">A Fullstack Website Developer</h2>
          <p className="text-base md:text-lg">
            "...specializing in backend development using NestJS and Express.js,
            with strong fundamentals in Next.js for frontend development."
          </p>
        </div>

        {/* Image on the right */}
        <img
          src="/2-removebg.png"
          alt="Portrait of Lomona Gagasi Pasaribu, Fullstack Web Developer"
          className="order-first md:order-none w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg mb-4 md:mb-0"
        />
      </div>
    </article>
  );
}
