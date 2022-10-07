import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { EventData, getAllEvents, getEventData } from "../../modules/events";

export interface EventDataProps {
  eventData: EventData;
  left?: boolean;
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context?.params?.event || context?.params?.event == undefined)
    throw new Error("Param missing");
  const eventData = await getEventData(context.params.event);
  return {
    props: {
      eventData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllEvents();
  return {
    paths,
    fallback: false,
  };
};

const Event: NextPage<EventDataProps> = ({ eventData }) => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - {eventData.title}</title>
        <meta name="description" content="Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main className="overflow-hidden">
        <div className="bg-dinocream pb-20">
          <header className="flex items-center justify-center h-[28rem] mb-12 bg-fixed bg-center bg-cover bg-[url('https://images.pexels.com/photos/162500/measurement-millimeter-centimeter-meter-162500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat"></header>
          <div className="py-10 text-dinoblack flex flex-col justify-center">
            {/* <div className="container flex items-center justify-center h-52 md:h-96 m-auto mb-12 bg-fixed bg-center bg-contain bg-no-repeat bg-[url('/images/ThomasMore.png')]"> */}
            {/* <Image src={'/images/ThomasMore.png'} className="rounded-[25px]" width={125} height={250}></Image> */}
            {/* </div> */}
            <div>
              <h1 className="font-heading sm:text-4xl my-4 mx-20">
                {eventData.title}
              </h1>
            </div>
            <p className="mx-20 pb-32">{eventData.summary}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Event;
