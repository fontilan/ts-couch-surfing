"use strict";
// import { showReviewTotal, populateUser } from "./utils";
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var reviewTotalDisplay = document.querySelector("#reviews");
var propertiesEl = document.querySelector(".properties");
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? "⭐" : "";
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
// The above can be moved to a separate file, but at the moment I don't know how :(
//
//
var isOpen;
// Reviews
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: true,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: false,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: true,
        date: "27-03-2021",
    },
];
// User
var you = {
    firstName: "Bobby",
    lastName: "Brown",
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
        contact: "marywinkle@gmail.com",
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
        contact: "jimdavies@hotmail.com",
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
        contact: "joejones@outlook.com",
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
