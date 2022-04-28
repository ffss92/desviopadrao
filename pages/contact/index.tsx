import { NextPage } from "next";
import ContactForm from "../../components/forms/ContactForm";

// TODO: Adicionar backend

const Contact: NextPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center">
      <div className="container flex flex-col max-w-2xl justify-center mx-auto mt-12">
        <h1 className="text-stone-50 text-4xl md:text-5xl font-serif text-center mb-4">
          Entre em contato
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
