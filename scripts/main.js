// Imports the FishList() function from FishList.js
import { FishList } from './fish.js'

const fishList = document.querySelector(".fish__list")

fishList.innerHTML = FishList()



// Imports the CleaningTips() function from cleaning.js
import { CleaningTips } from './cleaning.js'

const cleaningTips = document.querySelector(".cleaning__list")

cleaningTips.innerHTML = CleaningTips()



// Imports the TravelTips() function from travel.js
import { TravelTips } from './travel.js'

const travelTips = document.querySelector(".tips__list")

travelTips.innerHTML = TravelTips()


// Imports the TravelLocations() function from travel.js
import { TravelLocations } from './travel.js'

const travelLocations = document.querySelector(".locations__list")

travelLocations.innerHTML = TravelLocations()