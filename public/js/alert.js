// Override alert function
const oldAlert = alert;
window.alert = function (message) {
  const logsDiv = document.getElementById("logs");
  const p = document.createElement("p");
  p.innerText = `>> ${message}`;
  logsDiv.appendChild(p);
  oldAlert(message);
};
