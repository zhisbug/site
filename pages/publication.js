import Layout from '../components/layout';
import React from "react";
import {FaGithub, FaVideo, FaExternalLinkAlt, FaGoogle, FaTwitter, FaLinkedin} from "react-icons/fa";
import { useState } from 'react';
import publications from "@/content/publications.json";

export default function publication() {
    return (
        <Layout>
            <div className="mt-4 text-xl space-y-2">
                <h1>Publications</h1>
                <p>* indicates equal contribution, † indicates alphabetical order.</p>
                <DisplayPublication />
            </div>
        </Layout>
    );
}

function DisplayPublication() {
  // Initial state set to 'selected'
  const [selectedTag, setSelectedTag] = useState('Selected');

  // Extracting unique tags
  const allTags = [...new Set(publications.flatMap(pub => pub.tag.split(', ')))];

  // Filtering publications based on selected tag and sorting them by date
  const filteredPublications = publications
    .filter(pub => selectedTag === 'all-by-date' || pub.tag.includes(selectedTag))
      .sort((a, b) => {
          const [monthA, yearA] = a.date.split('/').map(Number);
          const [monthB, yearB] = b.date.split('/').map(Number);

          if (yearA !== yearB) return yearB - yearA;  // Compare years
          return monthB - monthA; // Compare months if years are the same
        });

  const buttonOrder = ["ML Systems", "Large Language Models", "Evals", "Diffusion Models", "Scalable ML", "Agents", "ML Security", "Large-scale ML Applications"];

  return (
    <div>
      {/* Render tags as buttons */}
        <div className="mb-4">

            <div className="mb-2 flex space-x-2">
                <span className="font-semibold">Default:</span>
                <div className="flex-grow flex space-x-2">
                    <button className={`pub-button ${selectedTag === 'Selected' ? 'pub-button-selected' : ''}`} onClick={() => setSelectedTag('Selected')}>[Selected]</button>,
                    <button className={`pub-button ${selectedTag === 'all-by-date' ? 'pub-button-selected' : ''}`} onClick={() => setSelectedTag('all-by-date')}>[All by Date]</button>,
                    <a href="https://scholar.google.com/citations?user=H1d4BS8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="pub-button">[Google Scholar]</a>
                </div>
            </div>

            <div className="mb-4 flex space-x-2">
                <span className="inline-block font-semibold">Topics:</span>
                <div className="flex-grow flex flex-wrap space-x-2">
                    {buttonOrder.map((tag, index) => (
                        allTags.includes(tag) && (
                            <React.Fragment key={tag}>
                                <button className={`pub-button ${selectedTag === tag ? 'pub-button-selected' : ''}`} onClick={() => setSelectedTag(tag)}>
                                    [{tag}]
                                </button>
                                {index !== buttonOrder.length - 1 && ","}
                            </React.Fragment>
                        )
                    ))}
                </div>
            </div>

        </div>

      {/* Render the filtered publications */}
      <div>
          <ul className="list-bullet">
            {filteredPublications.map(pub => (
              <li className="publication" key={pub.title}>
                  <div className="publication-title">
                      <a href={pub.pdf} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                  </div>
                    <div className="publication-author">
                        {pub.authors}
                    </div>
                    <div className="publication-venue">
                      {pub.venue}
                        {pub.award && (<span className="text-red-500">
                                 &nbsp;({pub.award})
                            </span>
                        )}
                    </div >
                    <div className="publication-links">
                      {pub.code && <a href={pub.code} target="_blank" rel="noopener noreferrer" className="publication-link"><FaGithub className="pub-fa-icon" />code</a>}
                      {pub.project && <a href={pub.project} target="_blank" rel="noopener noreferrer" className="publication-link"><FaExternalLinkAlt className="pub-fa-icon" />project</a>}
                      {pub.presentation && <a href={pub.presentation} target="_blank" rel="noopener noreferrer" className="publication-link"><FaVideo className="pub-fa-icon" />presentation</a>}
                    </div>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}
