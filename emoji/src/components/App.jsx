import React from "react";
import info from "../info";
import Header from "./Header";
import Content from "./Content";

function createContent(info) {
  return (
    <Content
      key={info.id}
      emoji={info.emoji}
      title={info.title}
      means={info.means}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      <div className="dictionary">
        {info.map(createContent)}
      </div>
    </div>
  );
}

export default App;
