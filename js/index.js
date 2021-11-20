"use strict";
// import { showReviewTotal, populateUser } from "./utils.js";
// import { Permissiones, LoyaltyUser } from "./enums.js";
//
//
//
// MOVE THIS TO A SEPARATE FILE
//
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var reviewTotalDisplay = document.querySelector("#reviews");
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML = "\n    total reviews: " + value.toString() + "\n    |\n    last reviewed by " + reviewer + "\n    " + iconDisplay + "\n  ";
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML += userName;
}
//
//
//
//
//
//
//
// MOVE THIS TO ANOTHER SEPARATE FILE
//
// //
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
var propertiesEl = document.querySelector(".properties");
var footerEl = document.querySelector(".footer");
var isOpen;
// Reviews
var reviews = [
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
var ADMIN = "admin";
var READ_ONLY = "read-only";
var you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: Permissiones.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
console.log(you.firstName);
// Array of Properties
var properties = [
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
        price: 55,
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
// Add the properties - this is a lot of new stuff !!
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    var image = document.createElement("img");
    image.setAttribute("src", properties[i].image);
    card.appendChild(image);
    propertiesEl === null || propertiesEl === void 0 ? void 0 : propertiesEl.appendChild(card);
}
// use your location, your current time, and current temperature of your location
var currentLocation = ["Kraków", "15:00", 12];
footerEl.innerHTML = currentLocation[0] + " " + currentLocation[1] + " " + currentLocation[2] + "\u00B0";
