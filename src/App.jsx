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
  const [currentSelect, setCurrentSelect] = useState("all");

  let currentData = myData;

  if (currentSearch !== "") {
    currentData = currentData.filter((item) =>
      item.keyword.match(currentSearch)
    );
  }

  if (currentSelect !== "all") {
    console.log(currentSelect);
    currentData = currentData.filter((item) => item.horns === +currentSelect);
  }

  return (
    <div className="App">
      <Header
        currentSearch={currentSearch}
        setCurrentSearch={setCurrentSearch}
        setCurrentSelect={setCurrentSelect}
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
