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
`

type Game = {
  title: string,
  genres: string[]
}

type GameInfo = {
  games: Game[]
}

// JSON.parse() の結果を型アサーションして受け取る
const gameInfo = JSON.parse(jsonText) as GameInfo
gameInfo.games.forEach((game) => {
  console.log(game.title)
  console.log(game.genres)
})