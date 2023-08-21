import Layout from '../components/layout';
import React, { useState } from "react";
import {FaGithub, FaFileAlt, FaGoogle, FaTwitter, FaLinkedin} from "react-icons/fa";
import projects from "../content/projects.json";
import Link from "next/link";
import experiences from "@/content/experience.json";
import talks from "@/content/talks.json"


export default function Home() {
    return (
        <Layout>
        <div className="max-w-6xl mx-auto px-4 mt-4 flex flex-col sm:flex-row justify-center items-center">
            <div className="mb-6 sm:mb-6 sm:mr-24">
                <img src="/~haozhang/hao-2022.png" alt="Hao Zhang" className="w-64 md:w-72"/>
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
                    <a href="https://twitter.com/haozhangml" title="Twitter" target="_blank" rel="noopener noreferrer">
                        <FaTwitter  className="fa-icon"></FaTwitter>
                    </a>
                    <a href="https://www.linkedin.com/in/hao-zhang-05728576/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="fa-icon"></FaLinkedin>
                    </a>
                </div>
            </div>
        </div>

        <div className="mt-8 text-xl space-y-2">
            <p>
              I am an Assistant Professor at <a href="https://datascience.ucsd.edu/" target="_blank">Halıcıoğlu Data Science Institute</a> and <a href="https://cse.ucsd.edu/" target="_blank">Department of Computer Science and Engineering</a> (affiliate) at <a href="https://ucsd.edu/" target="_blank">UC San Diego</a>.
              Here is <Link href="/bio"> a short Bio.</Link>
            </p>
            <p>
                <b>Prospective students and postdocs</b>: I am recruiting new PhD students and postdocs. We also have openings for MS/undergrad research interns.
                Please check out <Link href="/prospective_student">this page to see how to get involved</Link>.
            </p>
        </div>

        <div className="mt-4 text-xl space-y-2">
            <h1>Research</h1>
            <p>
              I study the intersection area of <b>machine learning</b> and <b>systems</b>.
              I am equally interested in designing strong, efficient, and secure machine learning models and algorithms, and in building scalable, practical distributed systems that can support real-world machine learning workloads.
            </p>
            <p>
              Recently I develop open models and systems to democratize the access of Large Language Models (LLMs).
                I co-founded <b>LMSYS Org</b> and some of our latest results are updated at <a href="https://lmsys.org/" target="_blank">lmsys.org</a> (<a href="https://twitter.com/lmsysorg" title="twitter" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}><FaTwitter style={{display: 'inline-block'}}></FaTwitter><span>@lmsysorg</span></a>).
            </p>
            <h2>Current Projects</h2>
                <ul className="list-no-bullet">
                    <li><b>LLM inference and serving systems</b>: <a href="https://github.com/alpa-projects/mms" target="_blank">AlpaServe</a>  [<a href="https://arxiv.org/abs/2302.11665" target="_blank">OSDI'23</a>], <a href="https://github.com/vllm-project/vllm" target="_blank">vLLM</a> [SOSP'23]</li>
                    <li><b>Model-parallel ML Systems</b>: <a href="https://github.com/alpa-projects/alpa" target="_blank">Alpa</a> [<a href="https://arxiv.org/abs/2201.12023" target="_blank">OSDI'22</a>, <a href="https://arxiv.org/abs/2211.05322" target="_blank">MLSys'23</a>],  <a href="https://github.com/DachengLi1/AMP" target="_blank">AMP</a> [<a href="https://arxiv.org/abs/2210.07297" target="_blank">NeurIPS'22</a>], <a href="https://github.com/zhuohan123/terapipe" target="_blank">Terapipe</a> [<a href="https://arxiv.org/abs/2102.07988" target="_blank">ICML'22</a>]</li>
                    <li><b>Open-source LLMs and evaluation</b>: <a href="https://lmsys.org/blog/2023-03-30-vicuna/" target="_blank">Vicuna</a>, <a href="https://lmsys.org/blog/2023-06-29-longchat/" target="_blank">LongChat</a>, <a href="https://huggingface.co/spaces/lmsys/mt-bench" target="_blank">MT-bench</a>, <a href="https://lmsys.org/blog/2023-05-03-arena/" target="_blank">Chatbot Arena</a> [<a href="https://arxiv.org/abs/2306.05685" target="_blank">Preprint'23</a>]</li>
                    <li><b>Secure inference</b>: <a href="https://github.com/DachengLi1/MPCFormer" target="_blank">MPCFormer</a> <a href="https://arxiv.org/abs/2211.01452" target="_blank">[ICLR'23]</a></li>
                </ul>
             {/*<h2 className="text-2xl font-semibold mb-4">Previous Projects</h2>*/}
             {/*   <ul className="list-no-bullet">*/}
             {/*       <li><b>Automatic ML parallelization and scheduling</b>: <a href="https://github.com/petuum/autodist" target="_blank">AutoSync</a> [<a href="https://proceedings.neurips.cc/paper/2020/file/0a2298a72858d90d5c4b4fee954b6896-Paper.pdf" target="_blank">NeurIPS'20</a>], <a href="https://github.com/petuum/adaptdl" target="_blank">Pollux</a> [<a href="https://arxiv.org/abs/2008.12260" target="_blank">OSDI'21</a>]</li>*/}
             {/*       <li><b>Systems for dynamic NNs</b>: <a href="https://github.com/zhisbug/Cavs" target="_blank">Cavs</a> [<a href="https://www.usenix.org/conference/atc18/presentation/xu-shizen" target="_blank">ATC'17</a>]</li>*/}
             {/*       <li><b>Data-parallel training systems</b>: <a href="https://github.com/sailing-pmls/pmls-caffe" target="_blank">Poseidon</a> [<a href="https://www.usenix.org/system/files/conference/atc17/atc17-zhang.pdf" target="_blank">ATC'17</a>], <a href="https://github.com/cuihenggang/geeps" target="_blank">GeePS</a> [<a href="https://cuihenggang.github.io/archive/paper/%5Beurosys16%5Dgeeps.pdf" target="_blank">EuroSys'16</a>], Staleness [<a href="https://arxiv.org/abs/1810.03264" target="_blank">ICLR'18</a>]</li>*/}
             {/*   </ul>*/}

            <p>Some of my research have been developed and maintained as open source software:</p>
                <ProjectList />

        </div>

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