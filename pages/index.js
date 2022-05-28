import Head from 'next/head';
import NavBar from '../components/NavBar';
import MainPage from './MainPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ATG.WORLD</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <NavBar></NavBar>
      <MainPage></MainPage>
    </div>
  );
}
