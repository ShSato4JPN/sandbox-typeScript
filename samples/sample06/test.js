"use strict";
const jsonText = `{
  "games": [
    {
      "title": "Title1",
      "genres": ["ACT"]
    },
    {
      "title": "Title2",
      "genres": ["ACT", "RPG"]
    },
    {
      "title": "Title3",
      "genres": ["STG"],
      "note": "Fantastic shooting game"
    }
  ]
}
`;
// JSON.parse() の結果を型アサーションして受け取る
const gameInfo = JSON.parse(jsonText);
gameInfo.games.forEach((game) => {
    console.log(game.title);
    console.log(game.genres);
});
