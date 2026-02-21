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
                strong motivation, commitment, and building ability.
            </p>

            <p>
                👉If you are interested in joining my group, I'd recommend that you first <a
                    href="https://forms.cloud.microsoft/r/RYpEJHqJgs" target="_blank"><b>*fill out this form*</b></a>.
            </p>
            <p>
                Please read the following instructions on how to apply to the related PhD programs at UCSD and how to
                get in touch with me.
            </p>


            <h2>Prospective postdocs</h2>
            <p>
                I am seeking 1-2 postdocs in the 2025-2026 cycle. Applicants are expected to have a prior publication record in top-tier venues
                in machine learning (NeurIPS, ICML, ICLR, etc.) or systems (OSDI, SOSP, NSDI, ATC, MLSys, etc.), or have
                strong engineering experiences in developing machine learning system software.
                If you are interested in working with me, please <a
                    href="https://forms.cloud.microsoft/r/RYpEJHqJgs" target="_blank"><b>*fill out this form*</b></a> and drop me an email.
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
                    I am happy to receive emails, but I am unable to respond to them all due to the high volume.
                    It's better to <a href="https://forms.cloud.microsoft/r/RYpEJHqJgs" target="_blank"><b>*fill out this form*</b></a> than dropping me an email,
                    so I can get to know you better and see if we are a good match. Thank you!
                </p>


            <h2>Current or admitted UCSD undergrad/MS students</h2>
            <p>
                The best way to work with my lab is to <b>*start now*</b>: pick up issues and tickets in our lab{"'"}s open-source projects and engage with the community.
                For example, join the <a href="https://fastvideo.slack.com/join/shared_invite/zt-3f4lao1uq-u~Ipx6Lt4J27AlD2y~IdLQ#/shared-invite/email" target="_blank">FastVideo</a> Slack and talk with core contributors, find tickets, submit pull requests, and join the weekly community meeting.
            </p>    
            <p>
                This is also a great way for you to explore whether this type of work excites you, and for us to get to know each other.
                Active contributors who make meaningful contributions will naturally stand out, and we will reach out.
            </p>
            <p>
                If you think this is something you are interested, you can also <a href="https://forms.cloud.microsoft/r/RYpEJHqJgs" target="_blank"><b>*fill out this form*</b></a> — <b>no need to send me an email or come to my office</b>. I review submissions on a biweekly basis.
            </p>


            <h2>Visiting scholars and research interns</h2>
            <p>
                I regularly take external, self-funded visiting scholars (graduate/undergrad students, etc) and research interns.
                Visitors are expected to stay for <b>at least 6 months</b>.
                Please contact me and <a href="https://forms.cloud.microsoft/r/RYpEJHqJgs" target="_blank"><b>*fill out this form*</b></a>.
                Make sure you indicate the anticipated start and end time (Q8 and Q9).
            </p>
        </div>
        </Layout>
    );
}
