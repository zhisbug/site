import Layout from '../components/layout';
import React, { useState } from "react";
import {FaGithub, FaFileAlt, FaGoogle, FaTwitter, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import projects from "../content/projects.json";
import Link from "next/link";
import experiences from "@/content/experience.json";
import talks from "@/content/talks.json"
import students from "@/content/students.json"


export default function Home() {
    return (
        <Layout>
        <div className="max-w-6xl mx-auto px-4 mt-4 flex flex-col sm:flex-row justify-center items-center">
            <div className="mb-6 sm:mb-6 sm:mr-24">
                <img src="/hao-2022.png" alt="Hao Zhang" className="w-64 md:w-72"/>
            </div>
            <div className="leading-snug sm:ml-24">
                <h1 className="text-4xl font-bold mb-4">Hao Zhang</h1>
                <p className="text-xl mt-2">Assistant Professor</p>
                <p className="text-xl mt-2"><a href="https://datascience.ucsd.edu/" target="_blank">HDSI</a>, <a href="https://cse.ucsd.edu/" target="_blank">CSE</a> (affiliate)</p>
                <p className="text-xl mt-2 mb-4"><a href="https://ucsd.edu/" target="_blank">UC San Diego</a> </p>
                <p className="text-xl mt-2 inline-block mb-4">Email: haozhang AT ucsd.edu</p>

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
                    <a href="https://www.linkedin.com/in/hao-zhang-05728576/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="fa-icon"></FaLinkedin>
                    </a>
                </div>
            </div>
        </div>

            <div className="mt-8 text-xl space-y-2">
                <p>
                    I am an Assistant Professor at <a href="https://datascience.ucsd.edu/" target="_blank">Halıcıoğlu
                    Data Science Institute</a> and <a href="https://cse.ucsd.edu/" target="_blank">Department of
                    Computer Science and Engineering</a> (affiliate) at <a href="https://ucsd.edu/" target="_blank">UC
                    San Diego</a>.
                    I lead the <a href="https://hao-ai-lab.github.io/home/" target="_blank">Hao AI Lab</a> at UCSD. I
                    cofounded <a href="https://lmnet.ai/" target="_blank">LMNet.ai</a> (2023), and we have joined force
                    with <a href="https://www.snowflake.com/en/" target="_blank">Snowflake</a> since November 2023.
                    During 2016 - 2021, I worked for the ML platform startup <a href="https://www.petuum.com/"
                                                                                target="_blank">Petuum Inc</a>.
                    Here is <Link href="/bio"> a short Bio.</Link>
                </p>
                <p>
                    <b>Prospective students and postdocs</b>: I am recruiting new PhD students and postdocs. We also
                    have openings for MS/undergrad research interns.
                    Please check out <Link href="/prospective_student">this page to see how to get involved</Link>.
                </p>
            </div>

            <div className="mt-4 text-xl space-y-2">
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
                    algorithms, and systems to democratize the access of large models. I also co-founded and run the
                    non-profit <a href="https://lmsys.org/" target="_blank">LMSYS
                    Org</a> (<a href="https://twitter.com/lmsysorg" title="twitter" target="_blank"
                                rel="noopener noreferrer" style={{display: 'inline-block'}}><FaXTwitter
                    style={{display: 'inline-block'}}></FaXTwitter><span>@lmsysorg</span></a>) which maintains the
                    popular LLM evaluation <a href="https://arena.lmsys.org/" target="_blank">Chatbot Arena</a> and the
                    widely adopted LLM serving framework <a href="https://github.com/vllm-project/vllm"
                                                            target="_blank">vLLM</a>.
                </p>
                <h2>Current Projects</h2>
                {/*<p>*/}
                {/*    <span style={{color: 'red'}}>News:</span> In 2024, we have 1 ICLR, 6 ICML, 1 OSDI, 1 COLM, 1 ACL*/}
                {/*    papers.*/}
                {/*</p>*/}
                <ul className="list-no-bullet">
                    <li><b>LLM inference and serving systems</b>: <a href="https://github.com/LLMServe/DistServe"
                                                                     target="_blank">DistServe</a> [<a
                        href="https://arxiv.org/pdf/2401.09670.pdf" target="_blank">OSDI'24</a>], <a
                        href="https://github.com/hao-ai-lab/MuxServe" target="_blank">MuxServe</a> [<a
                        href="https://arxiv.org/pdf/2404.02015" target="_blank">ICML'24</a>], <a
                        href="https://github.com/vllm-project/vllm" target="_blank">vLLM</a> [<a
                        href="https://arxiv.org/pdf/2309.06180.pdf" target="_blank">SOSP'23</a>]
                    </li>
                    <li><b>Efficient ML architectures and algorithms</b>: <a
                        href="https://github.com/hao-ai-lab/Consistency_LLM" target="_blank">Consistency LLM</a> [<a
                        href="https://arxiv.org/pdf/2403.00835.pdf" target="_blank">ICML'24</a>], OSD [<a
                        href="https://arxiv.org/pdf/2310.07177.pdf" target="_blank">ICML'24</a>], <a
                        href="https://github.com/hao-ai-lab/LookaheadDecoding" target="_blank">Lookahead
                        Decoding</a> [<a href="https://arxiv.org/pdf/2402.02057.pdf" target="_blank">ICML'24</a>]
                    </li>
                    <li><b>Open data, model, and evals</b>: <a href="https://arena.lmsys.org/" target="_blank">Chatbot
                        Arena</a> [<a href="https://arxiv.org/pdf/2403.04132.pdf" target="_blank">ICML'24</a>], <a
                        href="https://huggingface.co/datasets/lmsys/lmsys-chat-1m" target="_blank">LMSYS-Chat-1M</a> [<a
                        href="https://arxiv.org/pdf/2309.11998.pdf" target="_blank">ICLR'24</a>], <a
                        href="https://lmsys.org/blog/2023-03-30-vicuna/" target="_blank">Vicuna</a>, <a
                        href="https://huggingface.co/spaces/lmsys/mt-bench" target="_blank">MT-bench</a> [<a
                        href="https://arxiv.org/pdf/2306.05685.pdf" target="_blank">NeurIPS'23</a>]
                    </li>
                    {/*<li><b>Secure inference</b>:*/}
                    {/*    <a href="https://github.com/DachengLi1/MPCFormer" target="_blank">MPCFormer</a> <a href="https://arxiv.org/abs/2211.01452" target="_blank">[ICLR'23]</a>*/}
                    {/*</li>*/}
                    <li><b>Model-parallel ML Systems</b>: <a href="https://github.com/RulinShao/LightSeq"
                                                             target="_blank">LightSeq</a> [<a
                        href="https://arxiv.org/pdf/2310.03294.pdf" target="_blank">COLM'24</a>], <a
                        href="https://github.com/alpa-projects/alpa" target="_blank">Alpa</a> [<a
                        href="https://arxiv.org/abs/2201.12023" target="_blank">OSDI'22</a>, <a
                        href="https://arxiv.org/abs/2211.05322" target="_blank">MLSys'23</a>]
                    </li>
                </ul>
                {/*<h2 className="text-2xl font-semibold mb-4">Previous Projects</h2>*/}
                {/*   <ul className="list-no-bullet">*/}
                {/*       <li><b>Automatic ML parallelization and scheduling</b>: <a href="https://github.com/petuum/autodist" target="_blank">AutoSync</a> [<a href="https://proceedings.neurips.cc/paper/2020/file/0a2298a72858d90d5c4b4fee954b6896-Paper.pdf" target="_blank">NeurIPS'20</a>], <a href="https://github.com/petuum/adaptdl" target="_blank">Pollux</a> [<a href="https://arxiv.org/abs/2008.12260" target="_blank">OSDI'21</a>]</li>*/}
                {/*       <li><b>Systems for dynamic NNs</b>: <a href="https://github.com/zhisbug/Cavs" target="_blank">Cavs</a> [<a href="https://www.usenix.org/conference/atc18/presentation/xu-shizen" target="_blank">ATC'17</a>]</li>*/}
                {/*       <li><b>Data-parallel training systems</b>: <a href="https://github.com/sailing-pmls/pmls-caffe" target="_blank">Poseidon</a> [<a href="https://www.usenix.org/system/files/conference/atc17/atc17-zhang.pdf" target="_blank">ATC'17</a>], <a href="https://github.com/cuihenggang/geeps" target="_blank">GeePS</a> [<a href="https://cuihenggang.github.io/archive/paper/%5Beurosys16%5Dgeeps.pdf" target="_blank">EuroSys'16</a>], Staleness [<a href="https://arxiv.org/abs/1810.03264" target="_blank">ICLR'18</a>]</li>*/}
                {/*   </ul>*/}

                <p>Some of my research have been developed and maintained as open source software:</p>
                <ProjectList/>

            </div>

            <Students/>
            {/*/!* Recent Talks *!/*/}
            {/*<div className="mt-12">*/}
        {/*    <h2>Recent Talks</h2>*/}
        {/*    <ul className="list-disc pl-5">*/}
        {/*        <li>Talk 1: Description or link to slides/resources.</li>*/}
        {/*        <li>Talk 2: Description or link to slides/resources.</li>*/}
        {/*        /!* ... *!/*/}
        {/*    </ul>*/}
        {/*</div>*/}
        <Talks />

        {/*/!* Recent Services *!/*/}
        {/*<div className="mt-12">*/}
        {/*    <h2>Recent Services</h2>*/}
        {/*    <ul className="list-disc pl-5">*/}
        {/*        <li>Service 1: Description or the nature of the service.</li>*/}
        {/*        <li>Service 2: Description or the nature of the service.</li>*/}
        {/*        /!* ... *!/*/}
        {/*    </ul>*/}
        {/*</div>*/}

        <Experience />

        </Layout>
    );
}

function ProjectList() {
    return (
        <ul className="list-no-bullet">
            {projects.map((project) => (
                <li key={project.name}>
                    <b><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></b>: {project.description}.
                </li>
            ))}
        </ul>
    );
}

function Experience() {
    return (
        <div className="mt-6 text-xl space-y-2">
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
        {talks.map((talk, index) => (
          <li key={index}>
             <span className="mr-4">{talk.date}</span>
            {talk.link ? (
              <a href={talk.link} target="_blank" rel="noopener noreferrer">
                {talk.type} at {talk.venue}
              </a>
            ) : (
              `${talk.type} at ${talk.venue}`
            )}
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
      return endDateA - endDateB; // Sort in ascending order
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
        <div className="mt-6 text-xl space-y-2">
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

            <h2>Alumni</h2>
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