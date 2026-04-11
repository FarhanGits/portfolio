import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PERSONAL_DATA } from "./data/personal_data";
import { MY_WORKS } from "./data/myworks";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import WorkExperience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import { PROJECTS } from "./data/projects";

const App = () => {
  return (
    <main className="container mx-auto w-3/4 max-lg:w-3/5 max-md:w-10/12 my-10">
      <Header />

      <div className="flex mt-10 gap-5 max-lg:flex-col max-sm:gap-0 max-lg:gap-0">
        <div className="flex flex-col w-1/2 max-lg:w-full">
          <Summary summary={PERSONAL_DATA.summary} />

          <WorkExperience work={MY_WORKS} />
        </div>

        <div className="flex flex-col w-1/2 max-lg:w-full">
          {/* <Education
            uni={PERSONAL_DATA.education.uni}
            start={PERSONAL_DATA.education.start}
            end={PERSONAL_DATA.education.end}
            degree={PERSONAL_DATA.education.degree}
          /> */}

          <TechStack skills={PERSONAL_DATA.skills} />

          <Projects project={PROJECTS} />
        </div>
      </div>

      {/* <footer className="w-full">
        <p className="cursor-not-allowed rounded-md border text-white p-2 font-semibold text-center bg bg-slate-700 hover:text-slate-700 hover:border-slate-700 hover:bg-transparent">
          © 2026, {PERSONAL_DATA.name}
        </p>
      </footer> */}
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />,
);
