import Head from 'next/head';
import styled from 'styled-components';

const Header = styled.h1`
  color: red;
`;

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Hello, world!</Header>
    </div>
  );
}
