import React from "react";
import info from "../info";
import Content from "../Components/Content";

function createCard(info) {
  return (
    <Content
      key={info.id}
      best={info.best}
      spon={info.spon}
      img={info.imgURL}
      name={info.name}
      color={info.color}
      rating={info.rating}
      availability={info.availability}
      badge={info.badge}
      cost={info.cost}
      discount={info.discount}
      offer={info.offer}
      save={info.save}
      top={info.top}
    />
  );
}

function App() {
  return <div className="dict">{info.map(createCard)}</div>;
}

export default App;
