import { ReactNode } from "react";
import Nav from "./Nav";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-stone-900 min-h-screen">
      <Nav />
      <div className="flex flex-col flex-1">{children}</div>
      <footer className="flex p-2 text-stone-700 text-sm justify-center">
        © Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Layout;
