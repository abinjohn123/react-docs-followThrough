const root = ReactDOM.createRoot(document.getElementById('root'));

function Profile(props) {
  return (
    <div className="contributor">
      <img src={props.src} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

function Contributors() {
  return (
    <div className="contributors">
      <h1>Contributors</h1>
      <div className="contributors-images">
        <Profile
          src="https://i.pravatar.cc/100?img=1"
          name="John Doe"
        ></Profile>
        <Profile
          src="https://i.pravatar.cc/100?img=2"
          name="Doe John"
        ></Profile>
        <Profile
          src="https://i.pravatar.cc/100?img=3"
          name="Chekkan Vaasu"
        ></Profile>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Contributors />
    </div>
  );
}

root.render(<App></App>);
