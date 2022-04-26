import { useState, useEffect } from "react";

function calculateMean(nums: number[]) {
  return (
    nums.reduce((prev, current) => {
      return prev + current;
    }) / nums.length
  );
}

function stdDeviation(nums: number[], type: StdDeviation) {
  const mean = calculateMean(nums);
  const numberElements = nums.length;
  const sumNums = nums.reduce((prev, curr) => prev + curr);
  let v = 0;
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    v += Math.pow(el - mean, 2);
  }
  const variance =
    type === "population" ? v / numberElements : v / (numberElements - 1);
  return {
    mean,
    numberElements,
    stdDev: Math.sqrt(variance),
    variance,
    sumNums,
  };
}

type StdDeviation = "population" | "sample";

const StandardDeviation: React.FC = () => {
  const initialStd = {
    mean: 0,
    numberElements: 0,
    stdDev: 0,
    variance: 0,
    sumNums: 0,
  };
  const [currentType, setCurrentType] = useState<StdDeviation>("population");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textInput, setTextInput] = useState("");
  const [numbersList, setNumbersList] = useState<number[]>([]);
  const [std, setStd] = useState(initialStd);

  useEffect(() => {
    // Set default if no numbers
    if (numbersList.length === 0) {
      setStd(initialStd);
      return;
    }
    const results = stdDeviation(numbersList, currentType);
    setStd({
      mean: results.mean,
      numberElements: results.numberElements,
      stdDev: results.stdDev,
      variance: results.variance,
      sumNums: results.sumNums,
    });
  }, [numbersList, currentType]);

  const separations = [
    {
      sep: ",",
      regex: /(\d+\.?\d*)\,?/g,
      buttonText: "Vírgula",
      placeholderText:
        "Digite os números separados por vírgula.\nEx: 1,25.2,32,52,21",
    },
    {
      sep: " ",
      regex: /(\d+\.?\d*)\s?/g,
      buttonText: "Espaço",
      placeholderText:
        "Digite os números separados por um espaço em branco.\nEx: 1 25.2 32 52 21",
    },
    {
      sep: ";",
      regex: /(\d+\.?\d*)\;?/g,
      buttonText: "Ponto e vírgula",
      placeholderText:
        "Digite os números separados por ponto e vírgula.\nEx: 1;25.2;32;52;21",
    },
  ];

  const handleClick = (idx: number) => {
    const numbers = textInput.split(separations[currentIndex].sep);
    setTextInput(numbers.join(separations[idx].sep));
    setCurrentIndex(idx);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Set defaults if no text
    if (e.target.value === "") {
      setTextInput("");
      setNumbersList([]);
      return;
    }
    const validInput = e.target.value.match(separations[currentIndex].regex);
    if (validInput) {
      const nums = validInput.map((v) =>
        Number(v.replace(separations[currentIndex].sep, ""))
      );
      setNumbersList(nums);
    }
    setTextInput(validInput?.join("") || "");
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between mt-12">
        <div className="flex rounded-md shadow-md hover:shadow-lg overflow-hidden text-xs">
          <button
            className={
              currentType === "population"
                ? "bg-yellow-200 text-yellow-900 p-2 flex-1 sm:flex-none"
                : "bg-yellow-600 text-white shadow p-2 flex-1 sm:flex-none"
            }
            onClick={() => setCurrentType("population")}
          >
            Populacional
          </button>
          <button
            className={
              currentType === "sample"
                ? "bg-yellow-200 text-yellow-900 p-2 border-yellow-800 flex-1 sm:flex-none"
                : "bg-yellow-600 text-white shadow p-2 flex-1 sm:flex-none"
            }
            onClick={() => setCurrentType("sample")}
          >
            Amostral
          </button>
        </div>
        <div className="flex mt-2 sm:mt-0 rounded-md shadow-md hover:shadow-lg overflow-hidden text-xs">
          {separations.map((separation, idx) => (
            <button
              key={separation.sep}
              onClick={() => handleClick(idx)}
              className={
                idx === currentIndex
                  ? "bg-blue-200 hover:bg-blue-300 text-blue-900 p-2 transition duration-200 ease-in-out flex-1 sm:flex-none"
                  : "bg-blue-600 hover:bg-blue-700 text-white p-2 transition duration-200 ease-in-out flex-1 sm:flex-none"
              }
            >
              {separation.buttonText}
            </button>
          ))}
        </div>
      </div>
      <textarea
        rows={3}
        onChange={handleChange}
        value={textInput}
        placeholder={separations[currentIndex].placeholderText}
        name="nums"
        className="p-2 w-full text-sm md:text-base shadow-lg mt-4 focus:outline-none focus:ring-yellow-600 focus:ring rounded-lg text-stone-900 bg-stone-200 placeholder:text-stone-500"
      />

      <div className="flex flex-col mt-4">
        <span className="text-sm md:text-base">
          {currentType === "population"
            ? `σ - desvio padrão populacional ${std.stdDev.toFixed(2)}`
            : `s - desvio padrão amostral ${std.stdDev.toFixed(2)}`}
        </span>
        <span className="text-sm md:text-base">
          {currentType === "population"
            ? `σ² - variância populacional ${std.stdDev.toFixed(2)}`
            : `s² - variância amostral ${std.stdDev.toFixed(2)}`}
        </span>
        <span className="text-sm md:text-base">
          μ - média do conjunto {std.mean.toFixed(2)}
        </span>
        <span className="text-sm md:text-base">
          N - tamanho do conjunto: {std.numberElements}
        </span>
        <span className="text-sm md:text-base">
          Σ - somatório do conjunto: {std.sumNums.toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default StandardDeviation;
