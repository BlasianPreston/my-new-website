import Head from 'next/head';
import Home from "../components/Home.js";
import "./style.css";

export default function App() {
  return (
    <div className="main">
      <Head>
        <meta name="description" content="This is Preston's personal website" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="UTF-8" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
}
