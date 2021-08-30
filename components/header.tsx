import Link from "next/link";
import menus from "@json/menu.json";

export default function Header() {
  return (
    <header>
      <nav>
        {menus.map((menu, index) => (
          <Link href={menu.link} passHref>
            <a key={index}>{menu.name}</a>
          </Link>
        ))}
      </nav>
      <section className="hero"></section>
    </header>
  );
}
