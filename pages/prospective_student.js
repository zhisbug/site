import Layout from '../components/layout';
import React from "react";

export default function prospective_student() {
    return (
        <Layout>

        <div className="mt-4 text-xl space-y-2">
            <h1>Prospective Students</h1>
            <p>Thank you for your interest in my research and my group at UC San Diego.
                I am actively looking for self-motivated students and postdocs.
            I normally recruit 2-3 new PhD students every admission cycle. I actively take MS and undergrad research interns (UCSD or external) with
                strong or relevant research background throughput the academic year.
            </p>

            <p>
                👉If you are interested in joining my group, I'd recommend that you first <a
                    href="https://forms.office.com/r/AeDYXgDGc6" target="_blank"><b>*fill out this form*</b></a>.
                After submitting the form, please drop me an email (haozhang@ucsd.edu).
            </p>
            <p>
                Below are some helpful instructions on how to apply to the related PhD programs at UCSD and how to
                get in touch with me.
            </p>


            <h2>Prospective postdocs</h2>
            <p>
                I am seeking 1-2 postdocs in the 2023-2024 cycle. Applicants are expected to have a prior publication record in top-tier venues
                in machine learning (NeurIPS, ICML, ICLR, etc.) or systems (OSDI, SOSP, NSDI, ATC, MLSys, etc.), or have
                strong engineering experiences in developing machine learning system software.
                If you are interested in working with me, please <a
                    href="https://forms.office.com/r/AeDYXgDGc6" target="_blank"><b>*fill out this form*</b></a> and drop me an email.
            </p>

            <h2>Prospective PhD Students</h2>
                <p>
                    I take PhD students from <a href="https://datascience.ucsd.edu/" target="_blank" rel="noopener noreferrer">HDSI</a>, <a href="https://cse.ucsd.edu/" target="_blank" rel="noopener noreferrer">CSE</a>, <a href="https://www.ece.ucsd.edu/" target="_blank" rel="noopener noreferrer">ECE</a> or other related departments at UCSD.
                </p>
                <ul className="list-bullet">
                    <li>To make sure I see your application, select my name as one of potential advisors in your application.</li>
                    <li>For PhD applicants of CSE, ECE, and other departments, you may mark your preference on your UCSD Graduate Application by:
                        <ul className="list-bullet m-2">
                            <li>Marking "YES" to the question: "Are you interested in pursuing graduate work in a
                                Data Science-related subject?"
                            </li>
                            <li>Clicking the YES option pushes your application to HDSI faculty for consideration as
                                an applicant.
                            </li>
                        </ul>
                    </li>
                    <li>Please express your interest in working with me in your personal statement.</li>
                </ul>
                <p>
                    I am happy to receive emails from prospective PhD students, though I am unable to respond to them all.
                    It'd be good if you could <a href="https://forms.office.com/r/AeDYXgDGc6" target="_blank"><b>*fill out this form*</b></a> when dropping me an email,
                    so I can get to know you better and see if we are a good match. Thank you!
                </p>


            <h2>Current or admitted UCSD undergrad/MS students</h2>
            <p>
                I am happy to advise research projects in large-scale machine learning, distributed systems,
                Large Language Models, ML applications, or other related areas. I also welcome open-source enthusiasts
                to join my group and contribute to ongoing open-source development. If you are:
            </p>
                <ul className="list-bullet">
                    <li>
                        have a clear research objective and some initial ideas,
                    </li>
                    <li>
                        have relevant research or programming experiences in machine learning or systems, or strong math/ML background,
                    </li>
                    <li>
                        can devote significant time on the projects.
                    </li>
                </ul>
            <p>
                Please get in touch with me by <a href="https://forms.office.com/r/AeDYXgDGc6" target="_blank"><b>*filling out this form*</b></a> and sending me an email.
            </p>


            <h2>Visiting scholars and research interns</h2>
            <p>
                I regularly take external, self-funded visiting scholars (graduate/undergrad students, etc) and research interns.
                Visitors are expected to stay for <b>at least 6 months</b>.
                Please contact me and <a href="https://forms.office.com/r/AeDYXgDGc6" target="_blank"><b>*fill out this form*</b></a>.
                Make sure you indicate the anticipated start and end time (Q8 and Q9).
            </p>
        </div>
        </Layout>
    );
}
