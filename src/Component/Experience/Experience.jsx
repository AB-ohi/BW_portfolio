

export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Shuta",
       companyUrl: "https://shuta.site/",
      location: "Dhaka, Bangladesh",
      type: "Full-time", 
      start: "Jan 2024",
      end: "Present",
      points: [
        "Built responsive UIs with React and Next.js",
        "Developed REST APIs with Node.js and Express",
        "Shipped a React Native (Expo) app to production",
        "🛠️ Something awesome is being built. Website coming soon!",
      ],
      stack: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    },
    {
    role: "Web Developer",
    company: "biddrup",
     companyUrl: "https://biddrup.com",
    location: "Remote · Khulna, Bangladesh",
    start: "Oct 2021",
    end: "Jan 2023",
    summary:
      "Worked in a remote team building MERN stack applications, with ffmpeg for video processing and Socket.IO for real-time features.",
    points: [
      "Built a video processing tool with ffmpeg, solving complex media-handling challenges across Node.js and React.js.",
      "Migrated static WordPress sites to dynamic MERN applications, adding proper data management and a better user experience.",
      "Improved reliability and performance through systematic debugging and targeted optimizations, recognized by teammates for the impact.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "ffmpeg"],
  },,
  ];


  function CompanyName({ name, url }) {
  const base =
    "inline-flex items-center gap-1.5 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent";

  if (!url) return <span className={base}>{name}</span>;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} `}
    >
      <span className="underline decoration-indigo-500 underline-offset-4 ">
        {name}
      </span>
      <svg
        className="h-4 w-4 text-indigo-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </a>
  );
}


  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Work Experience</h2>

      <div className="relative border-l border-gray-700 pl-8 space-y-12">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="relative rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-indigo-500/40 transition"
          >
            <span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-gray-900" />

            <CompanyName name={exp.company} url={exp.companyUrl} />

            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-gray-100">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-400">
                {exp.start} - {exp.end}
              </span>
            </div>

            {exp.location && (
              <p className="mt-1 text-sm text-gray-500">{exp.location}</p>
            )}

            {exp.summary && (
              <p className="mt-4 text-gray-400">{exp.summary}</p>
            )}

            <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
              {exp.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
