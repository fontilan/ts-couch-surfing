"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopTwoReviews = exports.makeMultiple = exports.showDetails = exports.populateUser = exports.showReviewTotal = void 0;
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var reviewTotalDisplay = document.querySelector("#reviews");
var enums_js_1 = require("./enums.js");
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty === enums_js_1.LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML = "\n    " + value.toString() + " review" + makeMultiple(value) + "\n    |\n    last reviewed by " + reviewer + "\n    " + iconDisplay + "\n  ";
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML += userName;
}
exports.populateUser = populateUser;
function showDetails(authorityStatus, element, price) {
    if (isLoggedIn) {
        var priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        element.appendChild(priceDisplay);
    }
}
exports.showDetails = showDetails;
function makeMultiple(value) {
    if (value > 1 || value === 0) {
        return "s";
    }
    else
        return "";
}
exports.makeMultiple = makeMultiple;
function getTopTwoReviews(reviews) {
    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });
    return sortedReviews.slice(0, 2);
}
exports.getTopTwoReviews = getTopTwoReviews;
