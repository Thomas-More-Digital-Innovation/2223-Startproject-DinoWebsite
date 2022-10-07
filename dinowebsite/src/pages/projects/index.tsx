import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Project from "../../components/Project";;
import { getAllProjectDataSorted, ProjectData } from "../../modules/projects";

interface AllProjectEntries {
  allProjectsData: ProjectData[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allProjectsData = await getAllProjectDataSorted();

  return {
    props: {
      allProjectsData,
    },
  };
};

const Projects: NextPage<AllProjectEntries> = ({ allProjectsData }) => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - Projects</title>
        <meta name="description" content="Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main>
        <div className="bg-dinocream text-dinoblack pb-64">
          <div className="mx-20">
            <div className="flex flex-col lg:flex-row justify-between pt-24 sm:pt-32 pb-5 ">
              <h1 className="font-heading text-4xl sm:text-5xl">
                Recent projects
              </h1>
              <input
                type="text"
                placeholder="Search.."
                className=" valid:border-green-500 invalid:border-red-500 outline-tmblue rounded bg-dinogrey  px-2 py-1  mt-5 lg:mt-0 sm:w-1/2 lg:w-2/5 xl:w-1/4 2xl:mr-16"
              />
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 lg:gap-20 xl:gap-52">
              {allProjectsData.map((project, i) => {
                if (project.featured) {
                  return (
                    <Link href={`/projects/${project.title}`} key={i}>
                      <a>
                      <Project projectData={project} />
                      </a>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
          <div className="mx-20">
            <div className="mt-32 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {allProjectsData.map((project, i) => {
                if (!project.featured) {
                return (
                  <Link href={`/projects/${project.title}`} key={i}>
                    <a>
                      <Project projectData={project} />
                    </a>
                  </Link>
                );
              }
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
