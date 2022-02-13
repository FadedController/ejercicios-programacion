// Override document.writeln function
document.writeln = function (message) {
  const logsDiv = document.getElementById("logs");
  const p = document.createElement("p");
  p.innerText = message;
  logsDiv.appendChild(p);
};
