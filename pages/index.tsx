import PageLayout from "@layout/pageLayout";

export default function Home() {
  return (
    <PageLayout title="Home">
      <>
        <section className="home">
          <h1>Eulogy</h1>
        </section>
        <style jsx>
          {`
            .home h1 {
              text-align: center;
            }
          `}
        </style>
      </>
    </PageLayout>
  );
}
