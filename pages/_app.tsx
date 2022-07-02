import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/_styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Rule of Thumb</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
