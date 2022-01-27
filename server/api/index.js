const res = require("express/lib/response");
const session = require("express-session");
const passport = require("passport");
const Router = require("express").Router();
const { Games, gameDatabase } = require("../database");
const { Op } = require("sequelize");
//require("./auth");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}


Router.use(session({ secret: "cats" }));
Router.use(passport.initialize());
Router.use(passport.session());
Router.use("/action", require("./actiongames"));
Router.use("/indie", require("./indiegames"));
Router.use("/adventure", require("./adventuregames"));
Router.use("/shooter", require("./shootergames"));
Router.use("/rpg", require("./rpggames"));

Router.get("/", (req, res) => {
  res.send('<a href ="/auth/google/"> "Login with Gmail" </a>');
});
Router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

Router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

Router.get("/auth/failure", (req, reas) => {
  res.send("Please try logging in again");
});

Router.get("/protected", isLoggedIn, (req, res) => {
  res.send("Hello");
});

Router.get("/all", async (req, res) => {
  try {
    const games = await Games.findAll({order: [["id", "ASC"]]}).then((games) => {
      res.send(games);
    });
  } catch (error) {
    res.send(error.message);
  }
});

Router.get("/leaderboard", async (req, res) => {
  try {
    var lb = { action: [], indie: [], adventure: [], rpg: [], shooter: [] };
    const games = await Games.findAll({
      where: {ourScore: { [Op.not]: ["0"] } },
      order: [['ourScore','DESC'],['numVotes','DESC']]
    });
    //sorting by metacritic rating
    for (let element of games) {
      if (lb.action.length < 5 && element.genres.includes("Action"))
        {lb.action.push(element);}
      if (lb.indie.length < 5 && element.genres.includes("Indie"))
        {lb.indie.push(element);}
      if (lb.adventure.length < 5 && element.genres.includes("Adventure"))
        {lb.adventure.push(element);}
      if (lb.rpg.length < 5 && element.genres.includes("RPG"))
        {lb.rpg.push(element);}
      if (lb.shooter.length < 5 && element.genres.includes("Shooter"))
        {lb.shooter.push(element);}
    }
    res.send(lb);
  } catch (error) {
    res.send(error.message)
  }
});

Router.get("/:id", async (req, res) => {
    try {
        const game = await Games.findByPk(req.params.id) 
        res.send(game)} 
    catch (error) {
      res.send(error.message)
    }
  });

Router.put("/:id/:score", async (req, res) => {
    try {
      const game = await Games.findByPk(req.params.id)
      await game.increment('numVotes')
      await game.increment(['numScores'],{by : req.params.score})
      let avg = Number((Number(game.numScores)/Number(game.numVotes)).toFixed(2))
      await game.update({ourScore:avg})
      res.send({numVotes: game.numVotes, numScores: game.numScores, ourScore: game.ourScore})} 
    catch (error) {
      res.send(error.message)
    }
  });

module.exports = Router;
