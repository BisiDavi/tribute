import Link from "next/link";
import { PropsWithChildren } from "react";
import Footer from "@components/footer";

export default function AdminLayout({
  children,
}: PropsWithChildren<AdminLayoutProps>) {
  return (
    <div>
      <header>
        <h1>
          In Loving Memory of <b>Prof. A . A Akinpelumi</b>
        </h1>
      </header>
      <aside>
        <Link href="/post-images" passHref>
          <a>Post Images</a>
        </Link>        
      </aside>
      {children}
      <Footer />
    </div>
  );
}

interface AdminLayoutProps {
  title: String;
}
