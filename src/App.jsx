import { HeroPattern } from "./HeroPattern";
import "./app.css";
import { GetSearch } from "./components/generatorQR";

function App() {
  return (
    <>
      <main className="main">
        <GetSearch />
        <HeroPattern />
      </main>
    </>
  );
}

export default App;
