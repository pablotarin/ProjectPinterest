import "./ImageCardComponent.css";
import { CardButton } from "../CardButton/CardButton";

export const ImageCardComponnent = ({ src, alt }) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.classList.add("imgDiv");

  div.classList.add('imgCardDiv');
  const a = CardButton();
  div.append(img, a);

  return div;
};
