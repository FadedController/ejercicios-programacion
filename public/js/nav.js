// Generate links to examples
const navDiv = document.getElementById("nav");
const splitUrl = window.location.href.split("/");
const currentExample = parseFloat(
  splitUrl[splitUrl.length - 1].replace(".html", "")
);

const examples = [
  1, 2, 3, 4, 5, 6, 7, 8.1, 8.2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23
];

const prevExample = examples[examples.indexOf(currentExample) - 1];
const nextExample = examples[examples.indexOf(currentExample) + 1];

if (prevExample > 0) {
  const prevLink = document.createElement("a");
  prevLink.innerText = "Ir a ejemplo " + prevExample;
  prevLink.href = "./" + prevExample + ".html";
  navDiv.appendChild(prevLink);
}

const homeLink = document.createElement("a");
homeLink.innerText = "Volver a inicio";
homeLink.href = "../index.html";
navDiv.appendChild(homeLink);

if (nextExample <= examples[examples.length - 1]) {
  const nextLink = document.createElement("a");
  nextLink.innerText = "Ir a ejemplo " + nextExample;
  nextLink.href = "./" + nextExample + ".html";
  navDiv.appendChild(nextLink);
}
