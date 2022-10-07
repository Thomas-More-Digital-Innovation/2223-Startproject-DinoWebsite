import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Event from "../components/Event";
import Project from "../components/Project";
import { getAllProjectDataSorted, ProjectData } from "../modules/projects";
import { EventData, getAllEventDataSorted } from "../modules/events";


interface PageData {
  allProjectsData: ProjectData[];
  allEventsData: EventData[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allProjectsData = await getAllProjectDataSorted();
  const allEventsData = await getAllEventDataSorted();
  return {
    props: {
      allProjectsData,
      allEventsData,
    },
  };
};


const Home: NextPage<PageData> = ({ allProjectsData, allEventsData }) => {
  let amountOfFeaturedProjects = allProjectsData.filter(x => x.featured).length;
  return (
    <div>
      <Head>
        <title>Digital Innovation - Home</title>
        <meta name="description" content="Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>

      <main>
        <div className="bg-dinocream pb-28">
          <div className="w-1/2 md:w-3/5 lg:w-3/6 xl:w-2/6 ml-20 lg:ml-60 3xl:pb-24">
            <h1 className="font-heading text-3xl sm:text-4xl pt-52 pb-5 text-dinoblack">
              Build shit, break shit, but ultimately, learn from the
              experiences!
            </h1>
            <Link href="/whatIsDI">
              <a className="font-heading text-lg sm:text-xl rounded-full border-2 border-dinoblack px-5 py-1 hover:border-tmorange">
                Learn More
              </a>
            </Link>
          </div>

          <div className="mt-32 md:mt-52 lg:mt-64 xl:mt-96 bg-[linear-gradient(9deg,_#191919_50%,_#f6f2e7_50%)]">
            <div className="bg-tmblue h-20 md:h-32 lg:h-40 xl:h-60 2xl:h-80 rotate-9 scale-125 shadow-glow"></div>
          </div>

          <div className="bg-dinoblack text-dinocream">
            <div className="mx-20">
              <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5">
                Upcoming events
              </h1>

              {allEventsData.map((event, i) => {
                if (i < 2) {
                  return (
                    <Link href={`/events/${event.title}`} key={i}>
                      <a>
                        <Event eventData={event} left={i == 0 ? true : false} />
                      </a>
                    </Link>
                  );
                }
              })}
            </div>
          </div>

          <div className="h-40 md:h-80 lg:h-[26rem] xl:h-[35rem] bg-[linear-gradient(-9deg,_#f6f2e7_50%,_#191919_50%)]"></div>

          <div className="bg-dinocream text-dinoblack">
            <div className="mx-20">
              <h1 className="font-heading text-4xl sm:text-5xl lg:pt-5 pb-5">
                Featured projects
              </h1>

              <div className={`grid md:grid-cols-2 grid-cols-1 gap-6 ${amountOfFeaturedProjects <= 2  ? amountOfFeaturedProjects <= 1 ? "md:grid-cols-1" : "lg:grid-flow-col lg:auto-cols-fr lg:gap-20 xl:gap-52" : "lg:grid-cols-3 md:grid-cols-2"} `}>
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
              <div className="w-full py-20 text-center">
                <Link href="/projects">
                  <a className="font-heading text-xl sm:text-2xl rounded-full border-2 border-dinoblack px-5 py-1  hover:border-tmorange">
                    All projects
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
