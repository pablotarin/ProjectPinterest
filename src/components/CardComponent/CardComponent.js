import "./CardComponent.css";
import { access_key } from "../../data/accessKey";

export const CardComponent = async () => {
  const app = document.querySelector("#app");
  const img = document.createElement("img");
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${access_key}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);
  img.src = data.urls.small;
  img.alt = data.alt_description || "Imagen aleatoria";

  app.append(img);
};
