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
      <section className="hero">
        <h1>Evermore</h1>
        <p>
          I'm a simple responsive blog template. Easily add new blog posts using
          the Webflow Editor or customize your layout/design using the Webflow
          Designer.
        </p>
      </section>
    </header>
  );
}
