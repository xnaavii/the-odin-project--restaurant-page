import margheritaImage from "./assets/margherita.jpg";
import pepperoniImage from "./assets/pepperoni.jpg";
import pineappleImage from "./assets/pineapple.jpg";

const MENU = [
  {
    id: "margherita",
    name: "Margherita",
    description: "Cheesus!",
    image: margheritaImage,
    price: 16,
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    image: pepperoniImage,
    description: "A certified hood classic.",
    price: 18,
  },
  {
    id: "pineapple",
    name: "Pineapple",
    image: pineappleImage,
    description: "The controversial one...",
    price: 16,
  },
];

export default MENU;
