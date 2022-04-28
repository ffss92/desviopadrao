import StdDeviationPopulation from "./formulas/StdDeviationPopulation";
import StdDeviationSample from "./formulas/StdDeviationSample";

const StdDeviationInfo = () => {
  return (
    <div className="bg-stone-800 my-16 rounded-md flex flex-col p-4 md:p-8 text-stone-50 shadow-md hover:shadow-lg">
      <h1 className="text-xl md:text-2xl font-semibold">Desvio Padrão</h1>
      <p className="mt-4 text-sm md:text-base text-stone-300 indent-8 text-justify">
        O desvio padrão é uma medida utilizada para indicar uma medida de
        dispersão dos dados em torno de média amostral, amplamente utilizada
        tanto no campo da estatística quanto da probabilidade.
      </p>
      <p className="mt-1 text-sm md:text-base text-stone-300 indent-8 text-justify">
        Seu valor é determinado pela raíz quadrada da{" "}
        <a
          className="text-blue-500"
          href="https://pt.wikipedia.org/wiki/Vari%C3%A2ncia"
          target="_blank"
          rel="noreferrer"
        >
          variância
        </a>
        . Um{" "}
        <span className="font-bold text-stone-50">desvio padrão baixo</span>{" "}
        representa uma pequena variação entre os pontos dos dados, ou seja, tais
        pontos possuem uma tendência a estarem próximos da média ou do valor
        esperado. Já um{" "}
        <span className="font-bold text-stone-50">desvio padrão alto</span>{" "}
        demonstra que os pontos estão espalhados em uma amplitude maior de
        valores, mais distantes da média ou valor esperado.
      </p>
      {/* Pop. */}
      <h2 className="mt-8 font-semibold text-xl">Populacional</h2>
      <p className="mt-2 text-sm md:text-base text-stone-300 indent-8 text-justify">
        Conforme tratado anteriormente, o desvio padrão padrão populacional mede
        a variabilidade dos items de um conjunto. Pode ser encontrado através da
        formula abaixo:
      </p>
      <div className="flex justify-center mt-2">
        <StdDeviationPopulation />
      </div>
      <p className="mt-2 text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">σ</span> - desvio padrão populacional
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">σ²</span> - variância populacional
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">
          x<small className="text-xs">i</small>
        </span>{" "}
        - item do conjunto
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">μ</span> - média do conjunto
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">N</span> - tamanho do conjunto
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">Σ</span> - somatório do conjunto
      </p>
      {/* Samp. */}
      <h2 className="mt-8 font-semibold text-xl">Amostral</h2>
      <p className="mt-2 text-sm md:text-base text-stone-300 indent-8 text-justify">
        Baseado em uma amostra, o desvio padrão amostral é uma estimativa do
        desvio padrão de parte de um conjunto. Pode ser encontrado através da
        formula abaixo:
      </p>
      <div className="flex justify-center mt-2">
        <StdDeviationSample />
      </div>
      <p className="mt-2 text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">s</span> - desvio padrão amostral
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">s²</span> - variância amostral
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">
          x<small className="text-xs">i</small>
        </span>{" "}
        - item do conjunto
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">x̄</span> - média do conjunto
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">N</span> - tamanho do conjunto
      </p>
      <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
        <span className="font-bold">Σ</span> - somatório do conjunto
      </p>
    </div>
  );
};

export default StdDeviationInfo;
