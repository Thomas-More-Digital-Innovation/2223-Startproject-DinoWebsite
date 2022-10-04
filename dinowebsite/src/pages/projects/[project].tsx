import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ProjectData, getProjectData, getAllProjects } from "../../modules/projects";

interface ProjectDataProps {
    projectData : ProjectData;
}

export const getStaticProps : GetStaticProps = async (context) => {
    console.log(context?.params?.event);
    if(!context?.params?.project) throw new Error("Param missing");
    const projectData = await getProjectData(context.params.project);
    console.log(projectData);
    return {
      props: {
        projectData
      }
    }
}

export const getStaticPaths = async () => {
    const paths = getAllProjects();
    return {
        paths,
        fallback : false
    }
}


const Project: NextPage<ProjectDataProps> = ({projectData}) => {
    return (
        <div>
            <Head>
                <title>Dinowebsite | { projectData.title }</title>
                <meta name="description" content="Dinowebsite" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="overflow-hidden">
                <div className="bg-dinocream pb-24">
                    <div className="py-10 text-dinoblack flex flex-col justify-center">
                        <div className="container flex items-center justify-center h-52 md:h-96 m-auto mb-12 bg-fixed bg-center bg-contain bg-no-repeat bg-[url('/images/ThomasMore.png')]">
                        </div>
                        <div>
                            <h1 className="font-heading sm:text-4xl my-4 mx-20">{ projectData.title }</h1>
                        </div>
                        <div>
                            <p className="mx-20">{ projectData.text }</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Project;