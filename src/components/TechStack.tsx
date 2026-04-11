import React from "react";

type Skills = readonly string[];

interface SkillListProps {
  skills: Skills;
}

function SkillList({ skills }: SkillListProps) {
  return (
    <>
      {skills.map((item) => (
        <p className="inline-flex items-center rounded-md border px-2 py-1 text-sm font-semibold font-mono text-white bg-slate-700 max-sm:text-xs">
          {item}
        </p>
      ))}
    </>
  );
}

export default function TechStack({ skills }: SkillListProps) {
  return (
    <div className="mb-7">
      <h2 className="text-2xl font-bold mb-3 max-sm:text-xl max-sm:mb-2">
        Tech Stack & Tools
      </h2>
      <div className="flex gap-3 flex-wrap">
        <SkillList skills={skills} />
      </div>
    </div>
  );
}
