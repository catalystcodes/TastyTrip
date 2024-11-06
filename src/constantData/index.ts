import DrinkIcon from "../components/atoms/icon/DrinkIcon";
import CakeIcon from "../components/atoms/icon/cakeIcon";
import HomeIcon from "../components/atoms/icon/homeIcon";
import MyListIcon from "../components/atoms/icon/myListIcon";
import OrderIcon from "../components/atoms/icon/orderIcon";
import ProfileIcon from "../components/atoms/icon/prrofileIcon";
import ThumbsDownWithBg from "../components/atoms/icon/thumbsDownWithBg";
import ThumbsUpWithBg from "../components/atoms/icon/thumbsUpWithBg";
import { RootStackParams, profilePageTabsParams } from "../utils/type";

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

export const BottomTabIcon = [
  {
    name: "Home",
    Icon: HomeIcon,
  },
  {
    name: "Order",
    Icon: OrderIcon,
  },
  {
    name: "MyList",
    Icon: MyListIcon,
  },
  {
    name: "Profile",
    Icon: ProfileIcon,
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

export const ProfileDetails: {
  profileTitle: string;
  path: keyof profilePageTabsParams;
}[] = [
  { profileTitle: "My Profile", path: "myProfilePage" },
  { profileTitle: "Change Password", path: "changePasswordPage" },
  { profileTitle: "Payment Settings", path: "paymentSettingPage" },
  { profileTitle: "My Voucher", path: "myVoucherPage" },
  { profileTitle: "Notification", path: "NotificationPage" },
  { profileTitle: "About Us", path: "aboutUsPage" },
  { profileTitle: "Contact Us", path: "contactUsPage" },
];

export const PaymentSection = [
  {
    paymentTitle: "Paypal",
    regMode: "Itoh@gmail.com",
    image: require("../assets/paypalImage.png"),
  },
  {
    paymentTitle: "Credit Card",
    regMode: "4444 **** **** 6739",
    image: require("../assets/mastercardImage.png"),
  },
];

export const CreditCardDetails = [
  {
    bankName: "AZRAEN",
    userName: "Itoh",
    cardNumber: "4444 **** **** 6739",
    balance: "$12.999.999.99",
  },
];

export const MoreDetailsOnCardDetails = [
  {
    title: "Bank name",
    details: "AZRAEN Bank",
  },
  {
    title: "Your name",
    details: "Itoh",
  },
  {
    title: "Card number",
    details: "4444 3784 1380 6739",
  },
  {
    title: "Data",
    details: "02/22",
  },
  {
    title: "CVV",
    details: "877",
  },
];

export const Voucher = [
  {
    percentageOfSales: 30,
    dateElapsed: 11,
  },
];
