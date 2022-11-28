import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container">

      <nav className="sidebar">

        <label htmlFor="greeting" className="label">Greeting</label>
        <input
          type="text"
          id="greeting"
          className="input"
          placeholder="Congratulations"
          value={greeting}
          onChange={(event) => setGreeting(event.target.value)}
        />

        <label htmlFor="name" className="label">Name</label>
        <input
          type="text"
          id="name"
          className="input"
          placeholder="John"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="message" className="label">Message</label>
        <input
          type="text"
          id="message"
          className="input"
          placeholder="Wishing you all the best in this great day!"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

      </nav>

      <main className="main">

        <section className="card">

          <h1 className="greeting">{greeting.length > 0 ? greeting : "Congratulations"}</h1>

          <h3 className="name">{name.length > 0 ? name : "John"}</h3>
          
          <p className="message">{message.length > 0 ? message : "Wishing you all the best in this great day!"}</p>

        </section>

      </main>
    </div>
  );
}

export default App;
