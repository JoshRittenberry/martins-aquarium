const database = {
    fish: [
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Altum-Angelfish-in-Planted-Tank.png",
            species: "Pterophyllum scalare",
            name: "Charlie",
            location: "South America",
            food: "Small Crustaceans",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Fantail-Goldfish-Swimming-768x512.jpg",
            species: "Carassius auratus",
            name: "Goldie",
            location: "East Asia",
            food: "Fish Flakes",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/discus-fish-390743_960_720_large-1.jpg",
            species: "Symphysodon discus",
            name: "Saucy Boi",
            location: "South America",
            food: "Fish Flakes",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/How-Do-Molly-Fish-Look-Like.png",
            species: "Poecilia sphenops",
            name: "Polly",
            location: "North & South America",
            food: "Pellets",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Blue-Grass-Guppy.png",
            species: "Poecilia reticulata",
            name: "Gupps",
            location: "South America",
            food: "Brine Shrimp",
        },
    ]
}

// Exports the fish array
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}