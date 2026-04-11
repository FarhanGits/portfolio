import { PROJECTS } from "../data/projects";

type ProjectList = (typeof PROJECTS)[number];

interface ProjectListProps {
  app: ProjectList["app"];
  summary?: ProjectList["summary"];
  short_summary: ProjectList["short_summary"];
  tech_stack: ProjectList["tech_stack"];
  link: ProjectList["link"];
  job_desc?: ProjectList["job_desc"];
}

function ProjectCard({
  app,
  short_summary,
  tech_stack,
  link,
}: ProjectListProps) {
  return (
    <div className="w-11/12 p-3 gap-1 flex flex-col justify-between box-border border rounded-lg border-gray-300">
      <div>
        <h1 className="font-bold mb-1">{app}</h1>
        <p className="mt-0 text-xs font-mono text-foreground/80 print:mt-1 print:text-[10px] text-pretty mb-1">
          {short_summary}
        </p>
        <a
          href={link}
          className="text-xs rounded-md border px-2 py-1 font-semibold"
        >
          Project Repository
        </a>
      </div>
      <div>
        {tech_stack.map((item) => (
          <p className="inline-flex items-center rounded-md border px-1 text-xs font-semibold font-mono bg-gray-100">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

interface ProjectProps {
  project: typeof PROJECTS;
}

export default function Projects({ project }: ProjectProps) {
  return (
    <div className="mb-7">
      <h2 className="text-2xl font-bold mb-3 max-sm:text-xl max-sm:mb-2">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2">
        {project.map((item) => (
          <ProjectCard
            app={item.app}
            short_summary={item.short_summary}
            tech_stack={item.tech_stack}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
