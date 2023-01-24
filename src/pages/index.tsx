import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohit Midha Portfolio</title>
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">developedbyro</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-l" />
              </li>
              <li>
                <a href="" className="bg-gradient-to-r from-cyan-600 to-teal-600 px-4 py-2 ml-8 text-white rounded-xl">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}
