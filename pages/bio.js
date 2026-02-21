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
                    <L href="https://ucsd.edu/">UC San Diego</L>.
                    {' '}Before joining UCSD, Hao was a postdoctoral researcher at{' '}
                    <L href="https://berkeley.edu/">UC Berkeley</L> working with{' '}
                    <L href="https://people.eecs.berkeley.edu/~istoica/">Ion Stoica</L> (2021 - 2023).
                    {' '}Hao completed his Ph.D. in Computer Science at{' '}
                    <L href="https://www.cmu.edu/">Carnegie Mellon University</L> with{' '}
                    <L href="https://www.cs.cmu.edu/~epxing/">Eric Xing</L> (2014 - 2020).
                    {' '}During his PhD, Hao took a leave to work for the ML platform startup{' '}
                    <L href="https://www.petuum.com/">Petuum Inc</L> (2016 - 2021).
                    {' '}Hao{"'"}s research interest is in the intersection of machine learning and systems.
                    {' '}Hao{"'"}s work includes{' '}
                    <L href="https://github.com/hao-ai-lab/FastVideo">FastVideo</L>,{' '}
                    <L href="https://github.com/LLMServe/DistServe">DistServe</L>,{' '}
                    <L href="https://github.com/vllm-project/vllm">vLLM</L>,{' '}
                    <L href="https://arena.ai/">Chatbot Arena</L>,{' '}
                    <L href="https://lmsys.org/blog/2023-03-30-vicuna/">Vicuna</L>,{' '}
                    <L href="https://github.com/alpa-projects/alpa">Alpa</L>,{' '}
                    <L href="https://poseidon-release.readthedocs.io/">Poseidon</L>, and{' '}
                    <L href="https://www.petuum.com/">Petuum</L>.
                    {' '}Hao{"'"}s research has been recognized with a{' '}
                    <L href="https://sloan.org/fellowships">Sloan Research Fellowship</L> (2026),
                    {' '}a <L href="https://research.google/programs-and-events/ml-and-systems-award-recipients/">Google ML and Systems junior faculty award</L> (2025),
                    {' '}the <L href="https://www.usenix.org/conference/osdi21/presentation/qiao">Jay Lepreau Best Paper Award at OSDI{"'"}21</L>,
                    {' '}and an NVIDIA Pioneer Research Award at NeurIPS{"'"}17.
                    {' '}Hao was nominated for <L href="https://www.innovatorsunder35.com/the-list/hao-zhang/">MIT TR35</L> (China) 2024.
                    {' '}Hao also cofounded the company LMNet.ai (2023)
                    {' '}which was acquired by <L href="https://www.snowflake.com/">Snowflake</L>,
                    {' '}and the nonprofit <L href="https://lmsys.org/">LMSYS Org</L> (2023) which maintains many popular open models, evaluation, and systems.
                </p>
            </div>
        </Layout>
    );
}
