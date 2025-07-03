type Pokemon = {
  name: string;
  no: number;
  genre: string;
  height: number;
  weight: number;
};
const pikachu: Pokemon = {
  name: "pikachu",
  no: 25,
  genre: "mouse pokémon",
  height: 0.4,
  weight: 6.0,
};
const raichu = {
  name: "raichu",
  no: 26,
  genre: "mouse pokémon",
  height: 0.8,
  weight: 30.0,
} satisfies Pokemon;
