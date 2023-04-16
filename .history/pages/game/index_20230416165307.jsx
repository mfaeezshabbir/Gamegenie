export default function handler(req, res) {
    const games = [{ id: 1, title: "The Legend of Zelda: Breath of the Wild", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.", imageSrc: "/images/The Legend of Zelda.jpg", platform: "Nintendo Switch", genre: "Action-Adventure", rating: 9.5, }, { id: 2, title: "Super Mario Odyssey", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.", imageSrc: "/images/Super Mario Odyssey.jpg", platform: "Nintendo Switch", genre: "Platformer", rating: 9.4, }, { id: 3, title: "Animal Crossing: New Horizons", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla nec eleifend malesuada, erat lacus convallis sapien, vitae auctor elit neque vel lectus.", imageSrc: "/images/Animal Crossing New Horizons.jpg", platform: "Nintendo Switch", genre: "Life Simulation", rating: 9.3, },];

    res.status(200).json(games);
}
