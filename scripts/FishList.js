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
    const htmlString = '<section class="fish__list">'

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
                    <p class="fish__name">${fish.name}</p>
                    <p class="fish__species">${fish.species}</p>
                    <p class="fish__location">${fish.location}</p>
                    <p class="fish__food">${fish.food}</p>
                </div>
            </div>
            `
    }
    htmlString += `</section>`

    return htmlString
}