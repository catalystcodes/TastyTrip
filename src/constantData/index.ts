import DrinkIcon from "../components/atoms/icon/DrinkIcon";
import CakeIcon from "../components/atoms/icon/cakeIcon";
import ThumbsDownWithBg from "../components/atoms/icon/thumbsDownWithBg";
import ThumbsUpWithBg from "../components/atoms/icon/thumbsUpWithBg";

width: 414;
height: 896;

export const foodCategory = [
  {
    name: "Drink",
    Icon: DrinkIcon,
  },
  {
    name: "Food",
    Icon: CakeIcon,
  },
  {
    name: "Cake",
    Icon: CakeIcon,
  },
  {
    name: "Snacks",
    Icon: CakeIcon,
  },
] as const;

export const FoodMenu = [
  {
    source: require("../assets/burgers.png"),
  },
  {
    source: require("../assets/Pizza.png"),
  },
  {
    source: require("../assets/BBQ.png"),
  },
  {
    source: require("../assets/fruit.png"),
  },
  {
    source: require("../assets/sushi.png"),
  },
  {
    source: require("../assets/noodle.png"),
  },
];

export const NearbyRestaurants = [
  {
    name: "Dapur Ijah Restaurant",
    address: "13 th Street, 46 W 12th St, NY",
    duration: "3 min - 1.1 km",
    rate: require("../assets/rate.png"),
    image: require("../assets/resImage.png"),
  },
];

export const ReviewFood = [
  {
    brandName: "Dogmie jagong tutung",
    price: 99.99,
    image: require("../assets/food.png"),
    thumbsUp: "999+ | ",
    thumbsDown: "93+",
    icon1: "thumbsUp",
    icon2: "thumbsDown",
  },
  {
    brandName: "Dogmie jagong tutung",
    price: 99.99,
    image: require("../assets/food.png"),
    thumbsUp: "999+ | ",
    thumbsDown: "93+",
    icon1: "thumbsUp",
    icon2: "thumbsDown",
  },
  {
    brandName: "Dogmie jagong tutung",
    price: 99.99,
    image: require("../assets/food.png"),
    thumbsUp: "   999+ | ",
    thumbsDown: "93+",
    icon1: "thumbsUp",
    icon2: "thumbsDown",
  },
] as const;

export const proflieDetails = [
  { profileTitle: "My Profile" },
  { profileTitle: "Change Password" },
  { profileTitle: "Payment Settings" },
  { profileTitle: "My Voucher" },
  { profileTitle: "Notification" },
  { profileTitle: "About Us" },
  { profileTitle: "Contact Us" },
];
