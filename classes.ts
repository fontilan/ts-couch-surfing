import { Review } from "./interfaces.js";

export default class MainProperty {
  reviews: Review[];
  src: string;
  title: string;
  constructor(reviews: Review[], src: string, title: string) {
    (this.reviews = reviews), (this.src = src), (this.title = title);
  }
}
