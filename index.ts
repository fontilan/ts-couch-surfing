// import { showReviewTotal, populateUser } from "./utils";
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
const propertiesEl = document.querySelector(".properties");

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  reviewTotalDisplay!.innerHTML = `
    total reviews: ${value.toString()}
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
//
//
// The above can be moved to a separate file, but at the moment I don't know how :(
//
//

let isOpen: boolean;

// Reviews
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
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
const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

console.log(you.firstName);

// Array of Properties
const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    postcode: number;
    country: string;
  };
  contact: string;
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
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  propertiesEl?.appendChild(card);
}
