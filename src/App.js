import Vegetables from "./components/Vegetables";
import AnimalList from "./components/AnimalList";
import { useState } from "react";
import "../src/App.css";

const App = () => {
  const [tab, setTab] = useState("animalList");
  return (
    <main className="center">
      <div className="button m">
        <button className="btn1" onClick={() => setTab("animalList")}>
          動物一覧
        </button>
        <button className="btn2" onClick={() => setTab("vegetables")}>
          野菜一覧
        </button>
      </div>
      {tab === "animalList" ? <AnimalList /> : <Vegetables />}
    </main>
  );
};

export default App;
