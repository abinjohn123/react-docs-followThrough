const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

let nextId = 3;

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([...initialArtists]);

  function addItemHandler() {
    console.log(list);
    const index = 2;
    setList([
      ...list.slice(0, index),
      { id: nextId++, name: input },
      ...list.slice(index),
    ]);
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={addItemHandler}>Add</button>
      <ul>
        {list.map((entry, i) => (
          <li key={i}>{entry.name}</li>
        ))}
      </ul>
    </div>
  );
}

root.render(<App />);
