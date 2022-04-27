import type { NextPage } from "next";
import Head from "next/head";
import Meta from "../components/Meta/Meta";
import StandardDeviation from "../components/StdDeviation";
import StdDeviationIcon from "../components/StdDeviationIcon";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-stone-900 min-h-screen">
      <Head>
        <title>Desvio Padrão</title>
        <Meta />
      </Head>
      {/* Formula */}
      <div className="flex flex-col flex-1">
        <div className="mt-12 container flex flex-col max-w-2xl p-4 mx-auto text-stone-200">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-serif">
            Desvio Padrão
          </h1>
          <a
            className="flex justify-center mt-12"
            href="https://pt.wikipedia.org/wiki/Desvio_padr%C3%A3o"
            target="_blank"
            rel="noreferrer"
          >
            <StdDeviationIcon />
          </a>
          <StandardDeviation />
        </div>
      </div>
      <div className="flex p-1 text-stone-700 text-sm justify-center">
        © Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Home;
