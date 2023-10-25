import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Modal from "./components/Modal";
import myData from "./myData";

function App() {
  const [selectedBeast, setSelectedBeast] = useState(0);
  const [isModalShowing, setIsModalShowing] = useState(false);

  const [currentSearch, setCurrentSearch] = useState("");

  let currentData = myData;

  if (currentSearch !== "") {
    currentData = myData.filter((item) => item.keyword.match(currentSearch));
  }

  return (
    <div className="App">
      <Header
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
      ></Header>
      <Gallery
        myData={currentData}
        setSelectedBeast={setSelectedBeast}
        setIsModalShowing={setIsModalShowing}
      ></Gallery>
      {isModalShowing ? (
        <Modal
          currentBeast={currentData[selectedBeast]}
          setIsModalShowing={setIsModalShowing}
        ></Modal>
      ) : null}
    </div>
  );
}

export default App;
