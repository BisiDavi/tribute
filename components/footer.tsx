import Link from "next/link";
import menus from "@json/menu.json";

export default function Footer() {
  return (
    <footer>
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>
            <Link href={menu.link} passHref>
              <a>{menu.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="toTop">GO TO TOP</div>
    </footer>
  );
}
