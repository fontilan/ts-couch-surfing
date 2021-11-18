"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateUser = exports.showReviewTotal = void 0;
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var reviewTotalDisplay = document.querySelector("#reviews");
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? "⭐" : "";
    reviewTotalDisplay.innerHTML = "\n    total reviews: " + value.toString() + "\n    |\n    last reviewed by " + reviewer + "\n    " + iconDisplay + "\n  ";
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML += userName;
}
exports.populateUser = populateUser;
