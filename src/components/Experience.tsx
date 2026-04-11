import { MY_WORKS } from "../data/myworks";

type Experience = (typeof MY_WORKS)[number];

interface ExperienceListProps {
  company: Experience["company"];
  link: Experience["link"];
  title: Experience["title"];
  status: Experience["status"];
  start: Experience["start"];
  end: Experience["end"];
  description: Experience["description"];
}

function ExperienceList({
  company,
  link,
  title,
  status,
  start,
  end,
  description,
}: ExperienceListProps) {
  return (
    <div className="mb-3">
      <div className="w-full flex justify-between items-center max-sm:flex-col-reverse max-sm:items-start">
        <div className="flex items-center">
          <a
            href={link}
            target="_blank"
            className="text-xl font-semibold list-none mr-3 hover:underline hover:font-bold max-sm:text-lg"
          >
            {company}
          </a>
          <p className="inline-flex items-center rounded-md border px-1 text-xs font-semibold font-mono bg-gray-100">
            {status}
          </p>
        </div>
        <p className="text-base font-medium font-mono max-sm:text-sm">
          {start} - {end}
        </p>
      </div>
      <p className="text-base font-medium font-mono max-sm:text-sm">{title}</p>
      <div className="mt-0 text-xs font-mono text-justify text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
        {description}
      </div>
    </div>
  );
}

interface ExperienceProps {
  work: typeof MY_WORKS;
}

export default function Experience({ work }: ExperienceProps) {
  return (
    <div className="mb-7">
      <h2 className="text-2xl font-bold mb-3 max-sm:text-xl">Experiences</h2>
      {work.map((item) => (
        <ExperienceList
          company={item.company}
          link={item.link}
          title={item.title}
          status={item.status}
          start={item.start}
          end={item.end}
          description={item.description}
        />
      ))}
    </div>
  );
}
