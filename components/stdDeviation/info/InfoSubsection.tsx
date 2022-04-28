interface InfoSubsectionProps {
  title: string;
  description: string;
  formula: JSX.Element;
  items: {
    name: string;
    description: string;
  }[];
}

const InfoSubsection: React.FC<InfoSubsectionProps> = ({
  title,
  description,
  formula,
  items,
}) => {
  return (
    <>
      <h2 className="mt-8 font-semibold text-xl">{title}</h2>
      <p className="mt-2 text-sm md:text-base text-stone-300 indent-8 text-justify">
        {description}
      </p>
      <div className="flex justify-center my-4">{formula}</div>
      {items.map((item) => (
        <p className="text-sm md:text-base text-stone-300 indent-8 text-justify">
          <span className="font-bold">{item.name}</span> - {item.description}
        </p>
      ))}
    </>
  );
};

export default InfoSubsection;
