const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

const album = [
  {
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
  {
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    url: 'https://via.placeholder.com/600/56a8c2',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
  {
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  },
  {
    id: 8,
    title: 'aut porro officiis laborum odit ea laudantium corporis',
    url: 'https://via.placeholder.com/600/54176f',
    thumbnailUrl: 'https://via.placeholder.com/150/54176f',
  },
];

function Navbar({ total }) {
  return <h2>Total items: {total}</h2>;
}

function Card({ item, setTotal }) {
  const [subtotal, setSubtotal] = useState(0);

  function itemAdd() {
    setTotal((n) => n + 1);
    setSubtotal(subtotal + 1);
  }

  function itemRemove() {
    setSubtotal(subtotal === 0 ? 0 : subtotal - 1);
    if (subtotal === 0) return;
    setTotal((n) => (n === 0 ? 0 : n - 1)); // doesn't work if subtotal === 0
  }

  return (
    <div className="card">
      <h3>
        {item.title.length < 45 ? item.title : item.title.slice(0, 45) + '...'}
      </h3>
      <img src={item.thumbnailUrl} alt={item.title} />
      <div className="btns">
        <button className="btn" onClick={itemRemove}>
          -
        </button>
        <p>{subtotal}</p>
        <button className="btn" onClick={itemAdd}>
          +
        </button>
      </div>
    </div>
  );
}

function Cards({ setNumber }) {
  return (
    <div className="gallery">
      {album.map((item) => (
        <Card key={item.id} item={item} setTotal={setNumber} />
      ))}
    </div>
  );
}

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <Navbar total={number} />
      <Cards setNumber={setNumber} />
    </div>
  );
}

root.render(<App />);
