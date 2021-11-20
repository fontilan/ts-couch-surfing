const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
import { LoyaltyUser } from "./enums.js";

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: string
) {
  const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay!.innerHTML = `
    total reviews: ${value.toString()}
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
