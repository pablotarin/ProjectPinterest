import "./NavButton.css";

export const NavButton = ({ src, alt }) => {
  const a = document.createElement("a");
  const img = document.createElement("img");

  img.src = src;
  img.alt = alt;

  a.classList.add("navButton");
  a.append(img);

  return a;
};
