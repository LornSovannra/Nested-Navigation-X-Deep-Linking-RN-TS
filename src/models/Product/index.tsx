export default class Product {
  id: number;
  title: string;
  price: number;
  image: string;

  constructor(id: number, title: string, price: number, image: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
  }
}
