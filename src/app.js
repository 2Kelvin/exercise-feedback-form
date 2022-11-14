function FeedbackForm() {
  const [messageIsSent, setIsSent] = React.useState(false);
  const [theMessage, setTheMessage] = React.useState("");

  if (messageIsSent) {
    return <h1>Arigato!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending "${theMessage}"`);
          setIsSent(true);
        }}
      >
        <textarea
          palceholder="Your message here..."
          value={theMessage}
          onChange={(e) => setTheMessage(e.target.value)}
        />
        <button type="submit">Send Feedback</button>
      </form>
    );
  }
}

export default function App() {
  return <FeedbackForm />;
}

// react connection
const rootNode = document.getElementById("reactRoot");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
