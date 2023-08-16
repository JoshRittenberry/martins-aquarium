// Import the function that returns a copy of the fish array

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = allFish

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += 
            `
            <div class="fish__container">
                <div class="fish__pictureContainer">
                    <img class="fish__picture" src="${fish.image}">
                </div>
                <div class="fish__info">
                    <p class="fish__name"><strong>Name: </strong>${fish.name}</p>
                    <p class="fish__species"><strong>Species: </strong>${fish.species}</p>
                    <p class="fish__location"><strong>Native Location: </strong>${fish.location}</p>
                    <p class="fish__food"><strong>Food: </strong>${fish.food}</p>
                </div>
            </div>
            `
    }

    return htmlString
}