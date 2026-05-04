module LuciansLusciousLasagna

let expectedMinutesInOven = 40

let remainingMinutesInOven numMinCooked = expectedMinutesInOven - numMinCooked

let preparationTimeInMinutes numLayers = 2 * numLayers

let elapsedTimeInMinutes numLayers numMinCooked = preparationTimeInMinutes numLayers + numMinCooked
