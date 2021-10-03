const Logo = (props) => {
  const appName = props.appName;
  console.log(props);
  return (
    <header>
      <h1>{appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="bird"
      ></img>
    </header>
  );
};

export default Logo;
