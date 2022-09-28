import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dinowebsite</title>
        <meta name="description" content="Dinowebsite" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-dinoblack">
        <div className="max-w-md w-full space-y-8 p-10 rounded-lg shadow-md shadow-dinowhite/50 bg-dinogreen">
          <div>
            <Image
              src="/../public/images/DinoBiege.png"
              alt="Logo dino"
              width={600}
              height={225}
            />
          </div>
          {/* button with blue color*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
