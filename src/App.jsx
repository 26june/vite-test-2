import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Modal from "./components/Modal";
import myData from "./myData";

function App() {
  const [selectedBeast, setSelectedBeast] = useState(0);
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <div className="App">
      <Header></Header>
      <Gallery
        myData={myData}
        setSelectedBeast={setSelectedBeast}
        setIsModalShowing={setIsModalShowing}
      ></Gallery>
      {isModalShowing ? (
        <Modal
          currentBeast={myData[selectedBeast]}
          setIsModalShowing={setIsModalShowing}
        ></Modal>
      ) : null}
    </div>
  );
}

export default App;
