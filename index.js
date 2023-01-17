const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

function App() {
  const [counters, setcounter] = useState([23, 55, 67]);
  function handleIncrementClick(index) {
    setcounter(
      counters.map((counter, i) => {
        if (i === index) return counter + 1;

        return counter;
      })
    );
  }
  return (
    <div>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}{' '}
            <button
              onClick={() => {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

root.render(<App />);
