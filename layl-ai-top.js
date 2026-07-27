// LAYL AI TOP CONNECTOR

window.LAYL_TOP_AI = function(message, lang="tr") {

  if(
    window.LAYL_AI &&
    typeof window.LAYL_AI.answer === "function"
  ){
    return window.LAYL_AI.answer(message, lang);
  }

  return "LAYL AI hazırlanıyor...";
};
