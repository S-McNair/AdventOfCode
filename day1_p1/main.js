//Advent of Code 2020
//Day 1 Problem 1: https://adventofcode.com/2020/day/1
//given an input array find the pair that when added together = 2020 and then mulitply that pair and return the product
const fs = require('fs')
const text = fs.readFileSync("./input.txt", "utf-8");
const inputArray = text.split('\n')
const key = 2020

const finalProduct = (inputArray) => {
    const finalPair = inputArray.filter((int) => {
        const glassSlipper = (key - int)
        if (inputArray.includes(glassSlipper.toString())) return glassSlipper
    })
    const finalAns = (finalPair[0] * finalPair[1])
    console.log(`finalAns: ${finalAns}`)
}

finalProduct(inputArray)