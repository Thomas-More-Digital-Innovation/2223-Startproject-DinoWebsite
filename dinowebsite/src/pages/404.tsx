import Head from "next/head";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Oops! Something went wrong...</title>
      </Head>
      <div className="flex h-screen bg-dinoblack text-dinocream">
        <div className="m-auto">
          <h1 className="font-sans text-4xl">Error 418 I&apos;m a teapot</h1>
        </div>
      </div>
    </div>
  );
}
