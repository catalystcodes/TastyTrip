import DrinkIcon from "../components/atoms/icon/DrinkIcon";
import CakeIcon from "../components/atoms/icon/cakeIcon";

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
