import { BsFillMoonStarsFill, BsCodeSlash, BsCode } from "react-icons/bs";
import { AiFillTwitterSquare, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BiSun } from "react-icons/bi";
import config from "../../portfolio.json";
import { useState } from "react";
import ExperienceCard from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [codeOpen, setCodeOpen] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-black min-h-screen">
        <section>
          <nav className="py-5 flex justify-between">
            <h1 className="text-xl font-mono px-10 dark:text-white">{config.name}</h1>
            <div className="flex items-center px-10">
              {darkMode ? (
                <BiSun className="cursor-pointer text-xl dark:text-white" onClick={() => setDarkMode(false)} />
              ) : (
                <BsFillMoonStarsFill
                  className="cursor-pointer text-lg dark:text-white"
                  onClick={() => setDarkMode(true)}
                />
              )}
            </div>
          </nav>
        </section>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center ">
          <section className="">
            <div className="text-center p-3">
              {codeOpen ? (
                <BsCodeSlash
                  className="cursor-pointer mx-auto text-9xl dark:text-white"
                  onClick={() => setCodeOpen(false)}
                />
              ) : (
                <BsCode className="cursor-pointer mx-auto text-9xl dark:text-white" onClick={() => setCodeOpen(true)} />
              )}
              <h1 className="text-5xl py-2 font-mono dark:text-white">{config.name}</h1>
              <h3 className="text-2xl py-2 font-mono text-gray-700 dark:text-slate-300">{config.tagline}</h3>
            </div>
            <div className="flex justify-center text-3xl gap-16 py-1 text-gray-600 dark:text-slate-300">
              {config.twitter ? (
                <>
                  <a href={config.twitter}>
                    <AiFillTwitterSquare className="hover:text-[#00acee]" />
                  </a>
                </>
              ) : null}
              {config.linkedin ? (
                <>
                  <a href={config.linkedin}>
                    <AiFillLinkedin className="hover:text-[#0A66C2]" />
                  </a>
                </>
              ) : null}
              {config.github ? (
                <>
                  <a href={config.github}>
                    <AiFillGithub className="hover:text-[#171515] dark:hover:text-white" />
                  </a>
                </>
              ) : null}
            </div>
            <div className="flex flex-col text-center p-3  items-center">
              <h1 className="text-2xl py-2 font-mono dark:text-white">Collaborate?</h1>
              <button className="flex py-2 px-4 rounded items-center border border-gray-200  hover:bg-black hover:text-white text-black  dark:bg-white hover:dark:bg-black hover:dark:text-white">
                <FiMail />
                <a href={"mailto:" + config.contact} className="font-mono px-2" target="_blank">
                  Say Hi!
                </a>
              </button>
            </div>
          </section>
          <section className="p-2">
            {config.about ? (
              <div className="px-10">
                <h1 className="text-3xl py-2 font-mono dark:text-white">About</h1>
                <p className="text-md py-2 font-mono text-gray-700 dark:text-slate-300">{config.about}</p>
              </div>
            ) : null}

            {config.experience ? (
              <div className="px-10 py-2">
                <h1 className="text-3xl py-2 font-mono dark:text-white">Experience</h1>
                <div className="grid grid-cols-1 gap-4">
                  {config.experience.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                  ))}
                </div>
              </div>
            ) : null}

            {config.skills ? (
              <div className="px-10 py-2">
                <h1 className="text-3xl py-2 font-mono dark:text-white">Skills</h1>
                <div className="overflow-auto flex">
                  {config.skills.map((skill, index) => (
                    <div className="text-5xl dark:text-white p-2">
                      <i key={index} className={skill} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {config.projects ? (
              <div className="px-10 py-2">
                <h1 className="text-3xl py-2 font-mono dark:text-white">Projects</h1>
                <div className="">
                  <Projects projects={config.projects} />
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full p-2 flex justify-center overflow-hidden bg-white dark:bg-black dark:text-white">
        <span className="text-xs font-mono text-center dark:text-white">
          <a href="https://rohitmidha23.github.io" className="hover:underline">
            developed by rohit midha
          </a>
        </span>
      </footer>
    </div>
  );
}
