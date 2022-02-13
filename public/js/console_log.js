// Override console.log function
const oldConsoleLog = console.log;
console.log = function (message) {
  const logsDiv = document.getElementById("logs");
  const p = document.createElement("p");
  p.innerText = message;
  logsDiv.appendChild(p);
  oldConsoleLog(message);
};
