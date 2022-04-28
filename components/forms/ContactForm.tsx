const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col w-full p-4">
      <form className="w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row w-full space-y-2 md:space-x-2 md:space-y-0">
            <input
              type="text"
              placeholder="Nome"
              className="flex-1 rounded-md py-1.5 px-2 focus:outline-none focus:ring 
            focus:ring-blue-600  transition ease-in-out duration-200"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className="flex-1 rounded-md py-1.5 px-2 focus:outline-none focus:ring 
            focus:ring-blue-600  transition ease-in-out duration-200"
            />
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              placeholder="E-mail"
              className="flex-1 rounded-md py-1.5 px-2 focus:outline-none focus:ring 
            focus:ring-blue-600  transition ease-in-out duration-200"
            />
          </div>
          <div className="mt-2 flex">
            <textarea
              rows={8}
              className="w-full focus:outline-none focus:ring-blue-600 px-2 
            focus:ring transition ease-in-out duration-200 rounded-md py-1.5"
              placeholder="Deixe sua mensagem..."
            />
          </div>
          <button className="mt-2 py-1.5 text-white bg-blue-600 rounded-md font-semibold">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
