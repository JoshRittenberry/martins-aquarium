import { getTravelTips } from './database.js'

const allTravelTips = getTravelTips()

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