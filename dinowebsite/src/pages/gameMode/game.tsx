import type { NextPage } from "next";
import Head from "next/head";
import { Icon } from "@iconify/react";

const game: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Digital Innovation - inquiry portal</title>
        <meta name="description" content="Digital Innovation" />
        <link rel="icon" href="images/LogoTextTransparant.png" />
      </Head>
      <main className="bg-dinocream z-5 px-10 pb-40">
        <div className="ml-20 lg:ml-60 3xl:pb-24">
          <h1 className="font-heading text-3xl sm:text-4xl pt-52 pb-5 text-dinoblack">
            Space Invaders
          </h1>
          <canvas id="game"></canvas>
          <script type="module" src="gamemode.js"></script>
        </div>
      </main>
    </div>
  );
};

export default game;
