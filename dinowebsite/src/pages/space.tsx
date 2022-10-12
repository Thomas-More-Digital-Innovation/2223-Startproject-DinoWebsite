import type { NextPage } from "next";
import Head from "next/head";
import Coach from "../components/contact/Coach";
import ContactInfo from "../components/contact/ContactInfo";
import Form from "../components/contact/Form";
import React from "react";

const space: NextPage = () => {
    return (
        <div>
            <h1 className="font-heading text-4xl text-center pb-[50px] pl-10">Try out space invaders!!!</h1>
            <div className="pb-[200px]">
                <iframe src="https://freeinvaders.org/" className="order-solid border-2 border-sky-500 aspect-square w-[600px] m-auto "></iframe>
            </div>
        </div>
    );
};

export default space;
