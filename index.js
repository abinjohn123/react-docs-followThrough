const root = ReactDOM.createRoot(document.getElementById('root'));

const { useState } = React;

function Form() {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  console.log('Render: ', firstName, lastName);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    firstName = '';
    lastName = '';
    console.log('Reset: ', firstName, lastName);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

function App() {
  return <Form />;
}

root.render(<App />);
