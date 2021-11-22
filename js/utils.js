const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
import { LoyaltyUser } from "./enums.js";
export function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML = `
    ${value.toString()} review${makeMultiple(value)}
    |
    last reviewed by ${reviewer}
    ${iconDisplay}
  `;
}
export function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML += userName;
}
export function showDetails(authorityStatus, element, price) {
    if (isLoggedIn) {
        const priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        element.appendChild(priceDisplay);
    }
}
export function makeMultiple(value) {
    if (value > 1 || value === 0) {
        return "s";
    }
    else
        return "";
}
export function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
