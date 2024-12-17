import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // this is a example of how to fetch data for gemini api back end server
  const getResponse = async () => {
    if (!value) {
      setError("Error! Please ask a question.");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "content-type": "application/json",
        },
      };
      // we send the options with data to the backend server
      const response = await fetch("http://localhost:8000/gemini", options);
      // waiting for the response from the server
      const data = await response.text();
      // save the response inside a variable and convert it into text
      if (value == "clear") {
        clearData()
      } else {
        setChatHistory((oldChatHistory) => [
          ...oldChatHistory,
          {
            role: "user",
            parts: [{ text: value }],
          },
          {
            role: "model",
            parts: [{ text: data }],
          },
        ]);
      }

      setValue("");
      setError(null);
    } catch (e) {
      console.error(e);
      setError("Errorr something went wrong");
    }
  };

  function clearData() {
    setChatHistory("");
    setValue("");
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <div className="main">
        <img src="/assets/logo.png" height="216px" width="256px"></img>
        <div className="tag-line">
          <h1>
            Hey <i className="spark">Dude</i>, how can I help you today?
          </h1>
        </div>
      </div>
      <div className="chatContainer">
        <div className="searchBar">
          <input
            className="chat"
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => (e.key === "Enter" ? getResponse() : "")}
          ></input>
          <a onClick={getResponse}>
            <img src="/assets/model.png" height="25px"></img>
          </a>
        </div>
        <div className="response">
          {error && <p>{error}</p>}
          {chatHistory && chatHistory.map((chat, index) => (
            <div key={index}>
              <p>
                <a className="miniLogo">
                  <img
                    src={`/assets/${chat.role}.png`}
                    height="20px"
                    padding="5px"
                  />
                </a>
                {chat.parts[0].text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
