import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header className="header" />
      <Note />
      <Footer className="footer" />
    </div>
  );
}

export default App;
