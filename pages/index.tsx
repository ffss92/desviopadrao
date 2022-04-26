import type { NextPage } from "next";
import Head from "next/head";
import StandardDeviation from "../components/StdDeviation";
import StdDeviationIcon from "../components/StdDeviationIcon";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-stone-900 min-h-screen">
      <Head>
        <title>Desvio Padrão</title>
      </Head>
      {/* Formula */}
      <div className="flex flex-col">
        <div className="mt-12 container flex flex-col max-w-2xl p-2 md:p-4 mx-auto text-stone-200">
          <h1 className="text-center text-5xl font-serif">Desvio Padrão</h1>
          <a
            className="flex justify-center mt-12"
            href="https://pt.wikipedia.org/wiki/Desvio_padr%C3%A3o"
            target="_blank"
          >
            <StdDeviationIcon />
          </a>
          <StandardDeviation />
        </div>
      </div>
    </div>
  );
};

export default Home;
