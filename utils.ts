const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
import { LoyaltyUser, Permissiones } from "./enums.js";
import Review from "./interfaces.js";

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: string
) {
  const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay!.innerHTML = `
    ${value.toString()} review${makeMultiple(value)}
    |
    last reviewed by ${reviewer}
    ${iconDisplay}
  `;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay!.innerHTML = "back";
  }
  userNameDisplay!.innerHTML += userName;
}

export function showDetails(
  value: boolean | Permissiones,
  element: HTMLDivElement,
  price: number
) {
  if (value) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

export function makeMultiple(value: number): string {
  if (value > 1 || value === 0) {
    return "s";
  } else return "";
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
