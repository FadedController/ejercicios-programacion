const oldPrompt = prompt;

window.prompt = function (message, defaultValue) {
  const input = oldPrompt(message, defaultValue);
  const logsDiv = document.getElementById("logs");
  const p = document.createElement("p");
  p.innerText = `${message} ${input}`;
  logsDiv.appendChild(p);

  return input;
};
