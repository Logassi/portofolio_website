import {
  SiNestjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiJest,
  SiVercel,
  SiNodedotjs,
  SiRedis,
  SiDocker,
  SiSocketdotio,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";

export default function TechStacksIcons() {
  return (
    <article className="w-full bg-black py-6 overflow-hidden rounded-2xl mb-4">
      <div className="whitespace-nowrap ">
        <div className="inline-flex animate-marquee space-x-12 text-white text-center px-4 ">
          {[...Array(4)].flatMap((_, loopIndex) =>
            [
              { icon: <SiNestjs />, label: "NestJS" },
              { icon: <SiExpress />, label: "Express.js" },
              { icon: <SiNextdotjs />, label: "Next.js" },
              { icon: <SiNodedotjs />, label: "Node.js" },
              { icon: <SiReact />, label: "React.js" },
              { icon: <SiTailwindcss />, label: "Tailwind CSS" },
              { icon: <SiTypescript />, label: "TypeScript" },
              { icon: <SiJavascript />, label: "JavaScript" },
              { icon: <SiPostgresql />, label: "PostgreSQL" },
              { icon: <SiMysql />, label: "MySQL" },
              { icon: <SiMongodb />, label: "MongoDB" },
              { icon: <SiSupabase />, label: "Supabase" },
              { icon: <SiPrisma />, label: "Prisma" },
              { icon: <SiJest />, label: "Jest" },
              { icon: <SiVercel />, label: "Vercel" },
              { icon: <SiRedis />, label: "Redis" },
              { icon: <SiDocker />, label: "Docker" },
              { icon: <SiSocketdotio />, label: "Socket.io" },
            ].map((item, index) => (
              <div
                key={`${item.label}-${loopIndex}-${index}`}
                className="flex flex-col items-center justify-center text-3xl"
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </article>
  );
}
