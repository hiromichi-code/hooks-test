import Vegetables from "./components/Vegetables";
import AnimalList from "./components/AnimalList";
import { useState } from "react";

const App = () => {
  const [tab, setTab] = useState("animalList");
  const center = {
    textAlign: "center",
  };
  const m = {
    margin: "32px 0 0 0",
  };
  const btn1 = {
    height: "48px",
    backgroundColor: "#fff",
    borderRight: "1px solid",
    borderTop: "1px solid",
    borderLeft: "1px solid",
    marginBottom: "-1px",
    borderBottom: "1px solid",
    ":active,:focus": {
      borderBottom: "transparent",
      backgroundColor: "pink",
      outLine: "none",
    },
  };
  const btn2 = {
    height: "48px",
    backgroundColor: "#fff",
    borderRight: "1px solid",
    borderTop: "1px solid",
    borderLeft: "transparent",
    marginBottom: "-1px",
    borderBottom: "1px solid",
    ":active,:focus": {
      borderBottom: "transparent",
      backgroundColor: "pink",
      outLine: "none",
    },
  };
  return (
    <main style={center}>
      <div className="button" style={m}>
        <button style={btn1} onClick={() => setTab("animalList")}>
          動物一覧
        </button>
        <button style={btn2} onClick={() => setTab("vegetables")}>
          野菜一覧
        </button>
      </div>
      {tab === "animalList" ? <AnimalList /> : <Vegetables />}
    </main>
  );
};

export default App;
