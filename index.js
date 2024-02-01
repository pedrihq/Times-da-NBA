function selecionarItem(itemClicado) {
  var todosOsIntens = document.querySelectorAll(".time_escolhido");
  todosOsIntens.forEach((item) => {
    item.classList.remove("escolhido");
  });
  itemClicado.classList.add("escolhido");
}
//Mudança de cor do Atlanta Hawks
document.getElementById("atlanta-hawks").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "atlanta_hawks");
  selecionarItem(document.querySelector("#atlanta-hawks"));
});
//Mudança de cor do Boston Celtics
document
  .getElementById("boston-celtics")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "boston_celtics");
    selecionarItem(document.querySelector("#boston-celtics"));
  });
//Mudança de cor do Brooklin Nets
document
  .getElementById("brookliyn-nets")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "brookliyn_nets");
    selecionarItem(document.querySelector("#brookliyn-nets"));
  });
//Mudança de cor do Charlotte Hornets
document
  .getElementById("charlotte-hornets")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "charlotte_hornet");
    selecionarItem(document.querySelector("#charlotte-hornets"));
  });
//Mudança de cor do Chicago Bulls
document.getElementById("chicago-bulls").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "chicago_bulls");
  selecionarItem(document.querySelector("#chicago-bulls"));
});
//Mudança de cor do Cleveland Cavalier
document
  .getElementById("cleveland-cavaliers")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "cleveland_cavalier");
    selecionarItem(document.querySelector("#cleveland-cavaliers"));
  });
//Mudança de cor do Indiana Pacers
document
  .getElementById("indiana-pacers")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "indiana_pacers");
    selecionarItem(document.querySelector("#indiana-pacers"));
  });
//Mudança de cor do Miami Heat
document.getElementById("miami-heat").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "miami_heat");
  selecionarItem(document.querySelector("#miami-heat"));
});
//Mudança de cor do Milwukee-bucks
document
  .getElementById("milwaukee-bucks")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "milwaukee_bucks");
    selecionarItem(document.querySelector("#milwaukee-bucks"));
  });
//Mudança de cor do New York Knicks
document
  .getElementById("new-york-knicks")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "new_york_knicks");
    selecionarItem(document.querySelector("#new-york-knicks"));
  });
//Mudança de cor do Orlando Magic
document.getElementById("orlando-magic").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "orlando_magic");
  selecionarItem(document.querySelector("#orlando-magic"));
});
//Mudança de cor do Philadephia 76ears
document
  .getElementById("philadelphia-76ers")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "philadelphia_76ers");
    selecionarItem(document.querySelector("#philadelphia-76ers"));
  });
//Mudança de cor do Toronto Raptors
document
  .getElementById("toronto-raptors")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "toronto_raptors");
    selecionarItem(document.querySelector("#toronto-raptors"));
  });
//Mudança de cor do Washington Wizards
document
  .getElementById("washington-wizards")
  .addEventListener("click", function () {
    document.querySelector("body").setAttribute("class", "washington_wizards");
    selecionarItem(document.querySelector("#washington-wizards"));
  });
