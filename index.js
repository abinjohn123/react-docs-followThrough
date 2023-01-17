const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

function App() {
  const [list, setList] = useState([...initialArtists]);

  function reverseClickHandler() {
    setList([...list].reverse());
  }
  return (
    <div>
      <button onClick={reverseClickHandler}>Reverse List</button>
      <ul>
        {list.map((entry) => (
          <li key={entry.id}>{entry.name}</li>
        ))}
      </ul>
    </div>
  );
}

root.render(<App />);
