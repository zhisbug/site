import Layout from '../components/layout';
import React from "react";

export default function prospective_student() {
    return (
        <Layout>

        <div className="mt-4 text-xl space-y-2">
            <h1>Prospective Students</h1>
            <p>Thank you for your interest in my research and my group at UC San Diego.
                I am actively looking for self-motivated students and postdocs.
            I normally recruit 2-3 new PhD students every admission cycle.
            </p>

            <p>
                👉If you are interested in joining my group, please first <a
                    href="https://forms.gle/aFR5wguTJTM5WE9BA" target="_blank"><b>*fill out this form*</b></a>.
            </p>
            <p>
                <span className="font-semibold text-red-700">There is no need to send me an email to inquire about your application.</span> Please read the following instructions on how to apply to the related PhD programs at UCSD.
            </p>


            <h2>Prospective postdocs</h2>
            <p>
                I am actively seeking for 1 postdoc. Applicants are expected to have a prior publication record in top-tier venues
                in machine learning (NeurIPS, ICML, ICLR, etc.) or systems (OSDI, SOSP, NSDI, ATC, MLSys, etc.), or have
                strong engineering experiences in developing machine learning system software.
                If you are interested in working with me, please <a
                    href="https://forms.gle/aFR5wguTJTM5WE9BA" target="_blank"><b>*fill out this form*</b></a> and drop me an email.
            </p>

            <h2>Prospective PhD Students</h2>
                <p>
                    I mainly take PhD students from <a href="https://datascience.ucsd.edu/" target="_blank" rel="noopener noreferrer">HDSI</a>, <a href="https://cse.ucsd.edu/" target="_blank" rel="noopener noreferrer">CSE</a>, or other related departments at UCSD.
                </p>
                <ul className="list-bullet">
                    <li>To make sure I see your application, it is <u>important to select my name as one of potential advisors</u> in your application.</li>
                    <li>Please express your interest in working with me in your personal statement.</li>
                </ul>
                <p>
                    There is no need to send me an email. Just <a href="https://forms.gle/aFR5wguTJTM5WE9BA" target="_blank"><b>*fill out this form*</b></a>,
                    and I will note your interest and make sure you submit your application through UCSD admissions.
                </p>


            <h2>Current or admitted UCSD undergrad/MS students</h2>
            <p>
                The best way to work with my lab is to <b>*START NOW*</b>: contribute to our open-source projects and engage with the community.
                For example, join the <a href="https://fastvideo.slack.com/join/shared_invite/zt-3f4lao1uq-u~Ipx6Lt4J27AlD2y~IdLQ#/shared-invite/email" target="_blank">FastVideo</a> Slack, find tickets, submit pull requests, and join the weekly community meeting.
            </p>    
            <p>
                This is the main way I evaluate potential student researchers. In this area, your work speaks for itself.
                Students who show strong building ability through meaningful projects or visible open-source contributions will naturally stand out, and we will reach out.
            </p>
            <p>
                If you are interested in working with my lab, please <a href="https://forms.gle/aFR5wguTJTM5WE9BA" target="_blank"><b>*fill out this form*</b></a> if you have demonstrated building ability, for example through your own projects or meaningful contributions to open-source projects, including but not limited to our lab{"'"}s projects. <b>There is no need to send me an email or come to my office.</b> I do not review interest emails as part of the selection process.
            </p>


            <h2>Visiting scholars and research interns</h2>
            <p>
                I regularly take external, self-funded visiting scholars (graduate/undergrad students, etc) and research interns.
                Visitors are expected to stay for <b>at least 6 months</b>.
                Please contact me and <a href="https://forms.gle/aFR5wguTJTM5WE9BA" target="_blank"><b>*fill out this form*</b></a>.
                Make sure you indicate the anticipated start and end time (Q8 and Q9).
            </p>
        </div>
        </Layout>
    );
}
