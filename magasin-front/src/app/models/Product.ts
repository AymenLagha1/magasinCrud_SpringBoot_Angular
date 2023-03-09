import { Category } from "./Category";

export class Product {
    id?:number;
    name?: String;
    description?:String;
    category?:Category;
    quantity?:number;
    price?:number;
    photo?:File;
  }
  