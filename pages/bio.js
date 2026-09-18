import Layout from '../components/layout';

const L = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default function Bio() {
    return (
        <Layout>
            <div className="mt-4 text-lg sm:text-xl space-y-2">
                <h1>Bio</h1>
                <p>
                    Hao Zhang is an Assistant Professor in{' '}
                    <L href="https://datascience.ucsd.edu/">Halıcıoğlu Data Science Institute</L> and the{' '}
                    <L href="https://cse.ucsd.edu/">Department of Computer Science and Engineering</L> at{' '}
                    <L href="https://ucsd.edu/">UC San Diego</L>. Before joining UCSD, he was a postdoctoral researcher at{' '}
                    <L href="https://berkeley.edu/">UC Berkeley</L> working with{' '}
                    <L href="https://people.eecs.berkeley.edu/~istoica/">Ion Stoica</L> from 2021 to 2023. He completed his Ph.D. in Computer Science at{' '}
                    <L href="https://www.cmu.edu/">Carnegie Mellon University</L> with{' '}
                    <L href="https://www.cs.cmu.edu/~epxing/">Eric Xing</L> from 2014 to 2020. During his PhD, he took a leave to work at the ML platform startup{' '}
                    <L href="https://www.petuum.com/">Petuum Inc</L> from 2016 to 2021. His research lies at the intersection of machine learning and systems. His work includes{' '}
                    <L href="https://github.com/hao-ai-lab/FastVideo">FastVideo</L>,{' '}
                    <L href="https://github.com/LLMServe/DistServe">DistServe</L>,{' '}
                    <L href="https://github.com/vllm-project/vllm">vLLM</L>,{' '}
                    <L href="https://arena.ai/">Chatbot Arena</L>,{' '}
                    <L href="https://lmsys.org/blog/2023-03-30-vicuna/">Vicuna</L>,{' '}
                    <L href="https://github.com/alpa-projects/alpa">Alpa</L>,{' '}
                    <L href="https://poseidon-release.readthedocs.io/">Poseidon</L>, and{' '}
                    <L href="https://www.petuum.com/">Petuum</L>. His research has been recognized with a{' '}
                    <L href="https://sloan.org/fellowships">Sloan Research Fellowship</L> (2026),
                    {' '}an NSF CAREER Award (2026),
                    {' '}the <L href="https://www.eurosys.org/awards/test-of-time-award">EuroSys Test-of-Time Award</L> (2026),
                    {' '}a <L href="https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/ml-systems-junior-faculty-awards/">Google ML and Systems junior faculty award</L> (2025),
                    {' '}the <L href="https://www.usenix.org/conference/osdi21/presentation/qiao">Jay Lepreau Best Paper Award at OSDI{"'"}21</L>,
                    {' '}and an NVIDIA Pioneer Research Award at NeurIPS{"'"}17. He was nominated for{' '}
                    <L href="https://www.innovatorsunder35.com/the-list/hao-zhang/">MIT TR35</L> (China) in 2024. He joined{' '}
                    <L href="https://www.snowflake.com/">Snowflake</L> through acquihiring in 2023 and also co-founded the nonprofit{' '}
                    <L href="https://lmsys.org/">LMSYS Org</L>, which maintains many popular open models, evaluation platforms, and systems.
                </p>
            </div>
        </Layout>
    );
}
