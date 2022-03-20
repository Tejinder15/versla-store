import { v4 as uuid } from "uuid";
import {cat1,cat2,cat3,cat4,cat5,cat6} from "../../Images/Categories";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "T-shirt",
    image: cat1
  },
  {
    _id: uuid(),
    categoryName: "Shirt",
    image: cat2
  },
  {
    _id: uuid(),
    categoryName: "Dress",
    image: cat3
  },
  {
    _id: uuid(),
    categoryName: "Jackets",
    image: cat4
  },
  {
    _id: uuid(),
    categoryName: "Shorts",
    image: cat5
  },
  {
    _id: uuid(),
    categoryName: "Pants",
    image: cat6
  }
];
