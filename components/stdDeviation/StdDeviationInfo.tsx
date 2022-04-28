import StdDeviationPopulation from "../formulas/StdDeviationPopulation";
import StdDeviationSample from "../formulas/StdDeviationSample";
import InfoSubsection from "./info/InfoSubsection";

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
      <InfoSubsection
        title="Populacional"
        description="Conforme tratado anteriormente, o desvio padrão padrão populacional mede
        a variabilidade dos items de um conjunto. Pode ser encontrado através da
        formula abaixo:"
        formula={<StdDeviationPopulation />}
        items={[
          { name: "σ", description: "desvio padrão populacional" },
          { name: "σ²", description: "variância populacional" },
          { name: "xi", description: "item do conjunto" },
          { name: "μ", description: "média do conjunto" },
          { name: "N", description: "tamanho do conjunto" },
          { name: "Σ", description: "somatório do conjunto" },
        ]}
      />
      {/* Samp. */}
      <InfoSubsection
        title="Amostral"
        description="Baseado em uma amostra, o desvio padrão amostral é uma estimativa do
        desvio padrão de um determinado conjunto. Pode ser encontrado através da
        formula abaixo:"
        formula={<StdDeviationSample />}
        items={[
          { name: "s", description: "desvio padrão amostral" },
          { name: "s²", description: "variância amostral" },
          { name: "xi", description: "item do conjunto" },
          { name: "x̄", description: "média do conjunto" },
          { name: "N", description: "tamanho do conjunto" },
          { name: "Σ", description: "somatório do conjunto" },
        ]}
      />
    </div>
  );
};

export default StdDeviationInfo;
