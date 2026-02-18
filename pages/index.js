import Layout from '../components/layout';
import React, { useState } from "react";
import {FaGithub, FaFileAlt, FaGoogle, FaTwitter, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import projects from "../content/projects.json";
import Link from "next/link";
import experiences from "@/content/experience.json";
import talks from "@/content/talks.json"
import students from "@/content/students.json"
import currentProjects from "@/content/current_projects.json"


export default function Home() {
    return (
        <Layout>
        <div className="max-w-6xl mx-auto px-2 sm:px-4 mt-4 flex flex-col sm:flex-row justify-center items-center">
            <div className="mb-6 sm:mb-6 sm:mr-12 lg:mr-24">
                <img src="/hao-2022.png" alt="Hao Zhang" className="w-64 md:w-72"/>
            </div>
            <div className="leading-snug sm:ml-12 lg:ml-24">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hao Zhang</h1>
                <p className="text-lg sm:text-xl mt-2">Assistant Professor</p>
                <p className="text-lg sm:text-xl mt-2"><a href="https://datascience.ucsd.edu/" target="_blank">HDSI</a>, <a href="https://cse.ucsd.edu/" target="_blank">CSE</a> (affiliate)</p>
                <p className="text-lg sm:text-xl mt-2 mb-4"><a href="https://ucsd.edu/" target="_blank">UC San Diego</a> </p>
                <p className="text-lg sm:text-xl mt-2 inline-block mb-4">Email: haozhang AT ucsd.edu</p>

                <div className="flex space-x-4">
                    <Link href="/cv.pdf">
                    {/*<a href="/~haozhang/cv.pdf" title="CV" target="_blank" rel="noopener noreferrer">*/}
                        {/*<FaFileAlt className="fa-icon"></FaFileAlt>*/}
                        <i className="ai ai-cv-square" style={{ fontSize: '2.4em' }}></i>
                    {/*</a>*/}
                    </Link>
                    <a href="https://scholar.google.com/citations?user=H1d4BS8AAAAJ&hl=en" title="Google Scholar" target="_blank" rel="noopener noreferrer">
                        <i className="ai ai-google-scholar" style={{ fontSize: '2.4em' }}></i>
                    </a>
                    <a href="https://github.com/zhisbug" title="GitHub" target="_blank" rel="noopener noreferrer">
                        <FaGithub  className="fa-icon"></FaGithub>
                    </a>
                    <a href="https://x.com/haozhangml" title="Twitter" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter  className="fa-icon"></FaXTwitter>
                    </a>
                    <a href="https://www.linkedin.com/in/haozhangml/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="fa-icon"></FaLinkedin>
                    </a>
                </div>
            </div>
        </div>

            <div className="mt-8 text-lg sm:text-xl space-y-2">
                <p>
                    I am an Assistant Professor at <a href="https://datascience.ucsd.edu/" target="_blank">Halıcıoğlu
                    Data Science Institute</a> and <a href="https://cse.ucsd.edu/" target="_blank">Department of
                    Computer Science and Engineering</a> (affiliate) at <a href="https://ucsd.edu/" target="_blank">UC
                    San Diego</a>.
                    I lead the <a href="https://hao-ai-lab.github.io/home/" target="_blank">Hao AI Lab</a> at UCSD.
                    I cofounded <a href="https://lmnet.ai/" target="_blank">LMNet.ai</a> (2023), acquired
                    by <a href="https://www.snowflake.com/en/" target="_blank">Snowflake</a>,
                    and the nonprofit <a href="https://lmsys.org/" target="_blank">LMSYS Org (2023)</a>.
                    I am a <a href="https://sloan.org/fellowships/2026-Fellows" target="_blank">Sloan Research Fellow</a> (2026),
                    nominated as <a href="https://www.innovatorsunder35.com/the-list/hao-zhang/" target="_blank">MIT TR35</a> (China) (2024),
                    and a recipient of the <a href="https://research.google/programs-and-events/ml-and-systems-award-recipients/" target="_blank">Google ML and Systems Award</a> (2025) and <a href="https://www.usenix.org/conference/osdi21/presentation/qiao" target="_blank">OSDI Best Paper Award</a> (2021).
                    My work on <a href="https://github.com/hao-ai-lab/FastVideo" target="_blank">FastVideo</a>, <a href="https://github.com/LLMServe/DistServe" target="_blank">DistServe</a>, and <a href="https://github.com/vllm-project/vllm" target="_blank">vLLM</a> has
                    reached millions of users.
                    Here is <Link href="/bio"> an extended Bio.</Link>
                </p>
                <p>
                    <b>Prospective students and postdocs</b>: I am recruiting new PhD students and postdocs. We also
                    have openings for MS/undergrad research interns.
                    Please check out <Link href="/prospective_student">this page to see how to get involved</Link>.
                </p>
            </div>

            <div className="mt-4 text-lg sm:text-xl space-y-2">
                <h1>Research</h1>
                <p>
                    I study the intersection area of <b>machine learning</b> and <b>systems</b>.
                    I am equally interested in designing strong, efficient, and secure machine learning models and
                    algorithms, and in building scalable, practical distributed systems that can support real-world
                    machine learning workloads.
                </p>
                <p>
                    <a href="https://hao-ai-lab.github.io/home/" target="_blank">Our Lab</a> (<a
                    href="https://x.com/haoailab" title="twitter" target="_blank" rel="noopener noreferrer"
                    style={{display: 'inline-block'}}><FaXTwitter
                    style={{display: 'inline-block'}}></FaXTwitter><span>@haoailab</span></a>) develops open models,
                    algorithms, and systems to democratize the access of large models. 
                    
                    {/* I also co-founded and run the
                    non-profit <a href="https://lmsys.org/" target="_blank">LMSYS
                    Org</a> (<a href="https://twitter.com/lmsysorg" title="twitter" target="_blank"
                                rel="noopener noreferrer" style={{display: 'inline-block'}}><FaXTwitter
                    style={{display: 'inline-block'}}></FaXTwitter><span>@lmsysorg</span></a>) which maintains the
                    popular LLM evaluation <a href="https://arena.lmsys.org/" target="_blank">Chatbot Arena</a> and the
                    widely adopted LLM serving framework <a href="https://github.com/vllm-project/vllm"
                                                            target="_blank">vLLM</a>. */}
                </p>
                <h2>Current Projects</h2>
                <CurrentProjects />

                <p>Some of my research have been actively developed and maintained as open source software:</p>
                <ProjectList/>

            </div>

            <Students/>


        <Talks />


        <Experience />

        </Layout>
    );
}

function ProjectList() {
    const activeProjects = projects.filter(project => project.active);
    const previousProjects = projects.filter(project => !project.active);

    return (
        <div>
            <ul className="list-no-bullet">
                {activeProjects.map((project) => (
                    <li key={project.name}>
                        <b><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></b>: {project.description}.
                    </li>
                ))}
            </ul>
            
            {previousProjects.length > 0 && (
                <div className="mt-2">
                    <p className="mb-2">Some previous projects:</p>
                    <ul className="list-no-bullet">
                        {previousProjects.map((project) => (
                            <li key={project.name}>
                                <b><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></b>: {project.description}.
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function Experience() {
    return (
        <div className="mt-6 text-lg sm:text-xl space-y-2">
            <h1>Experience</h1>
            <ul className="list-no-bullet">
            {experiences.map((experience) => (
                <li key={experience.job}>
                    {experience.job}, {experience.institute}, {experience.start} - {experience.end}
                </li>
            ))}
            </ul>
        </div>
    );
}

function Talks() {

  const latestTalks = talks
    .sort((a, b) => {
      // Convert the date strings to date objects for comparison
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return dateB - dateA; // Sort in descending order
    })
    .slice(0, 20);

  return (
    <div className="mt-6 text-xl space-y-2">
      <h1>Recent Talks</h1>
      <ul className="list-no-bullet">
        {latestTalks.map((talk, index) => (
          <li key={index} className="grid grid-cols-[auto_1fr] gap-4 items-start">
            <span className="text-right min-w-[80px]">{talk.date}</span>
            <span>
              {talk.link ? (
                <a href={talk.link} target="_blank" rel="noopener noreferrer">
                  {talk.type} at {talk.venue}
                </a>
              ) : (
                `${talk.type} at ${talk.venue}`
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Students() {
    const sortByLastName = (a, b) => {
      const lastNameA = a.name.split(' ').pop().toLowerCase();
      const lastNameB = b.name.split(' ').pop().toLowerCase();
      return lastNameA < lastNameB ? -1 : lastNameA > lastNameB ? 1 : 0;
    };
    const sortByEndDate = (a, b) => {
      const endDateA = new Date(a.end.split('/').reverse().join('-'));
      const endDateB = new Date(b.end.split('/').reverse().join('-'));
      return endDateB - endDateA; // Sort in descending order (latest first)
    };

    const current_students = students.filter(student =>
      student.end.toLowerCase() === 'present'
    ).sort(sortByLastName)

    // Get today's date, reset hours to start of the day for accurate comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Filtering former students
    const former_students = students.filter(student => {
      if (student.end.toLowerCase() === 'present') {
        return false; // Exclude students who are currently active
      }
      // Convert end date string to Date object for comparison
      const endDate = new Date(student.end.split('/').reverse().join('-'));
      return endDate < today; // Include if end date is before today
    }).sort(sortByEndDate);

    return (

        // do some processing to filter current_phd_postdocs, current_ms_undergrad
        // do some processing to filter past_students
        <div className="mt-6 text-lg sm:text-xl space-y-2">
            <h1>Students and Postdocs</h1>
            <h2>Current Members</h2>
            <ul className="list-no-bullet">
                {current_students.map((student) => (
                    <li key={student.name}>
                        {student.url ? (
                            <a href={student.url} target="_blank" rel="noopener noreferrer">
                                {student.name}
                            </a>
                        ) : (
                            `${student.name}`
                        )}, {student.category}
                        {student.rotation && " (Rotation)"}
                    </li>
                ))}
            </ul>

            <h2>Past Students</h2>
            <ul className="list-no-bullet">
                {former_students.map((student) => (
                    <li key={student.name}>
                        {student.url ? (
                            <a href={student.url} target="_blank" rel="noopener noreferrer">
                                {student.name}
                            </a>
                        ) : (
                            `${student.name}`
                        )}, {student.category}{" "}
                        {student.rotation && " (Rotation)"}
                         ({student.start.split('/')[1]}) {"->"} {student.placement}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CurrentProjects() {
    return (
        <ul className="list-no-bullet">
            {currentProjects.map((category, categoryIndex) => (
                <li key={categoryIndex}>
                    <b>{category.category}</b>: {category.projects
                        .filter(project => project.visible)
                        .map((project, projectIndex, visibleProjects) => (
                            <span key={projectIndex}>
                                <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                </a>
                                {project.papers && project.papers.length > 0 && (
                                    <span> [
                                        {project.papers.map((paper, paperIndex) => (
                                            <span key={paperIndex}>
                                                <a href={paper.paper_url} target="_blank" rel="noopener noreferrer">
                                                    {paper.venue}
                                                </a>
                                                {paperIndex < project.papers.length - 1 && ', '}
                                            </span>
                                        ))}
                                    ]</span>
                                )}
                                {projectIndex < visibleProjects.length - 1 && ', '}
                            </span>
                        ))
                    }
                </li>
            ))}
        </ul>
    );
}