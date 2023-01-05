// Passing Props
const root = ReactDOM.createRoot(document.getElementById('root'));

function Avatar({ person, id }) {
  return <img src={'https://i.pravatar.cc/150?img=' + id} alt={person} />;
}

function App() {
  return (
    <div>
      <Avatar person="AJ" id="0" />
      <Avatar person="SG" id="2" />
      <Avatar person="GU" id="4" />
    </div>
  );
}

root.render(<App />);
