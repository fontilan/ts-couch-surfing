// import { showReviewTotal, populateUser } from "./utils";
// import { Permissiones, LoyaltyUser } from "./enums";
// import { Price, Country } from "./types";
//
//
//
// MOVE THIS TO A SEPARATE FILE
//
//
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");

function showReviewTotal(value: number, reviewer: string, isLoyalty: string) {
  const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay!.innerHTML = `
    ${value.toString()} review${makeMultiple(value)}
    |
    last reviewed by ${reviewer}
    ${iconDisplay}
  `;
}

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay!.innerHTML = "back";
  }
  userNameDisplay!.innerHTML += userName;
}

function showDetails(
  authorityStatus: boolean | Permissiones,
  element: HTMLDivElement,
  price: number
) {
  if (isLoggedIn) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

function add(firstValue: number, secondValue: number): number {
  return firstValue + secondValue;
}

function makeMultiple(value: number): string {
  if (value > 1 || value === 0) {
    return "s";
  } else return "";
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
enum Permissiones {
  ADMIN,
  READ_ONLY,
}

enum LoyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}
// //
// //
//
//
//

const propertiesEl = document.querySelector(".properties");
const footerEl = document.querySelector(".footer");

let isOpen: boolean;
let isLoggedIn: boolean;

// Reviews
const reviews: (
  | {
      name: string;
      stars: number;
      loyaltyUser: LoyaltyUser;
      date: string;
    }
  | {
      name: string;
      stars: number;
      loyaltyUser: LoyaltyUser;
      date: string;
      description: string;
    }
)[] = [
  //
  // alternative to the above union type, does the job but it is not optimal
  //
  // const reviews: any[] = [
  //
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
    description: "Great hosts, location was a bit further than said",
  },
];

const ADMIN = "admin";
const READ_ONLY = "read-only";

const you: {
  firstName: string;
  lastName: string;
  permissions: Permissiones;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
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
//
//
//
// // type Alias
type Price = 45 | 30 | 25;
type Country = "Colombia" | "Poland" | "United Kingdom";
//
//
// MOVE THE ABOVE TO A SEPARATE FILE
//
//
//

// Array of Properties
const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    postcode: number;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
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

let authorityStatus: any;
isLoggedIn = true;

// Add the properties - this is a lot of new stuff !!
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  propertiesEl?.appendChild(card);
  showDetails(you.permissions, card, properties[i].price);
}

// use your location, your current time, and current temperature of your location
let currentLocation: [string, string, number] = ["Kraków", "15:00", 12];
footerEl!.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;
