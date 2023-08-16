import { getTravelTips } from './database.js'

import { getTravelLocations } from './database.js'

const allTravelTips = getTravelTips()

const allTravelLocations = getTravelLocations()

// The code below creates HTML elements to be placed in my index.html page
export const TravelTips = () => {

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Creates HTML representations of each holyFish here
    for (const tips of allTravelTips) {

        htmlString += 
            `
            <li><strong>${tips.item}:</strong> ${tips.tip}</li>
            `
    }

    return htmlString
}

export const TravelLocations = () => {

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Creates HTML representations of each holyFish here
    for (const location of allTravelLocations) {

        htmlString += 
            `
            <li>${location.location}</li>
            `
    }

    return htmlString
}