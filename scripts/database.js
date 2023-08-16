const database = {
    fish: [
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Altum-Angelfish-in-Planted-Tank.png",
            species: "Pterophyllum scalare",
            name: "Charlie",
            size: 6,
            location: "South America",
            food: "Small Crustaceans",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Fantail-Goldfish-Swimming-768x512.jpg",
            species: "Carassius auratus",
            name: "Goldie",
            size: 10,
            location: "East Asia",
            food: "Fish Flakes",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/discus-fish-390743_960_720_large-1.jpg",
            species: "Symphysodon discus",
            name: "Saucy Boi",
            size: 6,
            location: "South America",
            food: "Fish Flakes",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/How-Do-Molly-Fish-Look-Like.png",
            species: "Poecilia sphenops",
            name: "Polly",
            size: 3,
            location: "North & South America",
            food: "Pellets",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Blue-Grass-Guppy.png",
            species: "Poecilia reticulata",
            name: "Gupps",
            size: 2,
            location: "South America",
            food: "Brine Shrimp",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Swordtail-Fish-in-Planted-Tank.png",
            species: "Xiphophorus hellerii",
            name: "Excalibur",
            size: 4,
            locations: "Central America",
            food: "Bug Larvae",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Sunset-Platy-768x441.png",
            species: "Xiphophorus maculatus",
            name: "Perry",
            size: 3,
            location: "Mexico & Central America",
            food: "Pellets",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/African-Cichlids-in-a-Rock-Aquarium.png",
            species: "Pseudotropheus",
            name: "Giga Chad",
            size: 15,
            location: "African Rift Lakes",
            food: "Algae",
        },
        {
            image: "https://aquariumstoredepot.com/wp-content/uploads/Firemouth-Cichlid-Aquarium.png",
            species: "Astronotus",
            name: "Lance",
            size: 16,
            location: "North & South America",
            food: "Bug Larvae",
        },
    ],
    cleaningTips: [
        {
            item: "Regular Schedule",
            tip: "Set a consistent cleaning schedule based on the size of your tank and the number of fish you have. Generally, a partial water change of 20-30% should be done every 1-2 weeks.",
        },
        {
            item: "Gather Supplies",
            tip: "Before you start, gather all necessary supplies such as a siphon gravel cleaner, algae scrubber, buckets, dechlorinator, and a clean cloth or sponge.",
        },
        {
            item: "Unplug Equipment",
            tip: "Turn off and unplug any electrical equipment like heaters and filters to ensure safety while cleaning.",
        },
        {
            item: "Partial Water Change",
            tip: "Use a siphon gravel cleaner to remove debris from the substrate during the water change. Remove about 20-30% of the water and replace it with fresh, dechlorinated water.",
        },
        {
            item: "Clean Decorations",
            tip: "Gently scrub and clean any decorations or ornaments in the tank using an algae scrubber or a cloth. Avoid using soap or chemicals that could harm the fish.",
        },
        {
            item: "Glass/ Acrylic Cleaning",
            tip: "Clean the tank walls with an appropriate aquarium-safe glass or acrylic cleaner. Wipe away algae buildup without scratching the surface.",
        },
        {
            item: "Filter Maintenance",
            tip: "Check the filter for debris and rinse the filter media in a bucket of tank water to avoid killing beneficial bacteria. Replace filter media as needed based on the manufacturer's recommendations.",
        },
        {
            item: "Test Water Parameters",
            tip: "Regularly test the water for parameters like ammonia, nitrite, nitrate, and pH. This helps you monitor the tank's health and catch any issues early.",
        },
        {
            item: "Avoid Overfeeding",
            tip: "Overfeeding leads to excess waste and poor water quality. Feed your fish only what they can consume in a few minutes to minimize waste buildup.",
        },
        {
            item: "Observe Fish Behavior",
            tip: "While cleaning, observe your fish for any signs of stress, disease, or abnormal behavior. This can help you address any health issues promptly.",
        },
    ],
    travelTips: [
        {
            item: "Plan Ahead",
            tip: "Give yourself ample time to plan for the trip. Rushing can lead to mistakes and stress for both you and your fish.",
        },
        {
            item: "Choose the Right Container",
            tip: "Use a sturdy, leak-proof container to transport your fish. A plastic fish bag or a dedicated fish transport container with a secure lid is ideal.",
        },
        {
            item: "Prepare Fish Bags",
            tip: "",
        },
        {
            item: "Tank Water",
            tip: "",
        },
        {
            item: "Gradual Acclimation",
            tip: "",
        },
        {
            item: "Limit Food",
            tip: "",
        },
        {
            item: "Secure the Container",
            tip: "",
        },
        {
            item: "Insulate and Stabilize",
            tip: "",
        },
        {
            item: "Temperature Consideration",
            tip: "",
        },
        {
            item: "Stay Informed",
            tip: "",
        },
        {
            item: "Avoid Stressful Journeys",
            tip: "",
        },
        {
            item: "Stay Calm",
            tip: "",
        },
        {
            item: "Emergency Kit",
            tip: "",
        },
        {
            item: "Health Check",
            tip: "",
        },
        {
            item: "Gradual Return",
            tip: "",
        },
    ],
}

// Exports the fish array
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getCleaningTips = () => {
    return database.cleaningTips.map(cleaningTips => ({...cleaningTips}))
}