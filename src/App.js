import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
const App = ()=>(
   <div>
     <Logo appName="Pokedex" />
     <BestPokemon ability={abilities} />
     <CaughtPokemon date={date} />
   </div>
 );

export default App;
