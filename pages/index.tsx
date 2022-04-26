import type { NextPage } from "next";
import StandardDeviation from "../components/StandartDeviation";

const Home: NextPage = () => {
  return (
    <div className="bg-stone-900 flex flex-col min-h-screen">
      <div className="mt-12 container flex flex-col max-w-2xl p-4 mx-auto text-stone-200">
        <h1 className="text-center text-5xl font-serif">Desvio Padrão</h1>
        <a
          href="https://pt.wikipedia.org/wiki/Desvio_padr%C3%A3o"
          className="text-center mt-4 text-blue-400"
          target="_blank"
        >
          σ = √[ Σ( Xi - μ )² / N ]
        </a>
        <StandardDeviation />
      </div>
    </div>
  );
};

export default Home;
