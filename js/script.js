// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Apr 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-01-JS/sw.js", {
    scope: "/ICS2O-Unit-5-01-JS/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  document.getElementById("demo").innerHTML = Math.floor(Math.random() * 6) + 1
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  document.getElementById("random-number").innerHTML =
    Math.floor(Math.random() * 6) + 1
}

// process
if (random - number == slider - value) {
  print("Congratulations!")
}
//  block of code to be executed if condition1 is true
else if (random - number != slider - value) {
  print("Try again!")
}
//  block of code to be executed if the condition1 is false and condition2 is true
