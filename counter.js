/**
 * Passenger Counter
 * This app is meant to help count and record number of passengers entering a subway station.
 */

//set up variables for count, counter, and prevCounts
//make counter render count on page
let count = 0
let counter = document.getElementById("count-el")
let prevCounts = document.getElementById("prev-counts")
counter.innerText = count;

//increment function that increments the count/counter by 1 when increment button is clicked
const increment = () => {
  count++
  counter.innerText = count
}

//save function that adds the count to the prev-count paragraph element and then zeros out the count
const save = () => {
  prevCounts.innerHTML += count + " - "
  count = 0
  counter.innerText = count
}