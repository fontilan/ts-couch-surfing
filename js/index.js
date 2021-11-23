import { showReviewTotal, populateUser, getTopTwoReviews, showDetails, } from "./utils.js";
import { Permissiones, LoyaltyUser } from "./enums.js";
import MainProperty from "./classes.js";
const propertiesEl = document.querySelector(".properties");
const footerEl = document.querySelector(".footer");
const reviewContainer = document.querySelector(".reviews");
const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");
let isLoggedIn;
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
const you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: Permissiones.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
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
        price: 30,
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
        price: 25,
        location: {
            firstLine: "flat 75",
            city: "London",
            postcode: "SW4 5XW",
            country: "United Kingdom",
        },
        contact: [+1123495082908, "joejones@outlook.com"],
        isAvailable: true,
    },
    {
        image: "images/malaysia-property.jpg",
        title: "Malia Hotel",
        price: 35,
        location: {
            firstLine: "Room 4",
            city: "Malia",
            postcode: 45334,
            country: "Malaysia",
        },
        contact: [+60349822083, "lee34@gmail.com"],
        isAvailable: false,
    },
];
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
// isLoggedIn = true;
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
// Add top two reviews
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
// This is for the footer
let currentLocation = ["Kraków", "15:00", 12];
footerEl.innerHTML = `${currentLocation[0]}, ${currentLocation[1]}, ${currentLocation[2]}°`;
// the main property, biggest on top of the page
let yourMainProperty = new MainProperty([
    {
        name: "Olive",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "12-04-2021",
    },
], "images/italian-property.jpg", "Italian Property");
const mainImageContainer = document.querySelector(".main-image");
const image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
mainImageContainer === null || mainImageContainer === void 0 ? void 0 : mainImageContainer.appendChild(image);
