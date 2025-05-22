export default function ProjectHeroSection({ title }: { title?: string }) {
  return (
    <section className="flex items-center justify-center w-full h-64 bg-black">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      {/* <h1 className="text-5xl font-bold text-white">Test</h1> */}
    </section>
  );
}
