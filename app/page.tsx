"use client";
import ProjectBanner from "./components/ProjectBanner";
import ProjectCard from "./components/ProjectCard";
import { useState, useEffect } from "react";
import { getProjects } from "./components/data/projects";
import { TournamentChart } from "./components/TournamentChart";

export default function Home() {
  const projects = getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  mx-auto">
      <ProjectBanner />
      <div className="flex flex-col items-center justify-center max-w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 w-full grid-rows-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <div className="my-14 relative">
          <TournamentChart />
        </div>
      </div>
    </main>
  );
}
