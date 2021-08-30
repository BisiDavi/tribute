import Image from "next/image";
import Link from "next/link";
import menus from "@json/menu.json";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="header">
        <button onClick={() => setShowMenu(!showMenu)}>
          <Image src="/hamburger.svg" alt="hamburger" height={15} width={15} />{" "}
          <b>Menu</b>
        </button>
        {showMenu && (
          <nav>
            {menus.map((menu, index) => (
              <Link key={index} href={menu.link} passHref>
                <a>{menu.name}</a>
              </Link>
            ))}
          </nav>
        )}
        <section className="hero">
          <h1>Prof. A. A Akinpelumi</h1>
          <p>Loving | Disciplined | Hard Working.</p>
        </section>
      </header>
      <style jsx>
        {`
          header.header {
            position: relative;
            display: flex;
            background-color: #f0f0f0;
            text-align: center;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 250px;
            border-bottom: 1px solid #ddd;
            text-align: center;
          }
          nav {
            display: flex;
            align-items: center;
          }
          nav a {
            margin: 0px 20px;
          }
          .header button {
            position: absolute;
            left: 20px;
            top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #c9c9c9;
            -webkit-transition: background-color 200ms ease;
            transition: background-color 200ms ease;
          }
          button b {
            margin: 0px 10px;
          }
          .header button:hover {
            background-color: rgba(0, 0, 0, 0.06);
          }
        `}
      </style>
    </>
  );
}
