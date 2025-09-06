import Link from 'next/link';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div className="flex flex-col">
        <Head>
        <link rel="icon" href="https://datascience.ucsd.edu/wp-content/uploads/fbrfg/favicon-32x32.png" />
        <title>Hao Zhang</title>
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
