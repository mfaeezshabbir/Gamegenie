const games = [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.",
      imageSrc: "/images/game1.jpg",
      platform: "Nintendo Switch",
      genre: "Action-Adventure",
      rating: 9.5,
    },
    {
      id: 2,
      title: "Super Mario Odyssey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.",
      imageSrc: "/images/game2.jpg",
      platform: "Nintendo Switch",
      genre: "Platformer",
      rating: 9.7,
    },
    // Add more games here
  ];
  
  export default (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(games);
  };
  