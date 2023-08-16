// The code below imports the array from database.js
import { getFish } from './database.js'

const allFish = getFish()

// The code below will find and create new arrays to hold Martin's holy fish
export const mostHolyFish = () => {
    const holyFish = []

    // This loop iterates through my fish array and separates all the fish into a new, properly named, array.
    for (var i = 0; i < allFish.length; i++) {
        const fish = allFish[i]

        // This if statement will divide the size of the fish by 3 and, if it is a whole number, will push it into the holyFish array
        if (Number.isInteger(fish.size / 3)) {
            holyFish.push(fish)
        } 
    }   

    return holyFish
}

// The code below will find and create new arrays to hold Martin's soldier fish
export const soldierFish = () => {
    const soldiers = []

    for (var i = 0; i < allFish.length; i++) {
        const fish = allFish[i]
        if (Number.isInteger(fish.size / 5)) {
            soldiers.push(fish)
        }
    }

    return soldiers
}

// The code below will find and create new arrays to hold Martin's regular fish
export const nonHolyFish = () => {
    const regularFish = []

    for (var i = 0; i < allFish.length; i++) {
        const fish = allFish[i]
        if (!Number.isInteger(fish.size / 3) && !Number.isInteger(fish.size / 5))
            regularFish.push(fish)
    }

    return regularFish
}

// The code below creates HTML elements to be placed in my index.html page
export const FishList = () => {
    // Invoke the function that you imported from the database module
    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const regularFish = nonHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Creates HTML representations of each holyFish here
    for (const fish of holyFish) {

        htmlString += 
            `
            <div class="fish__container">
                <div class="fish__pictureContainer">
                    <img class="fish__picture" src="${fish.image}">
                </div>
                <div class="fish__info">
                    <p class="fish__name"><strong>Name: </strong>${fish.name}</p>
                    <p class="fish__size"><strong>Size: </strong>${fish.size}"</p>
                    <p class="fish__species"><strong>Species: </strong>${fish.species}</p>
                    <p class="fish__location"><strong>Native Location: </strong>${fish.location}</p>
                    <p class="fish__food"><strong>Diet: </strong>${fish.food}</p>
                </div>
            </div>
            `
    }

    // Creates HTML representations of each soldier here
    for (const fish of soldiers) {

        htmlString += 
            `
            <div class="fish__container">
                <div class="fish__pictureContainer">
                    <img class="fish__picture" src="${fish.image}">
                </div>
                <div class="fish__info">
                    <p class="fish__name"><strong>Name: </strong>${fish.name}</p>
                    <p class="fish__size"><strong>Size: </strong>${fish.size}"</p>
                    <p class="fish__species"><strong>Species: </strong>${fish.species}</p>
                    <p class="fish__location"><strong>Native Location: </strong>${fish.location}</p>
                    <p class="fish__food"><strong>Diet: </strong>${fish.food}</p>
                </div>
            </div>
            `
    }

    // Creates HTML representations of each regularFish here
    for (const fish of regularFish) {

        htmlString += 
            `
            <div class="fish__container">
                <div class="fish__pictureContainer">
                    <img class="fish__picture" src="${fish.image}">
                </div>
                <div class="fish__info">
                    <p class="fish__name"><strong>Name: </strong>${fish.name}</p>
                    <p class="fish__size"><strong>Size: </strong>${fish.size}"</p>
                    <p class="fish__species"><strong>Species: </strong>${fish.species}</p>
                    <p class="fish__location"><strong>Native Location: </strong>${fish.location}</p>
                    <p class="fish__food"><strong>Diet: </strong>${fish.food}</p>
                </div>
            </div>
            `
    }

    return htmlString
}

