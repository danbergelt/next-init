import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello, world!</h1>
    </div>
  );
}
