import Form from "./components/Form";
import "./App.css";
import Preview from "./components/Perview";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [showPerview, setShowPerview] = useState(false);
  return (
    <div className="h-screen">
      <Header setShowPerview={setShowPerview} showPerview={showPerview} />
      <div className="m-4 grid md:grid-cols-2">
        <div className="flex h-full justify-center rounded-xl bg-white py-3 shadow-lg lg:max-w-sm">
          <div className="grow-[0.5] space-y-8 rounded-lg">
            <Form />
          </div>
        </div>

       
          <Preview />
       
      </div>
    </div>
  );
}

export default App;
