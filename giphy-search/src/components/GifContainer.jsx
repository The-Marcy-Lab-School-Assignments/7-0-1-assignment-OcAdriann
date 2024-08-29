function GifContainer({ gifs }) {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}

export default GifContainer;
