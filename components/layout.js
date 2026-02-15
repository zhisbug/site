import Link from 'next/link';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div className="flex flex-col">
        <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hao Zhang - Assistant Professor at UC San Diego</title>
        <meta name="description" content="Hao Zhang is an Assistant Professor at UC San Diego (HDSI & CSE). His research focuses on machine learning systems, large language models, and distributed systems. He leads the Hao AI Lab." />
        <meta name="keywords" content="Hao Zhang, UC San Diego, UCSD, machine learning, AI, large language models, LLM, distributed systems, assistant professor, Hao AI Lab, HDSI, CSE" />
        <link rel="canonical" href="https://haozhang.ai/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hao Zhang - Assistant Professor at UC San Diego" />
        <meta property="og:description" content="Hao Zhang is an Assistant Professor at UC San Diego (HDSI & CSE). Research in machine learning systems, large language models, and distributed systems." />
        <meta property="og:url" content="https://haozhang.ai/" />
        <meta property="og:site_name" content="Hao Zhang" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@haozhangml" />
        <meta name="twitter:title" content="Hao Zhang - Assistant Professor at UC San Diego" />
        <meta name="twitter:description" content="Research in machine learning systems, large language models, and distributed systems at UC San Diego." />

        <link rel="icon" href="https://datascience.ucsd.edu/wp-content/uploads/fbrfg/favicon-32x32.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4N7DTXEEJH" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4N7DTXEEJH');
          `
        }} />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hao Zhang",
              "url": "https://haozhang.ai",
              "jobTitle": "Assistant Professor",
              "worksFor": {
                "@type": "Organization",
                "name": "UC San Diego",
                "url": "https://ucsd.edu"
              },
              "affiliation": [
                {
                  "@type": "Organization",
                  "name": "Halıcıoğlu Data Science Institute",
                  "url": "https://datascience.ucsd.edu"
                },
                {
                  "@type": "Organization",
                  "name": "Department of Computer Science and Engineering",
                  "url": "https://cse.ucsd.edu"
                }
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Carnegie Mellon University"
              },
              "sameAs": [
                "https://scholar.google.com/citations?user=H1d4BS8AAAAJ",
                "https://github.com/zhisbug",
                "https://x.com/haozhangml",
                "https://www.linkedin.com/in/haozhangml/",
                "https://hao-ai-lab.github.io/home/"
              ]
            })
          }}
        />
      </Head>
      <header className="bg-nav-blue p-4 shadow sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-2 sm:px-4 flex justify-center items-center text-base sm:text-xl md:text-2xl">
          <nav>
              <ul className="flex space-x-4 sm:space-x-8 md:space-x-16">
                  <li><Link href="/" className="text-white hover:underline">Home</Link></li>
                  <li><Link href="/publication" className="text-white hover:underline">Publications</Link></li>
                  <li><Link href="/teaching" className="text-white hover:underline">Teaching</Link></li>
                  <li><Link href="https://hao-ai-lab.github.io/" className="text-white hover:underline">Group</Link></li>
                  {/*<li><a href="/awards" className="text-white hover:underline">Awards</a></li>*/}
              </ul>
          </nav>
        </div>
      </header>
        <main className="flex-1 items-center justify-center p-2 sm:p-4 pb-12">
        <div className="container max-w-6xl mx-auto px-2 sm:px-4">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
