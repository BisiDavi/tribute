import Link from "next/link";
import menus from "@json/menu.json";

export default function Footer() {
  return (
    <>
      <footer className="footer">
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
      <style jsx>
        {`
          .footer {
            padding-top: 29px;
            padding-bottom: 29px;
            border-top: 1px solid #ddd;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            margin: auto;
            justify-content: space-around;
          }
          .footer li {
            list-style: none;
            margin: 0px 30px;
          }
          .footer ul {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
