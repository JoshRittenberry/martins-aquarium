import { getCleaningTips } from './database.js'

const allCleaningTips = getCleaningTips()

// The code below creates HTML elements to be placed in my index.html page
export const CleaningTips = () => {

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Creates HTML representations of each holyFish here
    for (const tips of allCleaningTips) {

        htmlString += 
            `
            <li><strong>${tips.item}:</strong> ${tips.tip}</li>
            `
    }

    return htmlString
}