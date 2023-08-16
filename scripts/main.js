// Imports and console logs the database's fish array

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Imports the FishList() function from FishList.js

import { FishList } from './FishList.js'

console.log(FishList());

const parentHTMLElement = document.querySelector(".fish__list")

parentHTMLElement.innerHTML = FishList()