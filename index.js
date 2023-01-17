const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function inputChangeHandler(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  function artworkChangeHandler(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value,
      },
    });
  }
  return (
    <form>
      <label>
        First Name:{' '}
        <input
          value={person.name}
          onChange={inputChangeHandler}
          type="text"
          name="name"
        />
      </label>
      <label>
        Artwork:{' '}
        <input
          value={person.artwork.title}
          onChange={artworkChangeHandler}
          type="text"
          name="title"
        />
      </label>
      <label>
        Email:{' '}
        <input
          value={person.artwork.city}
          onChange={artworkChangeHandler}
          type="text"
          name="city"
        />
      </label>
    </form>
  );
}

function App() {
  return <Form />;
}

root.render(<App />);

const newObject = {
  name: 'Michaelangelo',
  artwork: {
    title: 'White Marble',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  },
};

function setPerson() {
  newObject;
}
