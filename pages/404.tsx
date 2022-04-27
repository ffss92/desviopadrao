import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-stone-900 flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-white text-6xl font-serif">404</h1>
      <p className="text-stone-400 mt-2">
        Não tem nada aqui!{" "}
        <span className="text-blue-500 underline">
          <Link href="/">Ir para casa.</Link>
        </span>
      </p>
    </div>
  );
};

export default NotFound;
