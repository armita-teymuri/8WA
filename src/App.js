import { useState } from "react";
import { addToArrayAtIndex } from "./utils/array";
import PreviewContext from "./contexts/previewContext";
import Header from "./components/code-form/header/Header";
import Screen from "./components/code-form/screen/Screen";
import AddSign from "./components/code-form/add-sign/AddSign";

const App = ({}) => {
  const [preview, setPreview] = useState(false);
  const [screenList, setScreenList] = useState([<Screen />]);

  const handleNewScreen = (index) => {
    setScreenList(addToArrayAtIndex(screenList, index + 1, <Screen />));
  };

  return (
    <PreviewContext.Provider value={{ preview, setPreview }}>
      <Header/>
      <div style={{ overflowX: "scroll", width: "100%" }}>
        <AddSign
          onClick={() => {
            handleNewScreen(-1);
          }}
        />
        {screenList.map((screen, index) => (
          <>
            <div style={{ display: "inline-block" }}>{screen}</div>
            <div style={{ display: "inline-block" }}>
              <AddSign
                onClick={() => {
                  handleNewScreen(index);
                }}
              />
            </div>
          </>
        ))}
      </div>
    </PreviewContext.Provider>
  );
};

export default App;
