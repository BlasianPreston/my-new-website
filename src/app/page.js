import Navbar from "../components/Navbar.js"
import Home from "../components/Home.js";
import "./style.css";

export default function App() {
  return (
    <div className="main">
      <main>
        <Navbar />
        <Home />
      </main>
    </div>
  );
}
