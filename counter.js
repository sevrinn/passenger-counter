/**
 * Passenger Counter
 * This app is meant to help count and record number of passengers entering a subway station.
 * 
 */

let count = 0
let counter = document.getElementById("count-el")
let prevCounts = document.getElementById("prev-counts")
counter.innerText = count;

const increment = () => {
  // console.log("button clicked")
  count++
  counter.innerText = count
}

const save = () => {
  console.log("save clicked")
  prevCounts.innerHTML += count + " - "
  count = 0
  counter.innerText = count
}