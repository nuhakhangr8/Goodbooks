import "./styles.css";
import { useState } from "react";

const bookDB = {
  Lighthearted: [{ name: "Anne of Green Gables", rating: "4/5" }],
  Motivational: [{ name: "mans' search for meaning", rating: "3/5" }],
  Syllabus: [
    { name: "Merchant Of Venice", rating: "5/5" },
    { name: "The Invisible Man", rating: "2/5" }
  ]
};
var genreList = Object.keys(bookDB);

export default function App() {
  const [selectedgenre, setgenre] = useState("Lighthearted");
  function genreClickHandler(selectedgenre) {
    setgenre(selectedgenre);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>GoodBooks</h1>
      <p>An app that recommends the scarcely read books I've loved</p>
      <div>
        {genreList.map((selectedgenre) => (
          <button
            style={{
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "0.2rem",
              cursor: "pointer"
            }}
            onClick={() => genreClickHandler(selectedgenre)}
          >
            {selectedgenre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {bookDB[selectedgenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "0.5rem",
                textAlign: "left",
                backgroundColor: "lightgrey"
              }}
            >
              <div style={{ fontSize: "large" }}> {book.name} </div>
              <div> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
