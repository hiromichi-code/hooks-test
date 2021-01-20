import Vegetables from "./components/Vegetables";
import AnimalList from "./components/AnimalList";
import Country from "./components/Country";
import { useState } from "react";
import "../src/App.css";

const App = () => {
  const [tab, setTab] = useState("");
  return (
    <main className="center">
      <div className="button m">
        <button className="btn1" onClick={() => setTab("animalList")}>
          動物一覧
        </button>
        <button className="btn2" onClick={() => setTab("vegetables")}>
          野菜一覧
        </button>
        <button className="btn3" onClick={() => setTab("country")}>
          国一覧
        </button>
      </div>
      {tab === "animalList" && <AnimalList />}
      {tab === "vegetables" && <Vegetables />}
      {tab === "country" && <Country />}
    </main>
  );
};

export default App;
