// Imports the FishList() function from FishList.js
import { FishList } from './fish.js'

const fishList = document.querySelector(".fish__list")

fishList.innerHTML = FishList()



// Imports the CleaningTips() function from cleaning.js
import { CleaningTips } from './cleaning.js'

const cleaningTips = document.querySelector(".cleaning__list")

cleaningTips.innerHTML = CleaningTips()



// Imports the CleaningTips() function from cleaning.js
import { TravelTips } from './travel.js'

const travelTips = document.querySelector(".tips__list")

travelTips.innerHTML = TravelTips()