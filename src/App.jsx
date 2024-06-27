import Form from "./components/Form";
import "./App.css";
import Preview from "./components/Perview";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [showPerview, setShowPerview] = useState(false);
  return (
    <div className="h-screen relative">
      <Header setShowPerview={setShowPerview} showPerview={showPerview} />
      <div className={`m-4 grid md:grid-cols-2`}>
        <div
          className={`${showPerview ? "hidden" : "block"} flex h-full justify-center rounded-xl bg-white py-3 shadow-lg lg:max-w-sm`}
        >
          <div className={`$ grow-[0.5] space-y-8 rounded-lg`}>
            <Form />
          </div>
        </div>

        <Preview showPerview={showPerview} />
      </div>
      <button
      
        onClick={() => setShowPerview(!showPerview)}
        className="mr-4 md:hidden rounded-lg fixed bottom-3 right-2 bg-gray-700 px-3 py-2 text-white"
      >
        {showPerview ? "Hide Preview" : "Show Preview"}
      </button>
    </div>
  );
}

export default App;
