"use strict";
// import { showReviewTotal, populateUser } from "./utils";
// import { Permissiones, LoyaltyUser } from "./enums";
// import { Price, Country } from "./types";
// import { Review } from "./interfaces";
//
//
//
// MOVE THIS TO A SEPARATE FILE UTILS.JS
//
//
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML = `
    ${value.toString()} review${makeMultiple(value)}
    |
    last reviewed by ${reviewer}
    ${iconDisplay}
  `;
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML += userName;
}
function showDetails(authorityStatus, element, price) {
    if (isLoggedIn) {
        const priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        element.appendChild(priceDisplay);
    }
}
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
function makeMultiple(value) {
    if (value > 1 || value === 0) {
        return "s";
    }
    else
        return "";
}
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
//
//
//
//
//
//
// MOVE THIS TO ANOTHER SEPARATE FILE ENUMS.TS
//
//
var Permissiones;
(function (Permissiones) {
    Permissiones[Permissiones["ADMIN"] = 0] = "ADMIN";
    Permissiones[Permissiones["READ_ONLY"] = 1] = "READ_ONLY";
})(Permissiones || (Permissiones = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
//
//
//
//
//
const propertiesEl = document.querySelector(".properties");
const footerEl = document.querySelector(".footer");
const reviewContainer = document.querySelector(".reviews");
const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");
let isOpen;
let isLoggedIn;
//
//
//
//
//
// Reviews
const reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: "27-03-2021",
    },
];
const ADMIN = "admin";
const READ_ONLY = "read-only";
const you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: Permissiones.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
console.log(you.firstName);
//
//
// MOVE THE ABOVE TO A SEPARATE FILE TYPES.TS
//
//
//
// Array of Properties
const properties = [
    {
        image: "images/colombia-property.jpg",
        title: "Colombian Shack",
        price: 45,
        location: {
            firstLine: "shack 37",
            city: "Bogota",
            postcode: 45632,
            country: "Colombia",
        },
        contact: [+1123495082908, "marywinkle@gmail.com"],
        isAvailable: true,
    },
    {
        image: "images/poland-property.jpg",
        title: "Polish Cottage",
        price: 34,
        location: {
            firstLine: "no 23",
            city: "Gdansk",
            postcode: 34904,
            country: "Poland",
        },
        contact: [+1123495082908, "jimdavies@hotmail.com"],
        isAvailable: false,
    },
    {
        image: "images/london-property.jpg",
        title: "London flat",
        price: 23,
        location: {
            firstLine: "flat 75",
            city: "London",
            postcode: 444984,
            country: "United Kingdom",
        },
        contact: [+1123495082908, "joejones@outlook.com"],
        isAvailable: true,
    },
];
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
let authorityStatus;
isLoggedIn = true;
// Add the properties - this is a lot of new stuff !!
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    const image = document.createElement("img");
    image.setAttribute("src", properties[i].image);
    card.appendChild(image);
    propertiesEl === null || propertiesEl === void 0 ? void 0 : propertiesEl.appendChild(card);
    showDetails(you.permissions, card, properties[i].price);
    propertiesEl === null || propertiesEl === void 0 ? void 0 : propertiesEl.appendChild(card);
}
let count = 0;
function addReviews(reviews) {
    if (!count) {
        count++;
        const topTwo = getTopTwoReviews(reviews);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement("div");
            card.classList.add("review-card");
            card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        containerEl.removeChild(buttonEl);
    }
}
buttonEl.addEventListener("click", () => addReviews(reviews));
// use your location, your current time, and current temperature of your location
let currentLocation = ["Kraków", "15:00", 12];
footerEl.innerHTML = `${currentLocation[0]}, ${currentLocation[1]}, ${currentLocation[2]}°`;
