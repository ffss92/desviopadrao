import Link from "next/link";

const links = [
  { href: "/", title: "home" },
  // { href: "/contact", title: "contato" },
];

const Nav: React.FC = () => {
  return (
    <nav className="flex py-4 px-8">
      <div className="flex space-x-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className="text-stone-500 underline">{link.title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
