const root = ReactDOM.createRoot(document.getElementById('root'));

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayMovie({ onSmash, movie }) {
  return <Button onClick={onSmash}>Play "{movie}"</Button>;
}

function UploadImage() {
  return (
    <Button onClick={() => alert('uploading image!')}>Upload Image</Button>
  );
}

function Toolbar() {
  return (
    <div>
      <PlayMovie onSmash={() => alert('playing movie')} movie="gold" />
      <UploadImage />
    </div>
  );
}

root.render(<Toolbar />);
