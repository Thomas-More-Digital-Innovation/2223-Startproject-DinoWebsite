import type { NextPage } from "next";
import Head from "next/head";
import { Icon } from "@iconify/react";
import Inquiry from "../components/Inquiry";

const inquiryPortal: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Digital Innovation - inquiry portal</title>
                <meta name="description" content="Digital Innovation" />
                <link rel="icon" href="images/LogoTextTransparant.png" />
            </Head>
            <main className="bg-dinocream z-5 px-10 pb-40">
                <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-10">
                    Question portal
                </h1>
                <Inquiry/>
            </main>
        </div>
    );
};

export default inquiryPortal;
