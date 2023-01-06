function Item({ name, isPacked }) {
  console.log(typeof name);
  return <li className="item">{isPacked ? name + ' ✅' : name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// Render Code
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return <PackingList />;
}

root.render(<App />);
