const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

function App() {
  const [shapes, setShapes] = useState(initialShapes);
  function btnClickHandler() {
    setShapes(
      shapes.map((shape) => {
        if (shape.type === 'square') return shape;
        shape.y = shape.y + 50;

        return shape;
      })
    );
  }
  return (
    <div>
      <button onClick={btnClickHandler}>Move circles down!</button>
      {initialShapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20,
          }}
        />
      ))}
    </div>
  );
}

root.render(<App />);
