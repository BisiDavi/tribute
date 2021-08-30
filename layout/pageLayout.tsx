import Head from "next/head";
import Header from "@components/header";
import Footer from "@components/footer";
import { PropsWithChildren } from "react";

export default function PageLayout({
  title,
  children,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <div className="page-layout">
      <Head>
        <title>Prof A.A Akinpelumi | {title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

interface PageLayoutProps {
  title: string;
}
