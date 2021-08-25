import React, { useState } from "react";
import recomendoData from "./api/data";
import "./styles.css";

export default function App() {
  const [select, setSelect] = useState("Books");

  function onClickHandler(cat) {
    setSelect(cat);
  }

  return (
    <div className="App">
      <h1>Recomendo App</h1>
      <p>
        Here is what I love to read and watch..
        <br />
        Read and watch for fun...!
      </p>
      <div>
        {Object.keys(recomendoData).map((cat) => (
          <button onClick={() => onClickHandler(cat)}>{cat}</button>
        ))}
      </div>
      <hr />
      <div className="container">
        <ul>
          {recomendoData[select].map((item) => (
            <li key={item.name} className="list">
              <div className="img">
                <img src={item.img} alt="imge he ye" />
              </div>
              <div className="name"> {item.name} </div>
              <div className="rating"> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
