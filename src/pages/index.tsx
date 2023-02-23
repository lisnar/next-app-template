import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "silver",
            textTransform: "uppercase",
          }}
        >
          Home Page
        </span>
      </main>
    </>
  );
}
