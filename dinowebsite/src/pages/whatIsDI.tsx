import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Coffee from "../components/Coffee";
import ProjectCount, { ProjectCounterProps } from "../components/ProjectCount";
import { getAllProjectDataSorted } from "../modules/projects";

export const getStaticProps: GetStaticProps = async (context) => {
  const projectAmountNumber = (await getAllProjectDataSorted()).length;
  return {
    props: {
      projectAmountNumber,
    },
  };
};

const whatIsDI: NextPage<ProjectCounterProps> = ({ projectAmountNumber }) => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - What is DI</title>
        <meta name="description" content="Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main className="bg-dinocream">
        <div className="mx-20 3xl:pb-24">
          <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-5 ">
            About Digital Innovation
          </h1>
          <h2 className="font-heading pt-9 pb-3 text-2xl">What is DI ?</h2>
          <p className="font-sans text-md sm:text-lg text-justify">
            Do you have a very broad interest in IT? And can you work well
            independently? Then Digital Innovation is for you. Instead of the
            traditional way of learning behind school desks, you will work in
            projects in collaboration with companies. By working with real
            customers you often come into contact with real-life problems that
            often need creative solutions. But you will be guided by a partner
            company, by a real IT professional. So if you have problems, you
            always have a safety net. During your last year you will complete
            your project work and you will go on an internship. This can be at
            home or abroad. Did you graduate? Good news! IT is and remains a
            bottleneck profession. So you can get started right away. Depending
            on where the emphasis was within your projects, you can get started
            as: software engineer, network specialist, data engineer, .... The
            sky is the limit! And are you still interested in continuing your
            studies? Then you can go to a master through a transition year.
          </p>
        </div>
        <div className="mt-28 md:mt-40 lg:mt-52 xl:mt-60 bg-[linear-gradient(-9deg,_#191919_50%,_#f6f2e7_50%)]">
          <div className="bg-tmorange h-20 md:h-32 lg:h-40 xl:h-60 -rotate-9 scale-125 shadow-glow"></div>
        </div>
        <div className="bg-dinoblack text-dinocream pb-16">
          <div className="">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <ProjectCount projectAmountNumber={projectAmountNumber} />
            <Coffee />
            <div className="pt-36 text-center">
              <div className="relative">
                <div className="h-96">
                  <Image
                    src="/images/People3.png"
                    alt="People"
                    className="object-contain animate-[bounce3_1s_ease-in-out_infinite] z-0"
                    layout="fill"
                  />
                  <Image
                    src="/images/People2.png"
                    alt="People"
                    className="object-contain animate-[bounce2_1s_ease-in-out_infinite] z-0"
                    layout="fill"
                  />
                  <Image
                    src="/images/People1.png"
                    alt="People"
                    className="object-contain animate-bounce z-10"
                    layout="fill"
                  />
                </div>
                </div>
              <h1 className="font-heading text-2xl sm:text-3xl pt-5 text-dinocream">
                Digital Innovation consists of 16 students</h1>
            </div>
            </div>

            <h1 className="font-heading text-5xl pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-44 lg:pb-20 xl:pt-64 xl:pb-24 text-center">
              Gallery
            </h1>

            <div className="grid-container grid grid-cols-12 gap-7 xl:gap-10 lg:gap-8">
              <div className="col-span-12 md:col-span-5 lg:col-span-3 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-4 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-5 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>

              <div className="col-span-12 md:col-span-5 lg:col-span-5 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-3 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>

              <div className="col-span-12 md:col-span-7 lg:col-span-3 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
              <div className="col-span-12 md:col-span-12 lg:col-span-5 relative xl:h-56 lg:h-48 h-48">
                <Image
                  src={"/images/ThomasMore.png"}
                  alt="Thomas More"
                  className="object-cover"
                  layout="fill"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default whatIsDI;
