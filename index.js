const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

let nextId = 0;

function Form() {
  const [tasks, setTasks] = useState([]);
  let [taskInput, setTaskInput] = useState('');

  function submitClickHandler(e) {
    e.preventDefault();
    setTaskInput('');
    setTasks([...tasks, { id: nextId++, task: taskInput }]);
  }
  return (
    <form>
      <input
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      ></input>
      <button onClick={submitClickHandler}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </form>
  );
}

function App() {
  return <Form />;
}

root.render(<App />);
