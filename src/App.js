import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😃": "Smiling",
  "🥺": "Disbelef",
  "😔": "Sad",
  "🙏": "high-five/ forgiveness",
  "😙": "whistle",
  "🎀": "fighting cancer",
  "👇": "feeling down",
  "🤜": "respect",
  "🍠": "sweet potato",
  "❌": "kiss in English chat",
  "💁": "information desk person",
  "😪": "sleeping in anime",
  "😓": "disappointment with relief",
  "👹": "japanese ogre",
  "🙌": "celebration",
  "💆‍♀️": "leave me alone",
  "😯": "hush hush hush!",
  "😤": "triumph",
  "🙇‍♂️": "bowing",
  "🥡": "Takeout Box",
  "❤️": "Love",
  "😑": "Annoyance"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input placeholder="Put your emoji here" onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      <h3>Emoji's we Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
