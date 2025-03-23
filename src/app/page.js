import Head from 'next/head';
import Home from "../components/Home.js";
import "./style.css";

export default function App() {
  return (
    <div className="main">
      <Head>
        <meta name="description" content="This is Preston's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
}
