import type { NextPage } from "next";
import Head from "next/head";
import StdDeviation from "../components/stdDeviation/StdDeviation";
import StdDeviationInfo from "../components/stdDeviation/StdDeviationInfo";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-stone-900">
      <Head>
        <title>Desvio Padrão</title>
      </Head>
      {/* Formula and Results */}
      <div className="flex flex-1">
        <div className="mt-4 container flex flex-col max-w-2xl p-4 mx-auto text-stone-200">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-serif">
            Desvio Padrão
          </h1>
          <StdDeviation />
          {/* Content */}
          <StdDeviationInfo />
        </div>
      </div>
    </div>
  );
};

export default Home;
