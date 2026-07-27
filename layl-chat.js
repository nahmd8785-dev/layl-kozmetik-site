function openLaylChat() {
  const message = prompt("LAYL AI'ya sorun:");

  if (!message) return;

  const answer = laylAI(message, "tr");

  alert("LAYL AI: " + answer);
}
