// import games from "./index";

// export default (req, res) => {
//   const { slug } = req.query;
//   const game = games.find((g) => g.slug === slug);
//   if (!game) {
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Game not found");
//     return;
//   }
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.json(game);
// };
